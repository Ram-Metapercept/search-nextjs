// import service_data from "@/src/data/service-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { service_details_content } from "@/src/data/services/service-home-data";

const technical_writing_content = {
  subTitle: "Accelerated technical writing services and solutions",
  info: "We are the market leaders in structured authoring services and end-to-end technical publication services and solutions providers. If you are looking for a team to handle your DITA-XML-based technical writing needs and deliver the project on time, then we are there to help you with our team of experienced technical writers.",
  mainImg: "/assets/img/new-services/technical-writing/maintech.png",
};

const { subTitle, info, mainImg } = technical_writing_content;

const TechnicalWritingArea = () => {
  return (
    <>
      <div
        className="tp-sv-detials-area pt-25 pb-25 "
        style={{
          "--tp-heading-primary": "var(--tp-theme-vogue)",
          // backgroundColor: "#f8fcfc",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div
                className="tp-sv-details-serive-left   wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <h2 className="tp-section__title">{subTitle}</h2>
                    {/* <h4 style={{ textAlign: "justify" }}>{subTitle}</h4> */}
                    <p className="mb-0 pb-25">{info}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="tp-sv-details-serive-left wow tpfadeUp d-flex justify-content-center">
                {/* <Image
                  width={470}
                  height={0}
                  src={mainImg}
                  alt=""
                  className="serviceFlowImg"
                  style={{
                    width: "min(100%, 500px)",
                    height: "auto",
                  }}
                /> */}
                <img
                  src={mainImg}
                  alt="technical writing"
                  className="serviceFlowImg"
                  style={{ width: "min(470px , 100%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalWritingArea;
