import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import Header from "../layout/headers/header-12-black";

const Home = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Metapercept Technology Services (LLP)"}
        keywords="home"
      />
      <Header style_home_one={true} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
