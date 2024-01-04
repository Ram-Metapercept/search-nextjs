import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import SubSectionDesign from "../sub-section-design";
import {
  infoSectionData,
  subSectionDetails,
} from "@/src/data/services/technical-writing/structure-auth-data";
function StructureAuth() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="Structured Authoring"
        backColor="#aeffd4"
        backImage="/assets/img/breadcrumb/bg_2.png"
        theme="greenTheme"
      />
      <SubSectionDesign
        infoSectionData={infoSectionData}
        subSectionDetails={subSectionDetails}
        listBackColor="#edfef5"
        listDarkColor="#086d38"
      />
    </div>
  );
}

export default StructureAuth;
