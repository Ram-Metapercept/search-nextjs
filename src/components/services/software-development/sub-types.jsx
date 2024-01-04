import React from "react";
import softwareDevelopment from "@/src/data/services/software-development/software-development-data";
import Link from "next/link";
import CustomButton from "../../custom/custom-button";

function SubTypes() {
  return (
    <>
      <style jsx>
        {`
          .ca-service-wrapper:hover {
            border: 2px solid #cd5c5c;
          }
          .ca-service__item {
            // border: 2px solid #e0e0e0;
            padding: 20px 20px 0 !important;
          }
          .ca-service__item:hover {
            // border: 2px solid #cd5c5c;

            padding: 18px;
            transition: all 0s !important;
          }
          .spanHoverEffect:hover span {
            transform: translateY(-30px);
          }
        `}
      </style>

      <div className="tp-it-service pt-25 pb-10 theme-bg-black">
        <div className="container">
          <div className="row ">
            {softwareDevelopment.map((item, i) => (
              <div
                key={i}
                className="col-xxl-3 col-xl-3 col-md-6 "
                style={{ marginBottom: "20px" }}
              >
                <Link href={item.link}>
                  <div
                    className="ca-service-wrapper p-0 mb-30 wow tpfadeUp singleService"
                    data-wow-delay=".4s"
                    style={{
                      height: "100%",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      className="ca-service__item  aos-init aos-animate p-2 text-center"
                      style={{
                        height: "100%",
                        border: "none",
                        "--tp-theme-redical": "rgb(108,96,254)",
                      }}
                    >
                      <div className="law-servicce__item-img mb-20 ">
                        <img
                          className="sectionLogoImg"
                          src={item.img}
                          alt={item.title}
                        />
                      </div>
                      <h3 className="ca-service__item-title mb-20 ">
                        {item.title}
                      </h3>
                      <p className="mb-0" style={{ textAlign: "left" }}>
                        {item.des}
                      </p>

                      {/* <CustomButton
                      url={item.link}
                      text={"read more"}
                      backgroundColor="red"
                    /> */}
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

export default SubTypes;
