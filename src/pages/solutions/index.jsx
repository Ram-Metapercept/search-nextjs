import SEO from "@/src/common/seo";
import Solutions from "@/src/components/solutions";
import Header from "@/src/layout/headers/header-12-black";
import Wrapper from "@/src/layout/wrapper";
import React from "react";

function solutions() {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Metapercept Technology Services (LLP) - solutions"}
        keywords="solutions"
      />
      <Header />
      <Solutions />
    </Wrapper>
  );
}

export default solutions;
