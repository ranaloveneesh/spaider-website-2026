"use client";

import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { type AuthUser, login as apiLogin, getMe, type LoginResponse } from "./api";

const STORAGE_KEY = "spaider_admin_session";

interface StoredSession {
	token: string;
	user: AuthUser;
}

type AuthStatus = "loading" | "authenticated" | "unauthenticated";

interface AuthContextValue {
	status: AuthStatus;
	token: string | null;
	user: AuthUser | null;
	login: (username: string, password: string) => Promise<LoginResponse>;
	logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function readStoredSession(): StoredSession | null {
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		return JSON.parse(raw) as StoredSession;
	} catch {
		return null;
	}
}

function writeStoredSession(session: StoredSession | null) {
	if (session) {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
	} else {
		window.localStorage.removeItem(STORAGE_KEY);
	}
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const [status, setStatus] = useState<AuthStatus>("loading");
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState<AuthUser | null>(null);

	useEffect(() => {
		const stored = readStoredSession();
		if (!stored) {
			setStatus("unauthenticated");
			return;
		}
		setToken(stored.token);
		setUser(stored.user);
		getMe(stored.token)
			.then((freshUser) => {
				setUser(freshUser);
				writeStoredSession({ token: stored.token, user: freshUser });
				setStatus("authenticated");
			})
			.catch(() => {
				writeStoredSession(null);
				setToken(null);
				setUser(null);
				setStatus("unauthenticated");
			});
	}, []);

	const login = useCallback(async (username: string, password: string) => {
		const response = await apiLogin(username, password);
		const { access_token, token_type: _token_type, ...user } = response;
		writeStoredSession({ token: access_token, user });
		setToken(access_token);
		setUser(user);
		setStatus("authenticated");
		return response;
	}, []);

	const logout = useCallback(() => {
		writeStoredSession(null);
		setToken(null);
		setUser(null);
		setStatus("unauthenticated");
	}, []);

	const value = useMemo(() => ({ status, token, user, login, logout }), [status, token, user, login, logout]);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within AuthProvider");
	return ctx;
}
