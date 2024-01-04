import React from "react";
import SEO from "../common/seo";
import Header from "../layout/headers/header-12-black";
import CustomButton from "../components/custom/custom-button";

const Error = () => {
  return (
    <>
      <SEO pageTitle={"404 page not found"} keywords="error page" />
      <Header />
      <div className="container">
        <div className="error_page pb-50">
          <img
            style={{ width: "100%" }}
            src="/assets/img/404.jpg"
            alt="error img"
          ></img>

          <CustomButton url={"/"} text={"Go To Home"} />
        </div>
      </div>
    </>
  );
};

export default Error;
