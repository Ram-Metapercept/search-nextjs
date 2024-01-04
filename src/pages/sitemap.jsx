import React from "react";
import SEO from "../common/seo";
import SiteMap from "../components/sitemap";
import Header from "../layout/headers/header-12-black";

function sitemap() {
  return (
    <>
      <SEO
        pageTitle={"Metapercept Technology Services (LLP) - sitemap"}
        keywords="sitemap"
      />
      <Header />
      <SiteMap />
    </>
  );
}

export default sitemap;
