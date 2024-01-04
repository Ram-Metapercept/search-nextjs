import SEO from "@/src/common/seo";
import Services from "@/src/components/services";
import Header from "@/src/layout/headers/header-12-black";
import Wrapper from "@/src/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Metapercept Technology Services (LLP) - services"}
        keywords="services"
      />
      <Header />
      <Services />
    </Wrapper>
  );
};

export default index;
