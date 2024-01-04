import SEO from "@/src/common/seo";
import StructureAuth from "@/src/components/services/technical-writing/structure-auth";
import Header from "@/src/layout/headers/header-12-black";
import Wrapper from "@/src/layout/wrapper";
import React from "react";

function structureauth() {
  return (
    <>
      <Wrapper>
        <SEO
          pageTitle={
            "Metapercept Technology Services (LLP) - services/technicalwriting/structureauth"
          }
          keywords="structure auth"
        />
        <Header />
        <StructureAuth />
      </Wrapper>
    </>
  );
}

export default structureauth;
