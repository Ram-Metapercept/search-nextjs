import Link from "next/link";
import React, { useState } from "react";
import solutionsData from "@/src/data/solutions/solutions-data";
import CustomButton from "../custom/custom-button";

function SolutionsArea() {
  const [isActive, setIsActive] = useState(["active", "", ""]);
  const [currentSolution, setCurrentSolution] = useState(solutionsData[0]);

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
          p.solutionDesc {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
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
      <div className="tp-sv-detials-area pt-25 pb-25 theme-bg-black">
        <div className="container">
          <div className="solutionsTabs d-flex justify-content-end">
            <div
              className={`tab ${isActive[0]}`}
              onClick={() => {
                setIsActive(["active", "", ""]);
                setCurrentSolution(solutionsData[0]);
              }}
            >
              Software Engineering
            </div>
            <div
              className={`tab ${isActive[1]}`}
              onClick={() => {
                setIsActive(["", "active", ""]);
                setCurrentSolution(solutionsData[1]);
              }}
            >
              Technical Publication
            </div>
            <div
              className={`tab ${isActive[2]}`}
              onClick={() => {
                setIsActive(["", "", "active"]);
                setCurrentSolution(solutionsData[2]);
              }}
            >
              Consulting
            </div>
          </div>
          <div className="row pt-30 solutionInfo">
            <div className="col-lg-6 col-12 d-flex justify-content-center">
              <img
                src={currentSolution.img}
                alt={currentSolution.title}
                style={{
                  width: "min(100%, 500px)",

                  borderRadius: "8px",
                }}
              />
            </div>
            <div className="col-lg-6 col-12 tp-section">
              <p
                className="wow tpfadeUp solutionDesc mt-lg-0 mt-20"
                data-wow-delay=".3s"
                style={{ marginBottom: "20px" }}
              >
                {currentSolution.desc}
              </p>
              <div
                className="tp-ha-about-fea wow tpfadeUp"
                data-wow-delay=".4s"
              >
                <ul>
                  {currentSolution.subsection.map((data, i) => {
                    return (
                      <li
                        key={i}
                        // style={{
                        //   color: "var(--tp-heading-primary)",
                        // }}
                      >
                        <Link href={data.url}>
                          <i
                            className="fa-solid fa-check correctSign"
                            style={{ color: currentSolution.backColor }}
                          ></i>
                          {data.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <CustomButton
                classes={"tp-sv-tabs-btn-wrapper mb-20"}
                text={"Read More"}
                url={currentSolution.url}
                backgroundColor="orange"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionsArea;
