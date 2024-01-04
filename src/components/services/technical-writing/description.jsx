import React from "react";

function Description() {
  return (
    <>
      <style jsx>
        {`
          .outer-container {
            background-image: linear-gradient(
              to bottom,
              #f47f20 30%,
              #f7984a 70%
            );
            //background-image: linear-gradient(168deg, #cd5c5c 1%, #f3767c 89%);
          }
          .outer-container .backImage {
            // background-image: url(/assets/img/new-services/technical-writing/back11.png);
            background-size: cover;
            background-position: right bottom;
            background-repeat: no-repeat;
          }
          .outer-container p {
            color: white;
            font-size: 16px;
            text-align: center;
            width: 60%;
            margin: 20px auto;
            line-height: 36px;
          }
          @media (max-width: 991px) {
            .outer-container p {
              width: 80%;
            }
          }
          @media (max-width: 767px) {
            .outer-container p {
              width: 100%;
              line-height: 30px;
            }
          }
        `}
      </style>
      <div className="outer-container ">
        <div className="backImage pt-25 pb-25">
          <div className="container">
            <div
              className="tp-section text-center"
              style={{ "--tp-heading-primary": "var(--tp-common-white)" }}
            >
              <h2 className="tp-section__title mb-20 wow tpfadeUp">
                Technical Writing
              </h2>
            </div>
            <p className="wow tpfadeUp">
              We provide professional support to all our users via our ticketing
              system; we are always open to new feature requests. The bug fixes
              are released through the auto- update system regularly.
            </p>
            <p className="wow tpfadeUp mb-0">
              We bring a great range of technical writing services and solutions
              for all types of technical documentation needs, right from API
              Documentation, Doc-As-Code, DITA-XML, and other technical
              communication practices.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
