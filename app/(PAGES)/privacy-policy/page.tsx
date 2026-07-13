import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Reveal from "@/app/components/ui/reveal";
import { EMAIL_ADDRESS } from "@/app/utils/constants";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: "How Spaider Space collects, uses, and protects personal data when you use spaiderspace.com.",
	alternates: { canonical: "https://www.spaiderspace.com/privacy-policy" },
};

function PolicyRow({ index, title, children }: { index: string; title: string; children: ReactNode }) {
	return (
		<Reveal variant="fade-up" threshold={0.1} className="grid grid-cols-1 gap-3 border-b border-spx-rule py-7 sm:py-8 min-[760px]:grid-cols-[280px_1fr] min-[760px]:gap-[1.875rem]">
			<div>
				<span className="spx-index block">{index}</span>
				<h2 className="mt-2 text-[1.1rem] font-semibold tracking-[-0.01em] text-foreground">{title}</h2>
			</div>
			<div className="max-w-[62ch] space-y-4 text-[1.02rem] leading-[1.65] text-spx-mute">{children}</div>
		</Reveal>
	);
}

export default function PrivacyPolicyPage() {
	return (
		<div className="w-full min-w-0 overflow-x-clip" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}>
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)] text-left" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				{/* ── Hero ── */}
				<Reveal as="header" variant="fade-up" threshold={0.1} className="border-b border-spx-rule pb-12 pt-6 sm:pb-16 sm:pt-10">
					<h1 className="max-w-[15ch] font-outfit text-[clamp(2.5rem,6.8vw,5.6rem)] font-medium leading-[1.05] tracking-tight text-foreground">
						Privacy <span className="spx-grad-text">Policy</span>
					</h1>
					<p className="spx-lede mt-7">
						This policy describes how SPAIDER Space S.à r.l. (&quot;we&quot;, &quot;us&quot;) processes personal data when you visit <span className="text-spx-ink-2">spaiderspace.com</span> or contact us through the website.
					</p>
					<p className="spx-label mt-8">Last updated: 13 July 2026</p>
				</Reveal>

				{/* ── Policy sections ── */}
				<section className="mt-[calc(var(--spx-section-gap)*0.5)]">
					<PolicyRow index="01" title="Data controller">
						<p>
							The controller for personal data covered by this policy is <strong className="font-medium text-spx-ink-2">SPAIDER Space S.à r.l.</strong>, 9, avenue des Hauts Fourneaux, 4362 Esch-sur-Alzette, Luxembourg (VAT: LU36772970). You can reach us at{" "}
							<a href={`mailto:${EMAIL_ADDRESS}`} className="font-medium text-spx-ink-2 underline-offset-4 transition-colors hover:text-spx-cyan hover:underline">
								{EMAIL_ADDRESS}
							</a>
							.
						</p>
					</PolicyRow>

					<PolicyRow index="02" title="Personal data we process">
						<ul className="space-y-4">
							<li>
								<span className="font-medium text-spx-ink-2">Website use.</span> Technical information such as IP address, browser type, device information, and pages visited, via server logs and essential cookies needed to run the site.
							</li>
							<li>
								<span className="font-medium text-spx-ink-2">Forms and enquiries.</span> When you request a demo, register investor interest, or email us, we process the details you provide (for example name, work email, company, role, country, phone if given, and the content of your message).
							</li>
							<li>
								<span className="font-medium text-spx-ink-2">Scheduling.</span> If you book a meeting through a third-party scheduling link we provide, that provider processes data according to its own policy; we only receive the information needed to hold the meeting.
							</li>
							<li>
								<span className="font-medium text-spx-ink-2">Analytics.</span> We use analytics services (such as Google Analytics and Vercel Analytics) to understand how the website is used - for example pages visited, approximate location derived from IP address, and device and browser information. Analytics cookies
								are only set with your consent where required (see Cookies below).
							</li>
						</ul>
					</PolicyRow>

					<PolicyRow index="03" title="Purposes and legal bases (GDPR)">
						<p>
							We process personal data to operate and secure the website, respond to your requests, arrange demos and follow-up, and manage investor enquiries where applicable. Depending on the case, we rely on <strong className="font-medium text-spx-ink-2">contractual necessity</strong>,{" "}
							<strong className="font-medium text-spx-ink-2">our legitimate interests</strong> (communicating with prospects, improving our services and website security, subject to balancing your rights), or <strong className="font-medium text-spx-ink-2">consent</strong> where we ask for it explicitly. We do not use
							your personal data for automated decision-making that produces legal or similarly significant effects.
						</p>
					</PolicyRow>

					<PolicyRow index="04" title="Retention">
						<p>
							We keep personal data only as long as needed for the purposes above, including legal, accounting, or security requirements. Log information is retained for a limited period typical for server operations. Enquiry and CRM-related data are kept while the relationship is active and for a reasonable period
							afterwards unless a longer period is required by law.
						</p>
					</PolicyRow>

					<PolicyRow index="05" title="Recipients and transfers">
						<p>
							We use service providers (for example hosting, email, scheduling, and analytics providers such as Google and Vercel) that process data on our instructions. Where they are located outside the European Economic Area, we use appropriate safeguards such as the EU Standard Contractual Clauses or an applicable
							adequacy decision (for example the EU–US Data Privacy Framework) where required.
						</p>
					</PolicyRow>

					<PolicyRow index="06" title="Security">
						<p>We implement technical and organisational measures appropriate to the risk, including access controls and encryption in transit where applicable. No transmission over the internet is completely secure; you share information at your own risk beyond what we reasonably protect.</p>
					</PolicyRow>

					<PolicyRow index="07" title="Your rights">
						<p>
							Under the GDPR and applicable law, you may have the right to access, rectify, or erase your personal data, restrict or object to certain processing, and data portability where applicable. Where processing is based on consent, you can withdraw that consent at any time without affecting the lawfulness of
							processing before withdrawal. You may lodge a complaint with a supervisory authority. In Luxembourg that is the Commission nationale pour la protection des données (CNPD). To exercise your rights, contact us at the email address above.
						</p>
					</PolicyRow>

					<PolicyRow index="08" title="Cookies">
						<p>
							We use cookies and similar technologies that are strictly necessary for the website to function. In addition, we use analytics services (Google Analytics and Vercel Analytics) to measure how the site is used. Cookies that are not strictly necessary - such as Google Analytics cookies - are only set after
							you give consent through the cookie banner, and you can withdraw or change your choice at any time. Vercel Analytics operates without cookies and does not track visitors across sites.
						</p>
					</PolicyRow>

					<PolicyRow index="09" title="Enterprise platform data">
						<p>
							This policy covers personal data collected through <span className="font-medium text-spx-ink-2">spaiderspace.com</span> only. Data that customers process inside the SPAIDER platform (for example enterprise documents, knowledge bases, and project content) is governed by the applicable customer agreement,
							under which SPAIDER acts as a processor on the customer&apos;s instructions. Website form data and customer platform data are kept separate.
						</p>
					</PolicyRow>

					<PolicyRow index="10" title="Changes">
						<p>We may update this policy from time to time. The &quot;Last updated&quot; date at the top will change when we do. Material changes will be indicated on this page or as otherwise required by law.</p>
					</PolicyRow>
				</section>
			</div>
		</div>
	);
}
