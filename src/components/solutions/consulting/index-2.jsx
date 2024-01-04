import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Image from "next/image";
import React, { useState } from "react";
import consulting_data from "@/src/data/solutions/consulting/consulting-data";
import CustomButton from "../../custom/custom-button";

function Consulting() {
  const [currentTypeInfo, setCurrentTypeInfo] = useState(consulting_data[0]);

  return (
    <>
      <BreadcrumbArea
        title="Consulting"
        backColor="#fff1cd"
        backImage="/assets/img/breadcrumb/bg_4.png"
        theme="yellowTheme"
      />
      <div
        className="tp-sv-detials-area pt-50 pb-50 "
        style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}
      >
        <div className="container">
          <div className="tabsSection tp-ab-sv-tabs mb-50">
            <ul
              // className="nav nav-pills mb-30 row"
              className="nav nav-pills mb-30 d-flex justify-content-md-start justify-content-center"
              style={{ gap: "15px" }}
            >
              {consulting_data.map((data, i) => {
                return (
                  <li className="nav-item" role="presentation" key={i}>
                    {/* <li className="nav-item " role="presentation" key={i}> */}
                    <button
                      style={{
                        margin: 0,
                        boxShadow: "0px 0px 32px 0px rgba(0, 0, 0, 0.08)",
                        // width: "100%",
                      }}
                      className={` nav-link ${
                        data.title === currentTypeInfo.title ? "active" : ""
                      }`}
                      onClick={() => setCurrentTypeInfo(data)}
                    >
                      {data.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div
                className="tp-sv-details-serive-left wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <div className="section-title-wraper mb-30 mb-xl-0">
                  <div className="tp-section">
                    <h3 className="tp-ab-sv-tabs-title mb-25 mainTitle text-center text-sm-start">
                      {currentTypeInfo.title}
                    </h3>
                    <p className="mb-0 pb-25" style={{ textAlign: "justify" }}>
                      {currentTypeInfo.desc}
                    </p>
                  </div>
                  <CustomButton text={"Read More"} url={currentTypeInfo.url} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="tp-sv-details-serive-left wow tpfadeUp d-flex justify-content-center">
                <Image
                  src={currentTypeInfo.image}
                  width={600}
                  height={300}
                  alt=""
                  className="serviceFlowImg"
                  style={{
                    maxWidth: "min(100%, 500px)",
                    height: "auto",
                    mixBlendMode: "multiply",
                    borderRadius: "8px",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Consulting;
