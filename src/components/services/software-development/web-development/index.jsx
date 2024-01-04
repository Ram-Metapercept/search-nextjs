import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import SubSectionDesign from "../sub-section-design";
import {
  infoSectionData,
  subTypesData,
} from "@/src/data/services/software-development/web-application/web-application-data";

function WebDevelopment() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="Web Development"
        backColor="#ffd8bc"
        backImage="/assets/img/breadcrumb/bg_3.png"
        theme="orangeTheme"
        info="Bringing user experience and precision together to create engaging experiences for people worldwide through our web development journey."
      />
      <SubSectionDesign
        infoSectionData={infoSectionData}
        subTypesData={subTypesData}
      />
    </div>
  );
}

export default WebDevelopment;
