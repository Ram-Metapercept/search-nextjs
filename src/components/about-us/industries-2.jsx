import Link from "next/link";
import React, { useState } from "react";
import Accordion from "./accordion";

const Industries2 = () => {
  const [IndustryImg, setIndustryImg] = useState(
    "/assets/img/about-us/industries/arch.jpg"
  );
  const [industryName, setIndustryName] = useState("automobile");
  return (
    <>
      <style jsx>
        {`
          .marker-list li::after {
            position: absolute;
            content: "✓";
            left: 0;
            top: 3px;
            font-family: themify;
            color: #0c54ad;
            font-weight: 400;
          }
        `}
      </style>

      <div className="tp-about-deatials-service theme-bg-7 pt-25 pb-25">
        <div className="container">
          {/* ---------------------new------------------- */}

          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-10">
                    With experience from top companies
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------new------------------- */}

          <div className="tp-section" style={{ textAlign: "justify" }}>
            <p>
              We offer a considerable range of solutions and services imperative
              to the success of a business. We have experts who are adept at
              technology platforms and follow best development practices to
              increase revenue and ROI and boost the future value of your
              organization. We build innovative, business-driven, and
              user-centric solutions that offer the highest usability,
              scalability, and portability levels across browsers and platforms.
            </p>
          </div>

          <div className="row align-items-lg-center ">
            <div className="col-xl-5 col-lg-6 wow tpfadeUp">
              <div
                className="accordion tp-accordion mr-20"
                id="accordionExample"
              >
                <Accordion
                  setImg={setIndustryImg}
                  setIndustryName={setIndustryName}
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 wow tpfadeUp">
              <div className="app-faq-img float-end position-relative">
                <img
                  src={IndustryImg}
                  alt={industryName}
                  style={{ maxWidth: "100%", borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries2;
