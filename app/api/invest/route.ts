import { type NextRequest, NextResponse } from "next/server";
import { getDb } from "@/app/lib/mongodb";
import { sendFormSubmissionEmail } from "@/app/lib/form-email";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		const db = await getDb();
		const collection = db.collection("invest_submissions");

		const doc = {
			...body,
			createdAt: new Date(),
		};

		await collection.insertOne(doc);
		await sendFormSubmissionEmail({
			subject: "New Invest Form Submission",
			formName: "Invest form",
			fields: {
				"First Name": body.firstname,
				"Last Name": body.lastname,
				Email: body.email,
				Phone: body.phone,
				Message: body.message,
			},
		});

		return NextResponse.json({ ok: true });
	} catch (error) {
		console.error("Error saving invest submission", error);
		return NextResponse.json({ ok: false, error: "Failed to save submission" }, { status: 500 });
	}
}
