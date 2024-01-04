import BreadcrumbArea from "@/src/common/breadcrumb-area";

import React from "react";
import OurTeam from "./our-team";
import OurMission from "./our-mission";
import Partners2 from "./partners-2";
import PortfolioArea2 from "./portfolio-area-2";
import Industries3 from "./industries-3";

const AboutUs = () => {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <BreadcrumbArea
        title="About Us"
        backColor="#ffc2c4"
        backImage="/assets/img/breadcrumb/bg_5.png"
        theme="redTheme"
        info="Driving industry revolution with intelligent software solutions and strategic acumen."
      />
      <OurTeam />
      <OurMission />
      <Partners2 />
      {/* <Industries3 /> */}
      <PortfolioArea2 />
    </div>
  );
};

export default AboutUs;
