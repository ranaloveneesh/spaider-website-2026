import type { Metadata } from "next";
import PrivacyHero from "@/app/components/privacy/PrivacyHero";
import Reveal from "@/app/components/ui/reveal";
import { EMAIL_ADDRESS } from "@/app/utils/constants";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: "How Spaider Space collects, uses, and protects personal data when you use spaiderspace.com.",
	alternates: { canonical: "https://www.spaiderspace.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
	return (
		<div className="w-full min-w-0 space-y-10 pb-10 sm:space-y-12 sm:pb-16 md:space-y-16 md:pb-20 mx-auto max-w-7xl">
			<PrivacyHero />

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-3 sm:space-y-4">
				<h2 className="font-outfit text-lg font-medium tracking-tight text-foreground sm:text-xl md:text-2xl">1. Data controller</h2>
				<p className="w-full text-base leading-7 text-muted/80 sm:leading-8">
					The controller for personal data covered by this policy is <strong className="font-medium text-foreground">SPAIDER Space S.à r.l.</strong>, 9, avenue des Hauts Fourneaux, 4362 Esch-sur-Alzette, Luxembourg (VAT: LU36772970). You can reach us at{" "}
					<a href={`mailto:${EMAIL_ADDRESS}`} className="font-medium text-foreground underline-offset-4 hover:underline">
						{EMAIL_ADDRESS}
					</a>
					.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-3 sm:space-y-4">
				<h2 className="font-outfit text-lg font-medium tracking-tight text-foreground sm:text-xl md:text-2xl">2. Personal data we process</h2>
				<ul className="w-full list-outside list-disc space-y-3 pl-4 text-base leading-7 text-muted/80 sm:pl-5 sm:leading-8">
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

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-3 sm:space-y-4">
				<h2 className="font-outfit text-lg font-medium tracking-tight text-foreground sm:text-xl md:text-2xl">3. Purposes and legal bases (GDPR)</h2>
				<p className="w-full text-base leading-7 text-muted/80 sm:leading-8">
					We process personal data to operate and secure the website, respond to your requests, arrange demos and follow-up, and manage investor enquiries where applicable. Depending on the case, we rely on <strong className="font-medium text-foreground">contractual necessity</strong>,{" "}
					<strong className="font-medium text-foreground">our legitimate interests</strong> (communicating with prospects, improving our services and website security, subject to balancing your rights), or <strong className="font-medium text-foreground">consent</strong> where we ask for it explicitly.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-3 sm:space-y-4">
				<h2 className="font-outfit text-lg font-medium tracking-tight text-foreground sm:text-xl md:text-2xl">4. Retention</h2>
				<p className="w-full text-base leading-7 text-muted/80 sm:leading-8">
					We keep personal data only as long as needed for the purposes above, including legal, accounting, or security requirements. Log information is retained for a limited period typical for server operations. Enquiry and CRM-related data are kept while the relationship is active and for a reasonable period
					afterwards unless a longer period is required by law.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-3 sm:space-y-4">
				<h2 className="font-outfit text-lg font-medium tracking-tight text-foreground sm:text-xl md:text-2xl">5. Recipients and transfers</h2>
				<p className="w-full text-base leading-7 text-muted/80 sm:leading-8">
					We use service providers (for example hosting, email, and scheduling) that process data on our instructions. Where they are located outside the European Economic Area, we use appropriate safeguards such as the EU Standard Contractual Clauses where required.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-3 sm:space-y-4">
				<h2 className="font-outfit text-lg font-medium tracking-tight text-foreground sm:text-xl md:text-2xl">6. Security</h2>
				<p className="w-full text-base leading-7 text-muted/80 sm:leading-8">
					We implement technical and organisational measures appropriate to the risk, including access controls and encryption in transit where applicable. No transmission over the internet is completely secure; you share information at your own risk beyond what we reasonably protect.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-3 sm:space-y-4">
				<h2 className="font-outfit text-lg font-medium tracking-tight text-foreground sm:text-xl md:text-2xl">7. Your rights</h2>
				<p className="w-full text-base leading-7 text-muted/80 sm:leading-8">
					Under the GDPR and applicable law, you may have the right to access, rectify, or erase your personal data, restrict or object to certain processing, and data portability where applicable. You may lodge a complaint with a supervisory authority-in Luxembourg, the Commission nationale pour la protection des
					données (CNPD). To exercise your rights, contact us at the email address above.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-3 sm:space-y-4">
				<h2 className="font-outfit text-lg font-medium tracking-tight text-foreground sm:text-xl md:text-2xl">8. Cookies</h2>
				<p className="w-full text-base leading-7 text-muted/80 sm:leading-8">
					We use cookies and similar technologies that are strictly necessary for the website to function. If we introduce optional analytics or marketing cookies, we will update this policy and, where required, obtain your consent before using them.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-3 sm:space-y-4">
				<h2 className="font-outfit text-lg font-medium tracking-tight text-foreground sm:text-xl md:text-2xl">9. Changes</h2>
				<p className="w-full text-base leading-7 text-muted/80 sm:leading-8">We may update this policy from time to time. The &quot;Last updated&quot; date at the top will change when we do. Material changes will be indicated on this page or as otherwise required by law.</p>
			</Reveal>
		</div>
	);
}
