import SEO from "@/src/common/seo";
import ApplicationIntegration from "@/src/components/services/software-development/application-integration";
import Header from "@/src/layout/headers/header-12-black";
import React from "react";

function integration() {
  return (
    <>
      <SEO
        pageTitle={
          "Metapercept Technology Services (LLP) - services/softwaredevelopment/integration"
        }
        keywords="integration"
      />
      <Header />
      <ApplicationIntegration />
    </>
  );
}

export default integration;
