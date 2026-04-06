type JsonLdProps = {
	/** Schema.org object (serialized with JSON.stringify). */
	data: object;
};

/** Schema.org JSON-LD. Safe serialization; no user-controlled HTML. */
export function JsonLd({ data }: JsonLdProps) {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(data).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
