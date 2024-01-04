import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import InfoSection from "./info-section";

function StaffAugmentation() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="Staff Augmentation"
        backColor="#c3edff"
        backImage="/assets/img/breadcrumb/bg_6.png"
        theme="grayTheme"
      />
      <InfoSection />
    </div>
  );
}

export default StaffAugmentation;
