import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import SubSectionDesign from "../sub-section-design";
import {
  infoSectionData,
  subSectionDetails,
} from "@/src/data/services/technical-writing/template-design-data";
function TemplateDesign() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="XSLT, DTD Designing"
        backColor="#fff1cd"
        backImage="/assets/img/breadcrumb/bg_4.png"
        theme="yellowTheme"
      />
      <SubSectionDesign
        infoSectionData={infoSectionData}
        subSectionDetails={subSectionDetails}
        listBackColor="#fff9ea"
        listDarkColor="#fcb713"
      />
    </div>
  );
}

export default TemplateDesign;
