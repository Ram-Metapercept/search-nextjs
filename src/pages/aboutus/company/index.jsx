import SEO from "@/src/common/seo";
import Company from "@/src/components/about-us/company";
import Header from "@/src/layout/headers/header-12-black";
import Wrapper from "@/src/layout/wrapper";
import React from "react";

function company() {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Metapercept Technology Services (LLP) - aboutus/company"}
        keywords="company"
      />
      <Header />
      <Company />
    </Wrapper>
  );
}

export default company;
