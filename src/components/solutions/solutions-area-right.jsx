import React from "react";
import Link from "next/link";
import CustomButton from "../custom/custom-button";

function SolutionsAreaRight({ data, color, classes }) {
  return (
    <>
      <style jsx>
        {`
          .logo {
            width: 50px;
            height: 50px;
          }
          .subLogo {
            width: 60px;
            height: 60px;
          }
        `}
      </style>

      <div
        className={`tp-sv-detials-area pt-50 pb-50 ${classes}`}
        style={{ backgroundColor: color }}
      >
        <div className="container">
          <div className="row d-flex flex-lg-row flex-column-reverse">
            <div className="col-xl-6 col-lg-12">
              <div className="tp-sv-details-serive-left wow tpfadeUp">
                <div className="row">
                  {data.subsection.map((item, i) => (
                    <div key={i} className="col-lg-6">
                      <Link href={item.url}>
                        <div
                          className="sv-detials-sv-item mb-30 pe-3"
                          style={{ "--tp-theme-redical": "rgb(108,96,254)" }}
                        >
                          <div className="sv-detials-sv-item__icon">
                            <span>
                              <img
                                src={item.logo}
                                alt={item.name}
                                className="subLogo"
                              />
                            </span>
                          </div>
                          <h3 className="sv-detials-sv-item__title">
                            <Link href={item.url}> {item.name}</Link>
                          </h3>
                          <span className="counter-number">0{i + 1}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div
                className="tp-sv-details-serive-left mr-10 ml-md-40 wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <img src={data.logo} alt={data.title} className="logo" />
                    <h2 className="tp-section__title mb-25">{data.title}</h2>
                    <p className="mb-0 pb-25" style={{ textAlign: "justify" }}>
                      {data.desc}
                    </p>
                  </div>
                </div>
                <CustomButton
                  classes={"tp-sv-tabs-btn-wrapper  mb-20"}
                  text={"Read More"}
                  url={data.url}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionsAreaRight;
