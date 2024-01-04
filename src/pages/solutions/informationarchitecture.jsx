import SEO from "@/src/common/seo";
import InformationArchitecture from "@/src/components/solutions/information-architecture";
import Header from "@/src/layout/headers/header-12-black";

import Wrapper from "@/src/layout/wrapper";
import React from "react";

function informationarchitecture() {
  return (
    <Wrapper>
      <SEO
        pageTitle={
          "Metapercept Technology Services (LLP) - solutions/informationarchitecture"
        }
        keywords="information architecture"
      />
      <Header />
      <InformationArchitecture />
    </Wrapper>
  );
}

export default informationarchitecture;
