import AccrediationsData from "@/src/data/about-us/company/accrediations-data";
import Link from "next/link";
import React, { useState } from "react";
// import solutionsData from "@/src/data/solutions/solutions-data";
// import CustomButton from "../custom/custom-button";

function Accrediations({ headerHeight }) {
  const [isActive, setIsActive] = useState(["active", "", ""]);
  const [currentSolution, setCurrentSolution] = useState(AccrediationsData[0]);

  return (
    <>
      <style jsx>
        {`
          .solutionsTabs .tab {
            padding: 10px 20px;
            font-size: 18px;
            text-align: center;
            border-bottom: 2px solid #747678;
            background: transparent;
            cursor: pointer;
            // color: var(--tp-heading-primary);
          }

          .solutionsTabs .tab.active {
            border-image: linear-gradient(
              102.57deg,
              #cd5c5c,
              #f47f20 100%,
              #f47f20 0
            );
            border-image-slice: 1;
            font-weight: 400 !important;
            background: linear-gradient(
              102.57deg,
              #cd5c5c,
              #f47f20 100%,
              #f47f20 0
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .solutionsTabs .tab:not(:last-child) {
            margin-right: 2rem;
          }

          @media (max-width: 768px) {
            .solutionsTabs {
              flex-direction: column;
              align-items: center;
            }
            .solutionsTabs .tab:not(:last-child) {
              margin-right: 0;
              margin-bottom: 5px;
            }
          }
        `}
      </style>
      <div
        className="tp-sv-detials-area pt-25 pb-25 theme-bg-black"
        id="membership"
        style={{
          scrollMarginBlockStart: headerHeight,
        }}
      >
        <div className="container">
          <div className="section-title-wraper mb-20">
            <div className="tp-section text-center">
              <h2 className="tp-section__title mb-10">Accrediations</h2>
            </div>
          </div>

          <div className="row flex-column-reverse flex-lg-row pt-2 solutionInfo">
            <div className="col-lg-5 col-12 d-flex justify-content-center">
              <img
                src={currentSolution.img}
                alt={currentSolution.title}
                style={{
                  width: "min(100%, 400px)",

                  borderRadius: "8px",
                }}
              />
            </div>
            <div className="col-lg-7 col-12 tp-section">
              <div className="solutionsTabs d-flex justify-content-md-center justify-content-lg-start">
                {AccrediationsData.map((data, i) => (
                  <div
                    className={`tab ${isActive[i]} pt-lg-0`}
                    onClick={() => {
                      let activeState = ["", "", ""];
                      activeState[i] = "active";
                      setIsActive(activeState);
                      setCurrentSolution(data);
                    }}
                  >
                    {data.title}
                  </div>
                ))}
              </div>
              <p
                className="wow tpfadeUp solutionDesc  mt-20 mb-20"
                data-wow-delay=".3s"
              >
                {currentSolution.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accrediations;
