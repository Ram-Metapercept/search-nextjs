import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import SubSectionDesign from "../sub-section-design";
import {
  infoSectionData,
  subSectionDetails,
} from "@/src/data/services/technical-writing/content-conversion-data";
function ContentConversion() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="Content Conversion"
        backColor="#d3daff"
        backImage="/assets/img/breadcrumb/bg_1.png"
        theme="blueTheme"
      />
      <SubSectionDesign
        infoSectionData={infoSectionData}
        subSectionDetails={subSectionDetails}
        listbackColor="#d3daff"
        listDarkColor="#324da0"
      />
    </div>
  );
}

export default ContentConversion;
