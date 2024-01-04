import React from "react";

function SubSectionDesign({
  infoSectionData,
  subSectionDetails,
  listBackColor,
  listDarkColor,
}) {
  return (
    <>
      <style jsx>
        {`
          @media (min-width: 992px) {
            .mainTitle {
              letter-spacing: 0.5px;
            }
          }

          .subTypes {
            padding: 20px 30px;
          }

          @media (max-width: 425px) {
            .subTypes {
              padding: 20px 20px;
            }
          }
        `}
      </style>

      <div className="tp-sv-detials-area pt-25 pb-25 ">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div
                className="tp-sv-details-serive-left wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <h2 className="tp-section__title mb-25 mainTitle">
                      {infoSectionData.title}
                    </h2>
                    <p className="mb-0 pb-25">{infoSectionData.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="tp-sv-details-serive-left wow tpfadeUp d-flex justify-content-center">
                <img
                  src={infoSectionData.img}
                  alt={infoSectionData.name}
                  className="serviceFlowImg"
                  style={{
                    maxWidth: "min(100%, 600px)",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------- */}
      <div className="tp-bs-service pt-25 pb-25 theme-bg-black">
        <div className="container">
          <div className="infoArchDiv">
            <div className="row  ">
              <div className="col-12 wow tpfadeUp">
                <div className="section-title-wraper">
                  <div className="tp-section ">
                    <h2 className="tp-section__title mb-10 mainTitle">
                      {subSectionDetails.mainTitle}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="industriesInfo tp-section ">
              <p className="mb-0">{subSectionDetails.mainPara}</p>
            </div>

            <div className="row pt-30 solutionInfo">
              <div className="col-lg-6 col-12 ">
                <div className="tp-section">
                  <h4>{subSectionDetails.subHeading}</h4>

                  <p className="mb-1 pb-25">{subSectionDetails.desc}</p>
                </div>
              </div>
              <div className="col-lg-6 col-12 ">
                <div
                  className="subTypes tp-section tp-ha-about-fea li span pb-1"
                  style={{
                    // backgroundColor: listBackColor,
                    borderRadius: "8px",
                  }}
                >
                  <ul>
                    {subSectionDetails.infoList.map((data, i) => {
                      return (
                        <li className="p-relative " key={i}>
                          <i
                            className="fa-solid fa-check correctSign"
                            style={{ color: listDarkColor }}
                          ></i>
                          <p
                            className="mb-0 listP"
                            // style={{ color: "#032b5f" }}
                          >
                            {data}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubSectionDesign;
