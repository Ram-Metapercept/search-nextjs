import React from "react";
import solutionsHomeData from "@/src/data/solutions/solutions-home-data";
import Image from "next/image";
const { title, desc, img, logo } = solutionsHomeData;
function Approach() {
  return (
    <>
      <style jsx>
        {`
          .welcome-area {
            padding: 25px 0;
          }
          .section-headline h2,
          .achievement-area h2 {
            font-size: 40px;
            text-transform: capitalize;
            font-weight: 400;
            margin-bottom: 20px;
          }

          .achievement-area .imageFix {
            width: min(100%, 550px);
            margin: 30px 0px;
            mix-blend-mode: multiply;
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .section-headline h2,
            .achievement-area h2 {
              font-size: 32px;
              line-height: 40px;
            }
          }
          @media (max-width: 767px) {
            .section-headline h2,
            .achievement-area h2 {
              font-size: 26px;
              line-height: 38px;
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
                      The metapercept approach
                    </h2>
                    <p className="mb-0 pb-25">
                      Metapercept leverages AI in software development,
                      automating tasks and enhancing code quality through
                      predictive issue detection, ensuring innovation and
                      efficiency in the development process.
                    </p>
                  </div>
                  <div className="tp-section">
                    <h2 className="tp-section__title mb-25 mainTitle">
                      We use the latest technology stacks to make the magic
                      happen.
                    </h2>
                    <p className="mb-0 pb-25">
                      In the fast-paced world of software development, timing
                      and quality is crucial. That's why we follow an agile
                      approach to design, build, integrate, operate, and deploy
                      seamlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="tp-sv-details-serive-left wow tpfadeUp d-flex justify-content-center">
                <img
                  src="/assets/img/new-services/software-development/infoog.jpg"
                  alt="software development"
                  className="serviceFlowImg"
                  style={{
                    width: "min(100%, 700px)",
                    // width: "100%",
                    height: "auto",
                    mixBlendMode: "multiply",
                  }}
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

export default Approach;
