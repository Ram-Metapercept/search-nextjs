import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import {
  infoSectionData,
  subTypesData,
} from "@/src/data/services/software-development/application-integration/application-integration-data";
import SubSectionDesign from "../sub-section-design";
function ApplicationIntegration() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="Application Integration"
        backColor="#fff1cd"
        backImage="/assets/img/breadcrumb/bg_4.png"
        theme="yellowTheme"
      />
      <SubSectionDesign
        infoSectionData={infoSectionData}
        subTypesData={subTypesData}
      />
    </div>
  );
}

export default ApplicationIntegration;
