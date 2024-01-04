import Image from "next/image";
import React from "react";

function Approach() {
  return (
    <>
      <style jsx>
        {`
          .welcome-area {
            // background: #f3f7fb;
            padding: 50px 0;
          }
          .section-headline h3,
          .achievement-area h3 {
            font-size: 60px;
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
            .section-headline h3,
            .achievement-area h3 {
              font-size: 32px;
              line-height: 40px;
            }
          }
          @media (max-width: 767px) {
            .section-headline h3,
            .achievement-area h3 {
              font-size: 26px;
              line-height: 38px;
            }
          }
        `}
      </style>

      <div className="welcome-area ">
        <div className="container">
          <div className="section-headline text-center ">
            <h3>
              We use the latest technology stacks to make the magic happen.
            </h3>
          </div>
          <div className="text-center text-description tp-section">
            <p className="mb-0">
              Timing is critical to a software development project. Therefore,
              we work in Agile mode to design, develop, deliver, and deploy.
              Contact us to discuss your web development projects.
            </p>
          </div>
        </div>
      </div>

      <div
        className="achievement-area pt-50 pb-30 theme-bg-7"
        // style={{ backgroundColor: "rgb(248,251,255)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h3>The Metapercept Approach</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="achivement-content">
              <div className="col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center">
                {/* <Image
                  src="/assets/img/new-services/software-development/infoog.jpg"
                  alt=""
                  width={550}
                  height={0}
                  style={{
                    margin: "30px 0",
                    width: " min(100%, 550px)",
                    height: "auto",
                    mixBlendMode: "multiply",
                  }}
                  className="imageFix"
                /> */}
                <img
                  src="/assets/img/new-services/software-development/infoog.jpg"
                  alt="software development"
                  className="imageFix"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Approach;
