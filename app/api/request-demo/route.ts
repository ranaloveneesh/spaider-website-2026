import { type NextRequest, NextResponse } from "next/server";
import { getDb } from "@/app/lib/mongodb";
import { sendFormSubmissionEmail } from "@/app/lib/form-email";

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
		await sendFormSubmissionEmail({
			subject: "New Request Demo Submission",
			formName: "Request demo form",
			fields: {
				"First Name": body.firstname,
				"Last Name": body.lastname,
				"Work Email": body.workEmail,
				Company: body.company,
				"Job Title": body.jobTitle,
				Country: body.country,
				Phone: body.phone,
				"Help Topic": body.helpTopic,
				Message: body.message,
			},
		});

		return NextResponse.json({ ok: true });
	} catch (error) {
		console.error("Error saving request demo submission", error);
		return NextResponse.json({ ok: false, error: "Failed to save submission" }, { status: 500 });
	}
}
