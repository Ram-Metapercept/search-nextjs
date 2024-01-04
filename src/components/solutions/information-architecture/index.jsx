import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import InfoSection from "./info-section";

function InformationArchitecture() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="Information Architecture"
        backColor="#fff1cd"
        backImage="/assets/img/breadcrumb/bg_4.png"
        theme="yellowTheme"
      />
      <InfoSection />
    </div>
  );
}

export default InformationArchitecture;
