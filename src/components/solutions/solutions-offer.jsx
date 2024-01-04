import React from "react";
import solutionsHomeData from "@/src/data/solutions/solutions-home-data";
import Image from "next/image";
const { title, desc, img, logo,slug } = solutionsHomeData;
console.log(slug)
function SolutionsOffer() {
  return (
    <>
      <div className="tp-sv-detials-area pt-25 pb-25">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div
                className="tp-sv-details-serive-left wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <h2 className="tp-section__title mb-25 mainTitle" id={slug}>
                      {title}
                    </h2>
                    <p className="mb-0 pb-25">{desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="tp-sv-details-serive-left wow tpfadeUp d-flex justify-content-center">
                <img
                  src={img}
                  alt="solutions"
                  className="serviceFlowImg"
                  style={{ width: "min(100%, 600px)", height: "auto" }}
                />
                {/* <Image
                  src={img}
                  width={600}
                  height={300}
                  alt=""
                  className="serviceFlowImg"
                  style={{ maxWidth: "min(100%, 600px)", height: "auto" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionsOffer;
