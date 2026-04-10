import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM;
const FORM_NOTIFICATIONS_TO = process.env.FORM_NOTIFICATIONS_TO;

function requireEnv(name: string, value: string | undefined): string {
	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`);
	}
	return value;
}

function escapeHtml(input: string): string {
	return input
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");
}

function formatValue(value: unknown): string {
	if (value === null || value === undefined) return "-";
	const text = String(value).trim();
	return text || "-";
}

export async function sendFormSubmissionEmail({
	subject,
	formName,
	fields,
}: {
	subject: string;
	formName: string;
	fields: Record<string, unknown>;
}) {
	const transporter = nodemailer.createTransport({
		host: requireEnv("SMTP_HOST", SMTP_HOST),
		port: SMTP_PORT,
		secure: SMTP_PORT === 465,
		auth: {
			user: requireEnv("SMTP_USER", SMTP_USER),
			pass: requireEnv("SMTP_PASS", SMTP_PASS),
		},
	});

	const from = requireEnv("SMTP_FROM", SMTP_FROM);
	const to = requireEnv("FORM_NOTIFICATIONS_TO", FORM_NOTIFICATIONS_TO);

	const entries = Object.entries(fields);
	const textLines = entries.map(([label, value]) => `${label}: ${formatValue(value)}`);
	const text = [`New submission from ${formName}`, "", ...textLines].join("\n");

	const htmlRows = entries
		.map(
			([label, value]) =>
				`<tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">${escapeHtml(label)}</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(formatValue(value))}</td></tr>`,
		)
		.join("");

	const html = `
		<div style="font-family:Arial, sans-serif; color:#111;">
			<p>New submission from <strong>${escapeHtml(formName)}</strong>.</p>
			<table style="border-collapse:collapse; width:100%; max-width:680px;">
				<tbody>
					${htmlRows}
				</tbody>
			</table>
		</div>
	`;

	await transporter.sendMail({
		from,
		to,
		subject,
		text,
		html,
	});
}
