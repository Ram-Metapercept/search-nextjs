import BreadcrumbArea from "@/src/common/breadcrumb-area";

import React from "react";
import ServiceDetailsArea from "./service-details-area";
import FeatureArea from "./feature-area";
import ServiceCircle from "./service-circle";

function Services() {
  return (
    <>
      {/* <Header /> */}
      <BreadcrumbArea
        title="Services"
        backColor="#d3daff"
        backImage="/assets/img/breadcrumb/bg_1.png"
        theme="blueTheme"
        info="Unlock innovation and drive success with Metapercept's cutting-edge technology services. Our seasoned team transforms ideas into user-friendly products, offering a seamless blend of software development and technical writing expertise."
      />
      {/* <ServiceCircle/> */}
      <ServiceDetailsArea />
      <FeatureArea />
      {/* <Footer /> */}
    </>
  );
}

export default Services;
