import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import SubSectionDesign from "../sub-section-design";
import {
  infoSectionData,
  subSectionDetails,
} from "@/src/data/services/technical-writing/edit-proof-data";
function EditProof() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="Editing & Proofreading"
        backColor="#ffd8bc"
        backImage="/assets/img/breadcrumb/bg_3.png"
        theme="orangeTheme"
      />
      <SubSectionDesign
        infoSectionData={infoSectionData}
        subSectionDetails={subSectionDetails}
        listBackColor="#fef3eb"
        listDarkColor="#f47f20"
      />
    </div>
  );
}

export default EditProof;
