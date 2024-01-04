import SEO from "@/src/common/seo";
import TemplateDesign from "@/src/components/services/technical-writing/template-design";
import Header from "@/src/layout/headers/header-12-black";
import Wrapper from "@/src/layout/wrapper";
import React from "react";

function templatedesign() {
  return (
    <>
      <Wrapper>
        <SEO
          pageTitle={
            "Metapercept Technology Services (LLP) - services/technicalwriting/templatedesign"
          }
          keywords="template design"
        />
        <Header />
        <TemplateDesign />
      </Wrapper>
    </>
  );
}

export default templatedesign;
