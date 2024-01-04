import React, { useState } from "react";
import CustomButton from "../../custom/custom-button";
import { buttonColor } from "@/src/data/button-color";

function SubSectionDesign({ infoSectionData, subTypesData }) {
  const [currentTypeInfo, setCurrentTypeInfo] = useState(subTypesData[0]);
  return (
    <>
      <style jsx>
        {`
          .tp-ab-sv-tabs .nav-pills .nav-link.active {
            background-color: ${buttonColor[infoSectionData.colorTheme]
              ?.backgroundColor};
            border-color: ${buttonColor[infoSectionData.colorTheme]
              ?.backgroundColor};
          }
          @media (min-width: 992px) {
            .mainTitle {
              letter-spacing: 0.5px;
            }
          }
          .listP {
            line-height: 36px;
          }
          .subTypes {
            padding: 20px 30px;
          }
          @media (max-width: 425px) {
            .subTypes {
              padding: 20px 20px;
            }
          }
          @media (max-width: 338px) {
            .listP {
              line-height: 24px;
            }
          }
        `}
      </style>
      <div className="tp-sv-detials-area pt-25 pb-25 ">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div
                className="tp-sv-details-serive-left wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <h2 className="tp-section__title mb-25 mainTitle">
                      {infoSectionData.title}
                    </h2>
                    <p className="mb-0 pb-25">{infoSectionData.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="tp-sv-details-serive-left wow tpfadeUp d-flex justify-content-center">
                <img
                  src={infoSectionData.img}
                  alt={infoSectionData.name}
                  className="serviceFlowImg"
                  style={{
                    maxWidth: "min(100%, 500px)",
                    height: "auto",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------- */}
      <div className="ca-portfolio-area pt-25 pb-25 theme-bg-black">
        <div className="container">
          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section ">
                  <h2 className="tp-section__title mb-10">
                    {infoSectionData.techTitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolioInfo tp-section ">
            <p
              className="pb-0 pb-xl-2  wow tpfadeUp"
              data-wow-delay=".4s"
              // style={{ color: "var(--tp-grey-3)" }}
            >
              {infoSectionData.techDesc}
            </p>
          </div>
          {/* ------------------------------------------------------------------------- */}

          <div className="row">
            <div className="col-xl-6 wow tpfadeUp">
              <div className="tp-ab-sv-tabs mb-30">
                <ul
                  className="nav nav-pills mb-30 d-flex justify-content-center justify-content-xl-start"
                  style={{ gap: "10px" }}
                >
                  {subTypesData.map((data, i) => {
                    return (
                      <li className="nav-item" role="presentation" key={i}>
                        <button
                          style={{
                            margin: 0,
                            boxShadow: "0px 0px 32px 0px rgba(0, 0, 0, 0.08)",
                          }}
                          className={` nav-link ${
                            data.name === currentTypeInfo.name ? "active" : ""
                          }`}
                          onClick={() => setCurrentTypeInfo(data)}
                        >
                          {data.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active">
                    <div className=" tp-section">
                      <h3 className="tp-ab-sv-tabs-title">
                        {currentTypeInfo.title}
                      </h3>
                      {/* <p
                        style={{
                          marginBottom: "20px",
                        }}
                      > */}
                      {currentTypeInfo.desc}
                      {/* </p> */}
                    </div>
                    {currentTypeInfo.url && (
                      <CustomButton
                        url={currentTypeInfo.url}
                        text={"read more"}
                        backgroundColor={infoSectionData.colorTheme}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow tpfadeUp ">
              <div className="about-sv-img d-flex justify-content-center">
                <img
                  src={currentTypeInfo.imageUrl}
                  alt={currentTypeInfo.name}
                  style={{ borderRadius: "8px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubSectionDesign;
