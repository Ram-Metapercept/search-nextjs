import BreadcrumbArea from "@/src/common/breadcrumb-area";

import React from "react";
import SolutionsOffer from "./solutions-offer";
import SolutionsAreaRight from "./solutions-area-right";

import solutionsData from "@/src/data/solutions/solutions-data";
import SolutionsAreaLeft from "./solutions-area-left";
import SolutionsArea from "./solutions-area";
const software = solutionsData[0];
const technical = solutionsData[1];
const consulting = solutionsData[2];

function Solutions() {
  // const [hydrated, setHydrated] = React.useState(false);
  // React.useEffect(() => {
  //   setHydrated(true);
  // }, []);
  // if (!hydrated) {
  //   // Returns null on first render, so the client and server match
  //   return null;
  // }
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      {/* <Header /> */}
      <BreadcrumbArea
        title="Solutions"
        backColor="#ffd8bc"
        backImage="/assets/img/breadcrumb/bg_3.png"
        theme="orangeTheme"
      />
      <SolutionsOffer />

      <SolutionsArea />
      {/* <Footer /> */}
    </div>
  );
}

export default Solutions;
