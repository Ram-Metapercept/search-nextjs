import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import SubSectionDesign from "../sub-section-design";
import {
  infoSectionData,
  subSectionDetails,
} from "@/src/data/services/technical-writing/knowledge-management-data";
function Knowledge() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="Knowledge Management"
        backColor="#c3edff"
        backImage="/assets/img/breadcrumb/bg_6.png"
        theme="grayTheme"
      />
      <SubSectionDesign
        infoSectionData={infoSectionData}
        subSectionDetails={subSectionDetails}
        listbackColor="#c3edff"
        listDarkColor="#116082"
      />
    </div>
  );
}

export default Knowledge;
