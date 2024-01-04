import BreadcrumbArea from "@/src/common/breadcrumb-area";

import React from "react";

import CallToAction from "./call-to-action-2";

const Contact = () => {
  return (
    <>
      <BreadcrumbArea
        title="Contact Us"
        backColor="#fff1cd"
        backImage="/assets/img/breadcrumb/bg_4.png"
        theme="yellowTheme"
      />

      <CallToAction />
    </>
  );
};

export default Contact;
