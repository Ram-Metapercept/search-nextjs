import React from "react";
import CustomButton from "../../custom/custom-button";
import Link from "next/link";
const about_feature_data = [
  {
    id: 1,
    icon: "/assets/img/about-us/icon-ab-chat.png",

    text: <>Lorem ipsum dolor sit amet consectetur</>,
  },
  {
    id: 2,
    icon: "/assets/img/about-us/icon-ab-chat.png",

    text: <>Lorem ipsum dolor sit amet consectetur</>,
  },
  {
    id: 1,
    icon: "/assets/img/about-us/icon-ab-chat.png",

    text: <>Lorem ipsum dolor sit amet consectetur</>,
  },
];

const Membership = ({ headerHeight }) => {
  return (
    <>
      <style jsx global>
        {`
          .singleMemberShipDiv {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            padding: 20px;
            border-radius: 8px;
            width: 100%;
            margin-bottom: 20px;
            background-color: white;
          }
          .singleMemberShipDiv:hover {
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          }
        `}
      </style>
      <div
        className="tp-bs-cta-area pt-25 pb-25 theme-bg-black  p-relative"
        id="membership"
        style={{
          scrollMarginBlockStart: headerHeight,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bs-cta-section ">
                <div className="cd-intro tp-section">
                  <h2 className="tp-section__title cd-headline loading-bar mb-10 wow tpfadeUp text-center">
                    Start your business journey better with us
                  </h2>
                  <p className="mb-25">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio magnam, distinctio enim asperiores minima repellendus.
                    Quaerat nobis, reiciendis vel dolor tempora cupiditate
                    eligendi expedita hic ullam officia sunt ipsam praesentium
                    psam praesentium.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ========================= */}
          <div className="row gx-md-5 mb-10">
            {about_feature_data.map((item, i) => (
              <div key={i} className=" col-md-4 col-12">
                <Link href={`/aboutus/company/membership#${i + 1}`}>
                  <div className="d-flex flex-column flex-lg-row align-items-center singleMemberShipDiv">
                    <div className="low-ab-fea-icon mr-20 mb-2">
                      <img src={item.icon} alt="membership" />
                    </div>
                    <div className="tp-section">
                      <h4
                        className="law-ab-fea-title "
                        // style={{ color: "var(--tp-theme-vogue)" }}
                      >
                        {item.text}
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* =============== */}
          <div className="row">
            <div className="bs-cta-btns text-center memberBtnMar">
              <CustomButton
                text={"Read More"}
                url="/aboutus/company/membership/"
                classes={"tp-sv-tabs-btn-wrapper"}
                backgroundColor="orange"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
