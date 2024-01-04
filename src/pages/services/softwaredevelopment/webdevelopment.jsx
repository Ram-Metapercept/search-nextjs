import SEO from "@/src/common/seo";
import WebDevelopment from "@/src/components/services/software-development/web-development";
import Header from "@/src/layout/headers/header-12-black";
import React from "react";

function webdevelopment() {
  return (
    <>
      <SEO
        pageTitle={
          "Metapercept Technology Services (LLP) - services/softwaredevelopment/webdevelopment"
        }
        keywords="web development"
      />
      <Header />
      <WebDevelopment />
    </>
  );
}

export default webdevelopment;
