import React from "react";
import CustomButton from "../custom/custom-button";
import slugify from 'slugify';

function FeatureAreaRight({ serviceInfo, classes, targetTo = "" }) {
  console.log(slugify(serviceInfo.title))
  return (
    <>
      <div className="tp-sv-page-feature-area p-relative pt-25 pb-25 singleServiceDiv theme-bg-black">
        <div
          className="sv-page-fea-img-2"
          style={{
            backgroundImage: `url(${serviceInfo.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-sv-fea-ab-content ml-80">
                <div className="section-title-wraper">
                  <div className="tp-section pb-25">
                    <h2 className="tp-section__title mb-25 wow tpfadeUp mainTitle" id={slugify(serviceInfo.name)}>
                      {serviceInfo.name}
                    </h2>
                    <h4
                    className="mb-0 pb-25 wow tpfadeUp"
                    data-wow-delay=".3s"
                    id={slugify(serviceInfo.title)}>
                    {serviceInfo.title}
                  </h4>
                    <p
                      className="mb-0 wow tpfadeUp subServiceInfo"
                      data-wow-delay=".3s"
                    >
                      {serviceInfo.info}
                    </p>
                  </div>
                </div>
                <div
                  className="tp-ha-about-fea tp-sv-fea-list wow tpfadeUp"
                  data-wow-delay=".4s"
                >
                  <div className="techBoxContainer">
                    {serviceInfo.listInfo.map((list, i) => (
                      <div
                        key={i}
                        className={`techBox teachRetail ${classes}`}
                      >
                        <span className="techText">{list}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <CustomButton
                  url={serviceInfo.url}
                  classes="tp-sv-tabs-btn-wrapper mt-20"
                  text="Read More"
                  targetTo={targetTo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureAreaRight;
