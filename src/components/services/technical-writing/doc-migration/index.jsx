import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import SubSectionDesign from "../sub-section-design";
import {
  infoSectionData,
  subSectionDetails,
} from "@/src/data/services/technical-writing/doc-migration-data";
function DocMigration() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="Document Migration"
        backColor="#ffc2c4"
        backImage="/assets/img/breadcrumb/bg_5.png"
        theme="redTheme"
      />
      <SubSectionDesign
        infoSectionData={infoSectionData}
        subSectionDetails={subSectionDetails}
        listBackColor="#feedee"
        listDarkColor="#cd5c5c"
      />
    </div>
  );
}

export default DocMigration;
