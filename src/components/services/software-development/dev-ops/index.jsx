import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import {
  infoSectionData,
  subTypesData,
} from "@/src/data/services/software-development/dev-ops/dev-ops-data";
import SubSectionDesign from "../sub-section-design";
function DevOps() {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="DocOps"
        backColor="#c3edff"
        backImage="/assets/img/breadcrumb/bg_6.png"
        theme="grayTheme"
        info="Our cutting-edge cloud-based technical documentation solutions boost your business efficiency to new heights. Experience seamless scalability, enhanced collaboration, and unparalleled performance for your organization's success."
      />
      <SubSectionDesign
        infoSectionData={infoSectionData}
        subTypesData={subTypesData}
      />
    </div>
  );
}

export default DevOps;
