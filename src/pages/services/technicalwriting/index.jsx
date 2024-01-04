import SEO from "@/src/common/seo";
import TechnicalWriting from "@/src/components/services/technical-writing";
import Header from "@/src/layout/headers/header-12-black";

import Wrapper from "@/src/layout/wrapper";
import React from "react";

function technicalwriting() {
  return (
    <>
      <Wrapper>
        <SEO
          pageTitle={
            "Metapercept Technology Services (LLP) - services/technicalwriting"
          }
          keywords="technical writing"
        />
        <Header />
        <TechnicalWriting />
      </Wrapper>
    </>
  );
}

export default technicalwriting;
