import React from "react";
import CustomButton from "../../custom/custom-button";

const about_details_content = {
  title: <>With experience from top companies</>,
  subTitle: (
    <>
      We got featured from <span>Awwrds </span>
    </>
  ),
  info: (
    <>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti minima
      expedita illum sequi sunt quibusdam tempore, harum quis doloremque id fuga
      voluptatibus reprehenderit. Distinctio vel inventore aliquid fugiat modi
      fuga.
    </>
  ),
};

const { title, subTitle, info } = about_details_content;

const Affiliation = ({ headerHeight }) => {
  return (
    <>
      <style>
        {`
          .tp-ab-sv-tabs-title span {
            color: #d76a12;
          }
        `}
      </style>
      <div
        className="tp-about-deatials-service  pt-25 pb-25 "
        id="affiliation"
        style={{
          scrollMarginBlockStart: headerHeight,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 wow tpfadeUp">
              <div className="tp-about-sv-content">
                <h2 className="tp-section__title wow tpfadeUp mb-20">
                  {title}
                </h2>
              </div>
              <div className="tp-ab-sv-tabs mb-20">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-2000"
                    role="tabpanel"
                    aria-labelledby="2000"
                  >
                    <div className="tp-ab-sv-tabs-content tp-section">
                      <h3 className="tp-ab-sv-tabs-title">{subTitle}</h3>
                      <p className="mb-0">{info}</p>
                    </div>
                  </div>
                </div>
              </div>

              <CustomButton
                url="/aboutus#business-partner"
                text={"read more"}
                classes={"tp-sv-tabs-btn-wrapper mb-20"}
                backgroundColor="orange"
              />
            </div>
            <div className="col-xl-6 wow tpfadeUp">
              <div className="about-sv-img d-flex justify-content-center">
                <img
                  style={{ width: "min(500px, 100%)", aspectRatio: "4/3" }}
                  src="/assets/img/about-us/company/about-service.jpg"
                  alt="affiliation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Affiliation;
