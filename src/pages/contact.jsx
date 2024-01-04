import React from "react";
import SEO from "../common/seo";
import Contact from "../components/contact";
import Wrapper from "../layout/wrapper";
import Header from "../layout/headers/header-12-black";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Metapercept Technology Services (LLP) - contact"}
        keywords="contact"
      />
      <Header />
      <Contact />
    </Wrapper>
  );
};

export default index;
