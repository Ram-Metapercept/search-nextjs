import SEO from "@/src/common/seo";
import DevOps from "@/src/components/services/software-development/dev-ops";
import Header from "@/src/layout/headers/header-12-black";
import React from "react";

function devops() {
  return (
    <>
      <SEO
        pageTitle={
          "Metapercept Technology Services (LLP) - services/softwaredevelopment/devops"
        }
        keywords="devops"
      />
      <Header />
      <DevOps />
    </>
  );
}

export default devops;
