import BreadcrumbArea from "@/src/common/breadcrumb-area";

import React from "react";
import Approach from "./approach-2";
import SubTypes from "./sub-types";
import Technologies from "./technologies";

function SoftwareDevelopment() {
  // const slug = { name: "Services", url: "/services" };
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      {/* <Header /> */}
      <BreadcrumbArea
        title="Software Development"
        backColor="#ffc2c4"
        backImage="/assets/img/breadcrumb/bg_5.png"
        theme="redTheme"
        info="Amplify your business impact with our skilled coding and transformative software development expertise, delivering innovative solutions to elevate your AI product enablement."
      />

      <Approach />
      <SubTypes />
      <Technologies />
      {/* <Footer /> */}
    </div>
  );
}

export default SoftwareDevelopment;
