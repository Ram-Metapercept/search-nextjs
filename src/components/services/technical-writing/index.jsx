import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import TechnicalWritingArea from "./technical-writing-area";
import SubTypes from "./sub-types";
import Technologies from "./technologies";
import Description from "./description";

function TechnicalWriting() {
  return (
    <>
      {/* <Header /> */}
      <BreadcrumbArea
        title="Technical Writing"
        backColor="#ffd8bc"
        backImage="/assets/img/breadcrumb/bg_3.png"
        theme="orangeTheme"
      />
      <TechnicalWritingArea />
      <SubTypes />
      <Description />
      <Technologies />
    </>
  );
}

export default TechnicalWriting;
