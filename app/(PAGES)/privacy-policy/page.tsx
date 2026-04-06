import type { Metadata } from "next";
import Reveal from "@/app/components/ui/reveal";
import { EMAIL_ADDRESS } from "@/app/utils/constants";

export const metadata: Metadata = {
	title: "Privacy Policy - SPAIDER",
	description: "How Spaider Space collects, uses, and protects personal data when you use spaiderspace.com.",
};

export default function PrivacyPolicyPage() {
	return (
		<div className="w-full min-w-0 space-y-8 pb-10 sm:space-y-10 sm:pb-12">
			<Reveal as="header" variant="fade-up" threshold={0.35} className="space-y-3 sm:space-y-4">
				<h1 className="font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">Privacy Policy</h1>
				<p className="text-xs text-muted-tertiary font-inter sm:text-sm">Last updated: 2 April 2026</p>
				<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					This policy describes how SPAIDER Space S.à r.l. (&quot;we&quot;, &quot;us&quot;) processes personal data when you visit <span className="text-foreground">spaiderspace.com</span> or contact us through the website.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-2.5 sm:space-y-3">
				<h2 className="font-manrope text-base font-semibold text-foreground sm:text-lg lg:text-xl">1. Data controller</h2>
				<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					The controller for personal data covered by this policy is <strong className="font-medium text-foreground">SPAIDER Space S.à r.l.</strong>, 9, avenue des Hauts Fourneaux, 4362 Esch-sur-Alzette, Luxembourg (VAT: LU36772970). You can reach us at{" "}
					<a href={`mailto:${EMAIL_ADDRESS}`} className="font-medium text-foreground underline-offset-4 hover:underline">
						{EMAIL_ADDRESS}
					</a>
					.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-2.5 sm:space-y-3">
				<h2 className="font-manrope text-base font-semibold text-foreground sm:text-lg lg:text-xl">2. Personal data we process</h2>
				<ul className="list-outside list-disc space-y-2 pl-4 text-xs leading-6 text-muted-foreground font-inter sm:pl-5 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					<li>
						<span className="text-foreground">Website use:</span> technical information such as IP address, browser type, device information, and pages visited, via server logs and essential cookies needed to run the site.
					</li>
					<li>
						<span className="text-foreground">Forms and enquiries:</span> when you request a demo, register investor interest, or email us, we process the details you provide (for example name, work email, company, role, country, phone if given, and the content of your message).
					</li>
					<li>
						<span className="text-foreground">Scheduling:</span> if you book a meeting through a third-party scheduling link we provide, that provider processes data according to its own policy; we only receive the information needed to hold the meeting.
					</li>
				</ul>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-2.5 sm:space-y-3">
				<h2 className="font-manrope text-base font-semibold text-foreground sm:text-lg lg:text-xl">3. Purposes and legal bases (GDPR)</h2>
				<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					We process personal data to operate and secure the website, respond to your requests, arrange demos and follow-up, and manage investor enquiries where applicable. Depending on the case, we rely on <strong className="font-medium text-foreground">contractual necessity</strong>,{" "}
					<strong className="font-medium text-foreground">our legitimate interests</strong> (communicating with prospects, improving our services and website security, subject to balancing your rights), or <strong className="font-medium text-foreground">consent</strong> where we ask for it explicitly.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-2.5 sm:space-y-3">
				<h2 className="font-manrope text-base font-semibold text-foreground sm:text-lg lg:text-xl">4. Retention</h2>
				<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					We keep personal data only as long as needed for the purposes above, including legal, accounting, or security requirements. Log information is retained for a limited period typical for server operations. Enquiry and CRM-related data are kept while the relationship is active and for a reasonable period
					afterwards unless a longer period is required by law.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-2.5 sm:space-y-3">
				<h2 className="font-manrope text-base font-semibold text-foreground sm:text-lg lg:text-xl">5. Recipients and transfers</h2>
				<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					We use service providers (for example hosting, email, and scheduling) that process data on our instructions. Where they are located outside the European Economic Area, we use appropriate safeguards such as the EU Standard Contractual Clauses where required.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-2.5 sm:space-y-3">
				<h2 className="font-manrope text-base font-semibold text-foreground sm:text-lg lg:text-xl">6. Security</h2>
				<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					We implement technical and organisational measures appropriate to the risk, including access controls and encryption in transit where applicable. No transmission over the internet is completely secure; you share information at your own risk beyond what we reasonably protect.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-2.5 sm:space-y-3">
				<h2 className="font-manrope text-base font-semibold text-foreground sm:text-lg lg:text-xl">7. Your rights</h2>
				<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					Under the GDPR and applicable law, you may have the right to access, rectify, or erase your personal data, restrict or object to certain processing, and data portability where applicable. You may lodge a complaint with a supervisory authority—in Luxembourg, the Commission nationale pour la protection des
					données (CNPD). To exercise your rights, contact us at the email address above.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-2.5 sm:space-y-3">
				<h2 className="font-manrope text-base font-semibold text-foreground sm:text-lg lg:text-xl">8. Cookies</h2>
				<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					We use cookies and similar technologies that are strictly necessary for the website to function. If we introduce optional analytics or marketing cookies, we will update this policy and, where required, obtain your consent before using them.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-2.5 sm:space-y-3">
				<h2 className="font-manrope text-base font-semibold text-foreground sm:text-lg lg:text-xl">9. Changes</h2>
				<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					We may update this policy from time to time. The &quot;Last updated&quot; date at the top will change when we do. Material changes will be indicated on this page or as otherwise required by law.
				</p>
			</Reveal>
		</div>
	);
}
