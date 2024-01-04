import SEO from "@/src/common/seo";
import Consulting from "@/src/components/solutions/consulting";
import Header from "@/src/layout/headers/header-12-black";
import Wrapper from "@/src/layout/wrapper";
import React from "react";

function consulting() {
  return (
    <Wrapper>
      <SEO
        pageTitle={
          "Metapercept Technology Services (LLP) - solutions/consulting"
        }
        keywords="consulting"
      />
      <Header />
      <Consulting />
    </Wrapper>
  );
}

export default consulting;
