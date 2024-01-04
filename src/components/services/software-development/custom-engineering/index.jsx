import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import {
  infoSectionData,
  subTypesData,
} from "@/src/data/services/software-development/custom-engineering/custom-engineering-data";
import SubSectionDesign from "../sub-section-design";
function CustomEngineering() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="Custom Engineering"
        backColor="#aeffd4"
        backImage="/assets/img/breadcrumb/bg_2.png"
        theme="greenTheme"
        info="Unlock your competitive edge with tailor-made software solutions that align seamlessly with your business needs. From bespoke software and specialized plugins to seamless API integrations and unique platforms, we bring your vision to life."
      />
      <SubSectionDesign
        infoSectionData={infoSectionData}
        subTypesData={subTypesData}
      />
    </div>
  );
}

export default CustomEngineering;
