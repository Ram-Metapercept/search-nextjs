import SEO from "@/src/common/seo";
import SoftwareEngineering from "@/src/components/solutions/software-engineering";
import Header from "@/src/layout/headers/header-12-black";
import Wrapper from "@/src/layout/wrapper";

import React from "react";

function softwareengineering() {
  return (
    <Wrapper>
      <SEO
        pageTitle={
          "Metapercept Technology Services (LLP) - solutions/softwareengineering"
        }
        keywords="software engineering"
      />
      <Header />
      <SoftwareEngineering />
    </Wrapper>
  );
}

export default softwareengineering;
