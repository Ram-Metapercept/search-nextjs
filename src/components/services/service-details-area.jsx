import React, { useEffect } from "react";
import { service_details_content } from "@/src/data/services/service-home-data";

const { title, subTitle, info, listInfo, serviceList } =
  service_details_content;

const ServiceDetailsArea = () => {

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
          .serviceFlowImg {
            width: min(100%, 470px);
          }
          .marker-list li {
            font-size: 16px;
            color: var(--tp-grey-3);
          }
          @media (max-width: 768px) {
            .marker-list li {
              font-size: 16px;
            }
          }
        `}
      </style>

      <div
        className="tp-sv-detials-area pt-25 pb-25"
        style={{
          "--tp-heading-primary": "var(--tp-theme-vogue)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div
                className="tp-sv-details-serive-left   wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <h2 className="tp-section__title mb-25 mainTitle" id="technology-service">
                      {title}
                    </h2>
                    <h4 id="organizations-transforms">{subTitle}</h4>
                    <p className="mb-0 pb-25">{info}</p>
                    <p style={{ marginBottom: "15px" }}>{listInfo}</p>
                    <ul className="marker-list">
                      {serviceList.map((service, index) => {
                        return (
                          <li
                            key={index}
                            className="position-relative ps-4 pb-2"
                          >
                            {service}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div
                className="tp-sv-details-serive-left wow tpfadeUp d-flex justify-content-center"
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                }}
              >
                <img
                  src="/assets/img/new-services/services5.png"
                  alt="service flow diagram"
                  className="serviceFlowImg"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
