import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React, { useEffect, useState } from "react";
import LeadershipTeam from "./leadership-team";
import OurTeam from "./our-team";
import Membership from "./membership";
import Affiliation from "./affiliation";
import findHeaderHeight from "@/hooks/find-header-height";
import JoinUs from "./joinUs";
import Accrediations from "./accrediations";
import Industries from "./industries";

function Company() {
  const [headerHeight, setHeaderHeight] = useState(110);
  useEffect(() => {
    setHeaderHeight(findHeaderHeight());
  }, []);
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="Company"
        backColor="#ffd8bc"
        backImage="/assets/img/breadcrumb/bg_3.png"
        theme="orangeTheme"
      />
      <Affiliation headerHeight={headerHeight} />
      {/* <Membership headerHeight={headerHeight} /> */}
      <Accrediations headerHeight={headerHeight} />
      <Industries headerHeight={headerHeight} />
      <LeadershipTeam />
      {/* <JoinUs /> */}
      <OurTeam />
    </div>
  );
}

export default Company;
