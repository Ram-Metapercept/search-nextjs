import React from "react";
import Header from "../layout/headers/header-12-black";
import SEO from "../common/seo";
import PrivacyPolicy from "../components/privacy-policy";

function privacyPolicy() {
  return (
    <>
      <SEO
        pageTitle={"Metapercept Technology Services (LLP) - privacy-policy"}
        keywords="privacy-policy"
      />
      <Header />
      <PrivacyPolicy />
    </>
  );
}

export default privacyPolicy;
