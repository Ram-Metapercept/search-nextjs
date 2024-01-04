import React, { useEffect, useState } from "react";
import industries from "../about-us/industries-data";
import findHeaderHeight from "@/hooks/find-header-height";

function SingleCard() {
  const [headerHeight, setHeaderHeight] = useState(110);
  useEffect(() => {
    setHeaderHeight(findHeaderHeight());
  }, []);
  return (
    <>
      <style jsx>{`
        .services-area {
          position: relative;
          z-index: 1;
        }
        .default-padding-top {
          padding-top: 50px;
        }
        .services-style-three {
          overflow: hidden;
        }
        .service-item-style-three {
          padding: 50px;
          position: relative;
          z-index: 1;
          scroll-margin-block-start: ${headerHeight};
        }
        .service-item-style-three::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          height: 1px;
          width: 100%;
          // background: #e7e7e7;
          background: #9d9d9d;
        }
        .service-item-style-three .thumb {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 0;
          width: 0;
          z-index: -1;
          background-size: cover !important;
          background-position: center !important;
          transition: all 0.25s ease-in-out;
          opacity: 1;
        }
        .service-item-style-three .thumb::after {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          height: 100%;
          width: 100%;
          background: #ffffff;
          z-index: -1;
          transition: all 0.35s ease-in-out;
        }
        .service-item-style-three i,
        .service-item-style-three h4,
        .service-item-style-three h4 a,
        .service-item-style-three p {
          transition: all 0.35s ease-in-out;
        }
        .service-item-style-three i {
          display: inline-block;
          font-size: 60px;
          color: #ff5e14;
          margin-bottom: 30px;
        }
        .flaticon-engineer-3:before {
          content: "\f10e";
        }
        .service-item-style-three:hover .thumb {
          width: 100%;
          height: 100%;
          opacity: 1;
        }
        .service-item-style-three:hover * {
          color: white !important;
        }
        .service-item-style-three:hover .thumb::after {
          opacity: 0.6;
          background-color: #000000;
        }
      `}</style>
      <div className="services-area theme-bg-black">
        <div className="container">
          <div className="services-style-three">
            <div className="row">
              {industries.map((industry, i) => {
                return (
                  <div
                    className=" col-md-6 service-item-style-three tp-section"
                    id={industry.hash}
                    key={i}
                  >
                    <div
                      className="thumb"
                      style={{
                        background: `url(${industry.img})`,
                      }}
                    ></div>
                    <i
                      className={industry.iClass}
                      style={{ color: industry.darkColor }}
                    ></i>
                    <h4>{industry.name}</h4>
                    <p style={{ marginBottom: 0 }}>{industry.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCard;
