"use client";

import { SpaiderSectionDesktop } from "./spaider-section/SpaiderSectionDesktop";
import { SpaiderSectionMobile } from "./spaider-section/SpaiderSectionMobile";

export default function WhySpaiderSection() {
  return (
    <section className="relative mt-24">
      <div className="mx-auto">
        <SpaiderSectionMobile />
        <SpaiderSectionDesktop />
      </div>
    </section>
  );
}
