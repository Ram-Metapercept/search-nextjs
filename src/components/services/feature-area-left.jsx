import React from "react";
import CustomButton from "../custom/custom-button";
var slugify = require('slugify')
function FeatureAreaLeft({ serviceInfo, classes }) {
return (
    <>
      <div className="tp-sv-page-feature-area  p-relative pt-25 pb-25 singleServiceDiv theme-bg-black">
        <div
          className="sv-page-fea-img-1"
          style={{ backgroundImage: `url(${serviceInfo.img})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-sv-fea-ab-content mr-60">
                <div className="section-title-wraper">
                  <div className="tp-section pb-25">
                    <h2 className="tp-section__title  mb-25 wow tpfadeUp mainTitle" id={slugify(serviceInfo.name)}>
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
                  {/* <ul className="marker-list">
                    {serviceInfo.listInfo.map((list, i) => {
                      return (
                        <li
                          className="p-relative ps-4"
                          key={i}
                          style={{ marginBottom: "10px", color: "black" }}
                        >
                          {list}
                        </li>
                      );
                    })}
                  </ul> */}
                  <div className="techBoxContainer">
                    {serviceInfo.listInfo.map((list, i) => {
                      return (
                        <div
                          key={i}
                          className={`techBox teachRetail ${classes}`}
                          id="box"
                        >
                          <span className="techText">{list}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <CustomButton
                  url={serviceInfo.url}
                  classes="tp-sv-tabs-btn-wrapper mt-20"
                  text="Read More"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureAreaLeft;
