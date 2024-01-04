import SEO from "@/src/common/seo";
import TechnicalPublication from "@/src/components/solutions/technical-publication";
import Header from "@/src/layout/headers/header-12-black";

import Wrapper from "@/src/layout/wrapper";
import React from "react";

function technicalpublication() {
  return (
    <Wrapper>
      <SEO
        pageTitle={
          "Metapercept Technology Services (LLP) - solutions/technicalpublication"
        }
        keywords="technical publication"
      />
      <Header />
      <TechnicalPublication />
    </Wrapper>
  );
}

export default technicalpublication;
