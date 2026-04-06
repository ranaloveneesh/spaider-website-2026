import { type NextRequest, NextResponse } from "next/server";
import { getDb } from "@/app/lib/mongodb";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		const db = await getDb();
		const collection = db.collection("request_demo_submissions");

		const doc = {
			...body,
			createdAt: new Date(),
		};

		await collection.insertOne(doc);

		return NextResponse.json({ ok: true });
	} catch (error) {
		console.error("Error saving request demo submission", error);
		return NextResponse.json({ ok: false, error: "Failed to save submission" }, { status: 500 });
	}
}
