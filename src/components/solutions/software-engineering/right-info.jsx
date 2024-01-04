import Image from "next/image";
import React, { useState } from "react";

function RightInfo({ solution, headerHeight }) {
  const [currentTypeInfo, setCurrentTypeInfo] = useState(
    solution.subTypesInfo[0]
  );
  return (
    <>
      <style jsx>
        {`
          .sectionButton {
            background-color: ${solution.tabBackColor};
            border-left: 5px solid ${solution.tabBackColorDark};
          }

          .sectionButton.active {
            background-color: ${solution.tabBackColorDark};
          }
        `}
      </style>
      <div
        id={solution.idName}
        className="tp-bs-service pt-25 pb-25  "
        style={{
          "--tp-heading-primary": "var(--tp-theme-vogue)",
          scrollMarginBlockStart: headerHeight,
        }}
      >
        <div className="container">
          {/* ---------------------new------------------- */}

          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-10 ">{solution.name}</h2>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------new------------------- */}

          <div className="industriesInfo tp-section ">
            <p className="mb-0">{solution.desc}</p>
          </div>

          <div className="row pt-30 solutionInfo">
            <div className="col-lg-5 col-12 ">
              <div className="solutionsTabs d-flex flex-row flex-lg-column flex-wrap  justify-content-center justify-content-md-between">
                {solution.subTypes.map((type, i) => {
                  return (
                    <div
                      key={i}
                      className={`sectionButton d-flex align-items-center  ${
                        type.name === currentTypeInfo.name ? "active" : ""
                      }`}
                      onClick={() => {
                        setCurrentTypeInfo(solution.subTypesInfo[i]);
                      }}
                    >
                      <img
                        src={type.img}
                        alt={type.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          padding: "5px",
                          backgroundColor: solution.tabBackColor,
                          borderRadius: "8px",
                        }}
                      />
                      <h4 className="mb-0 ps-3">{type.name}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-7 col-12 ">
              <div className="tp-section">
                <p className="mb-1 pb-25">{currentTypeInfo.desc}</p>
              </div>
              <div
                className="subTypes tp-section tp-ha-about-fea li span "
                style={{ backgroundColor: solution.tabBackColor }}
              >
                <ul>
                  {currentTypeInfo.list.map((data, i) => {
                    return (
                      <li className="p-relative " key={i}>
                        <i
                          className="fa-solid fa-check correctSign"
                          style={{ color: solution.tabBackColorDark }}
                        ></i>

                        <p className="mb-0 listP">{data}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightInfo;
