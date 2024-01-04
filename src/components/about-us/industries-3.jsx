import IndustriesData from "@/src/data/about-us/industries-data";
import Link from "next/link";
import React from "react";

function Industries3() {
  return (
    <>
      <style jsx>
        {`
          .readMoreSpan {
            text-decoration: underline;
            color: var(--tp-theme-cornblue);
          }
          .readMoreSpan:hover {
            color: var(--tp-theme-seagreen);
          }
          .app-feature-box-custom {
            padding: 20px;
            height: 100%;
            box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.04);
          }
          .app-feature-box-custom:hover {
            // background-color: #f7f7f7;
            background-color: #2c3131;
            transition: all 0.2s ease-in;
            box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.08);
          }
        `}
      </style>
      <div className="tp-about-deatials-service theme-bg-black pt-25 pb-25">
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

          <div className="tp-section">
            <p>
              Presenting a diverse range of solutions and services crucial for
              the business success of our customers using new age technology
              platforms, adhering to best development practices to enhance ROI
              of the organization. We specialize in constructing innovative,
              business-driven, and user-centric solutions that offer the highest
              levels of usability, scalability, and portability levels across
              browsers and platforms.
            </p>
          </div>
          <div className="row">
            {IndustriesData.map((item, i) => (
              <div key={i} className="col-lg-6 col-12 mb-20">
                <Link href={item.url}>
                  <div
                    className=" app-feature-box-custom d-flex white-bg3 p-relative wow tpfadeUp align-items-center"
                    data-wow-delay=".3s"
                  >
                    <div className="app-feature__info tp-section">
                      <h4
                        className="app-feature__title text-mirage text-start"
                        // style={{ color: "var(--tp-heading-primary)" }}
                      >
                        {item.name}
                      </h4>

                      <p className="mb-0">{item.description}</p>
                      {/* <span className="readMoreSpan">
                      <Link href={item.url}>Read More</Link>
                    </span> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Industries3;
