import SEO from "@/src/common/seo";
import Knowledge from "@/src/components/services/technical-writing/knowledge";
import Header from "@/src/layout/headers/header-12-black";
import Wrapper from "@/src/layout/wrapper";
import React from "react";

function knowledge() {
  return (
    <>
      <Wrapper>
        <SEO
          pageTitle={
            "Metapercept Technology Services (LLP) - services/technicalwriting/knowledge"
          }
          keywords="knowledge"
        />
        <Header />
        <Knowledge />
      </Wrapper>
    </>
  );
}

export default knowledge;
