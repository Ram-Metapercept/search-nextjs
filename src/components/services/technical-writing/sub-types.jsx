import React from "react";
import technicalWritingSubtypesData from "@/src/data/services/technical-writing/technical-writing-subtypes-data";
import Link from "next/link";
function SubTypes() {
  return (
    <>
      <style jsx>{`
        .it-service-item-div-back {
          width: 75px;
          height: 75px;

          position: absolute;
          top: -20px;
          left: -20px;
          z-index: -1;
        }
        .it-service__item::after {
          z-index: 0 !important;
        }
        .applyZIndex {
          position: relative;
          z-index: 2;
        }
        .it-service__item:hover {
          border: 2px solid #f47f20;
          box-shadow: none;
        }
      `}</style>
      <div
        className="tp-it-service  pt-25 pb-25 theme-bg-black"
        style={{
          "--tp-heading-primary": "var(--tp-theme-vogue)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-10">Technical Writing</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="industriesInfo tp-section text-center">
            <p>Keep up your brand’s image with proficient documentation.</p>
          </div>

          <div className="row it-sv-counter">
            {technicalWritingSubtypesData.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 mb-25 "
                data-aos={item.data_aos}
                data-aos-duration={item.duration}
              >
                <Link
                  href={item.link}
                  className="d-flex justify-content-center"
                  style={{ height: "100%" }}
                >
                  <div
                    className="it-service__item mb-30  text-center"
                    style={{
                      padding: "20px 20px 0px",
                      height: "100%",
                      width: "90%",

                      // backgroundColor: "white",
                    }}
                  >
                    <div
                      className="it-service-item-div-back"
                      style={{
                        border: `4px solid ${item.borderColor}`,
                        backgroundColor: item.borderColor,
                        borderRadius: "8px",
                      }}
                    ></div>
                    <div className="it-servicce__item-img mb-20 applyZIndex ">
                      <img
                        className="sectionLogoImg"
                        src={item.icon}
                        alt={item.title}
                      />
                    </div>
                    <h3 className="it-service__item-title mb-20 applyZIndex">
                      {item.title}
                    </h3>
                    <p className="mb-0 applyZIndex" style={{textAlign: "left" }}>{item.des}</p>
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

export default SubTypes;
