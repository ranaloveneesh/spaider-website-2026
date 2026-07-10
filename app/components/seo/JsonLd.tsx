type JsonLdProps = {
	/** Schema.org object (serialized with JSON.stringify). */
	data: object;
};

/** Schema.org JSON-LD. Safe serialization; no user-controlled HTML. */
export function JsonLd({ data }: JsonLdProps) {
	const json = JSON.stringify(data).replace(/</g, "\\u003c");
	return <script type="application/ld+json">{json}</script>;
}
