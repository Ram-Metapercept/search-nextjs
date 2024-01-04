import React from "react";
import technologyData from "@/src/data/services/technical-writing/technology-data";
import Image from "next/image";
function Technologies() {
  return (
    <>
      <style jsx>
        {`
          .technologies-area {
            padding: 25px 0 0;
          }
          .section-headline h2 {
            font-size: 40px;
            text-transform: capitalize;
            font-weight: 400;
            line-height: 48px;
            margin-bottom: 20px;
          }
          .technologies-area .techGroups {
            display: flex;
            justify-content: center;
            gap: 20px 30px;
            flex-wrap: wrap;
            padding: 25px 100px;
          }
          .technologies-area .singleTech .backBorder {
            position: absolute;
            width: 60px;
            height: 60px;
            background-color: transparent;
            bottom: -5px;
            right: -5px;
          }

          .technologies-area .singleTech {
            position: relative;

            width: 87px;
            height: 80px;
            // background-color: white;
            //background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;

             {
              /* border-radius: 10px; */
            }

            //box-shadow: rgba(99, 99, 99, 0.1) 0px 0px 8px 3px;

            transition: all 0.3s ease-out 0s;
          }

           {
            /* .technologies-area .singleTech:hover {
            background-color: rgb(198, 226, 255);
            border-color: transparent;
            cursor: pointer;
          } */
          }

          .technologies-area .singleTech .techImg {
            width: 50%;
            transform: translateX(-2px);
          }
          .technologies-area .singleTech .backImg {
            width: 100%;
            position: absolute;
          }

          @media (max-width: 1400px) {
            .technologies-area .techGroups {
              padding: 25px 0px;
              gap: 20px 30px;
            }
          }

          @media (max-width: 1200px) {
            .technologies-area .techGroups {
              padding: 25px 80px;
              gap: 20px 30px;
            }
          }

          @media (max-width: 505px) {
            .technologies-area .techGroups {
              padding: 25px 50px;
              gap: 20px 30px;
            }
          }
          @media (max-width: 445px) {
            .technologies-area .techGroups {
              padding: 25px 0px;
              gap: 20px 30px;
            }
          }

          @media (min-width: 768px) and (max-width: 991px) {
            .section-headline h2 {
              font-size: 32px;
              line-height: 40px;
            }
          }
          @media (max-width: 767px) {
            .section-headline h2 {
              font-size: 26px;
              line-height: 38px;
            }
          }
        `}
      </style>

      <div
        className="technologies-area theme-bg-black"
        style={{
          "--tp-heading-primary": "var(--tp-theme-vogue)",
        }}
      >
        <div className="container">
          <div className="section-headline text-center ">
            <h2>Technology & Tools</h2>
          </div>
          <div className="text-center text-description tp-section">
            <p className="mb-0">
              We work with diverse technologies using a combination of
              technology stacks to simplify the software development approach.
            </p>
          </div>

          <div className="techGroups">
            {technologyData.map((technology, i) => {
              return (
                <div className="singleTech" key={i}>
                  {/* <img
                    className="backImg"
                    src="/assets/img/new-services/software-development/technologies/backImage.svg"
                    alt=""
                  /> */}
                  <svg
                    className="backImg"
                    width="91"
                    height="83"
                    viewBox="0 0 91 83"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 40L38.5 9.68911H73.5L91 40L73.5 70.3109H28.5L21 40Z"
                      fill={technology.color}
                    />
                    <g filter="url(#filter0_d_7_26)">
                      <path
                        d="M4 40L24 5.35898H64L84 40L64 74.641H24L4 40Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_7_26"
                        x="0"
                        y="5.35898"
                        width="88"
                        height="77.282"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_7_26"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_7_26"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  {/* <Image
                    width={43}
                    height={43}
                    src={technology.img}
                    alt=""
                    style={{ mixBlendMode: "multiply", height: "auto" }}
                    className="techImg"
                  /> */}
                  <img
                    src={technology.img}
                    alt={technology.name}
                    style={{ mixBlendMode: "multiply" }}
                    className="techImg"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="triangle-right">
          <div className="right"></div>
          <div className="left"></div>
        </div> */}
      </div>
    </>
  );
}

export default Technologies;
