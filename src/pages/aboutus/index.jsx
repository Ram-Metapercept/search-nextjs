import SEO from "@/src/common/seo";
import AboutUs from "@/src/components/about-us";
import Header from "@/src/layout/headers/header-12-black";
import Wrapper from "@/src/layout/wrapper";
import React from "react";

function aboutus() {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Metapercept Technology Services (LLP) - aboutus"}
        keywords="about us"
      />
      <Header />
      <AboutUs />
    </Wrapper>
  );
}

export default aboutus;
