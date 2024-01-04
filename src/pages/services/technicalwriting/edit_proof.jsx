import SEO from "@/src/common/seo";
import EditProof from "@/src/components/services/technical-writing/edit-proof";
import Header from "@/src/layout/headers/header-12-black";
import Wrapper from "@/src/layout/wrapper";
import React from "react";

function edit_proof() {
  return (
    <>
      <Wrapper>
        <SEO
          pageTitle={
            "Metapercept Technology Services (LLP) - services/technicalwriting/edit_proof"
          }
          keywords="edit_proof"
        />
        <Header />
        <EditProof />
      </Wrapper>
    </>
  );
}

export default edit_proof;
