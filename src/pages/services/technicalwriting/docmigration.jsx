import SEO from "@/src/common/seo";
import DocMigration from "@/src/components/services/technical-writing/doc-migration";
import Header from "@/src/layout/headers/header-12-black";
import Wrapper from "@/src/layout/wrapper";
import React from "react";

function docmigration() {
  return (
    <>
      <Wrapper>
        <SEO
          pageTitle={
            "Metapercept Technology Services (LLP) - services/technicalwriting/docmigration"
          }
          keywords="doc migration"
        />
        <Header />
        <DocMigration />
      </Wrapper>
    </>
  );
}

export default docmigration;
