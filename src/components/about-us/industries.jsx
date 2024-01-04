import React from "react";
import industries from "./industries-data";
import CustomButton from "../custom/custom-button";

const Industries = () => {
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

      <div className="tp-about-deatials-service theme-bg pt-50 pb-20">
        <div className="container">
          {/* ---------------------new------------------- */}

          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-40">
                    With experience from top companies
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------new------------------- */}

          <div className="tp-section" style={{ textAlign: "justify" }}>
            <p>
              Metapercept offers a considerable range of solutions and services
              imperative to the success of a business. We have experts who are
              adept at technology platforms and follow best development
              practices to increase the revenue, ROI and boost the future value
              of your organization. We build innovative, business-driven, and
              user-centric solutions that offer the highest levels of Usability,
              Scalability, and Portability across browsers and platforms.
            </p>
          </div>

          <div className="row">
            <div className="col-md-12 wow tpfadeUp">
              <div className="tp-ab-sv-tabs mb-30 mt-30">
                <ul
                  className="nav nav-pills mb-30 d-flex justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  {industries.map((industry, index) => {
                    return (
                      <li className="nav-item" role="presentation" key={index}>
                        <button
                          tabIndex="-1"
                          className={`nav-link ${!index && "active"}`}
                          id="2000"
                          data-bs-toggle="pill"
                          data-bs-target={`#${industry.id}`}
                          type="button"
                          role="tab"
                          aria-controls={industry.id}
                          aria-selected={`${!index && "true"} ${
                            index && "false"
                          }`}
                          style={{ margin: "10px", padding: "10px 15px" }}
                        >
                          {industry.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  {industries.map((industry, index) => {
                    return (
                      <div
                        className={`tab-pane fade ${!index && "show active"} `}
                        id={industry.id}
                        role="tabpanel"
                        aria-labelledby="2000"
                      >
                        <div className="tp-ab-sv-tabs-content">
                          <div className="row align-items-md-center">
                            <div className="col-lg-5 wow tpfadeUp">
                              <div className="about-page-about-img mb-30">
                                <img
                                  src={industry.img}
                                  alt={industry.name}
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                            <div className="col-lg-7 wow tpfadeUp ">
                              <div className="about-page-ab">
                                <div className="section-title-wraper">
                                  <div className="tp-section">
                                    <div>
                                      <h3>{industry.name}</h3>
                                      <p
                                        className="p-0 m-0 mb-3"
                                        style={{
                                          textAlign: "justify",
                                          fontSize: "18px",
                                        }}
                                      >
                                        {industry.description}
                                      </p>
                                      <ul className="marker-list">
                                        {industry.serviceProvided.map(
                                          (service, index) => {
                                            return (
                                              <li
                                                key={index}
                                                className="position-relative ps-4 pb-2"
                                                style={{ fontSize: "18px" }}
                                              >
                                                {service}
                                              </li>
                                            );
                                          }
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                <CustomButton
                                  url={industry.link}
                                  classes={"tp-sv-tabs-btn-wrapper mb-30 mt-20"}
                                  text={"Read More"}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
