import SEO from "@/src/common/seo";
import SoftwareDevelopment from "@/src/components/services/software-development";
import Header from "@/src/layout/headers/header-12-black";
import React from "react";

function softwaredevelopment() {
  return (
    <>
      <SEO
        pageTitle={
          "Metapercept Technology Services (LLP) - services/softwaredevelopment"
        }
        keywords="software development"
      />
      <Header />
      <SoftwareDevelopment />
    </>
  );
}

export default softwaredevelopment;
