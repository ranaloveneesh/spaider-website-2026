const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface LoginResponse {
	access_token: string;
	token_type: string;
	email: string | null;
	full_name: string;
	organisation: string;
	organisation_industry: string;
	organisation_role: string | null;
	organization_id: number;
	role: "admin" | "user";
	status: "approved" | "pending" | "blocked";
	user_id: number;
	username: string;
}

// Shape returned by GET /auth/me - a distinct (but overlapping) shape from
// LoginResponse: it keys the user by `id` instead of `user_id` and adds
// `email_verified`. Only the fields the UI actually reads are declared here.
export interface AuthUser {
	username: string;
	full_name: string;
	email: string | null;
	role: "admin" | "user";
	status: "approved" | "pending" | "blocked";
}

export interface InvestSubmission {
	id: number;
	firstname: string;
	lastname: string;
	email: string;
	phone: string | null;
	message: string;
	created_at: string;
}

export interface RequestDemoSubmission {
	id: number;
	firstname: string;
	lastname: string;
	work_email: string;
	company: string;
	job_title: string;
	country: string;
	phone: string | null;
	help_topic: string;
	message: string;
	created_at: string;
}

export class ApiError extends Error {
	status: number;

	constructor(status: number, message: string) {
		super(message);
		this.name = "ApiError";
		this.status = status;
	}
}

async function parseErrorDetail(res: Response): Promise<string> {
	try {
		const body = await res.json();
		if (typeof body?.detail === "string") return body.detail;
	} catch {
		// response had no JSON body
	}
	return `Request failed with status ${res.status}`;
}

async function authorizedGet<T>(path: string, token: string): Promise<T> {
	const res = await fetch(`${BASE_URL}${path}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	if (!res.ok) throw new ApiError(res.status, await parseErrorDetail(res));
	return res.json();
}

export async function login(username: string, password: string): Promise<LoginResponse> {
	const res = await fetch(`${BASE_URL}/auth/token`, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({ username, password }),
	});
	if (!res.ok) throw new ApiError(res.status, await parseErrorDetail(res));
	return res.json();
}

export async function getMe(token: string): Promise<AuthUser> {
	return authorizedGet<AuthUser>("/auth/me", token);
}

export async function getInvestSubmissions(token: string, limit = 100): Promise<InvestSubmission[]> {
	const body = await authorizedGet<{ data: InvestSubmission[] }>(`/website/admin/invest?limit=${limit}`, token);
	return body.data;
}

export async function getRequestDemoSubmissions(token: string, limit = 100): Promise<RequestDemoSubmission[]> {
	const body = await authorizedGet<{ data: RequestDemoSubmission[] }>(`/website/admin/request-demo?limit=${limit}`, token);
	return body.data;
}
