import SEO from "@/src/common/seo";
import StaffAugmentation from "@/src/components/solutions/staff-augmentation";
import Header from "@/src/layout/headers/header-12-black";
import Wrapper from "@/src/layout/wrapper";
import React from "react";

function staffaugmentation() {
  return (
    <Wrapper>
      <SEO
        pageTitle={
          "Metapercept Technology Services (LLP) - solutions/staffaugmentation"
        }
        keywords="staff augmentation"
      />
      <Header />
      <StaffAugmentation />
    </Wrapper>
  );
}

export default staffaugmentation;
