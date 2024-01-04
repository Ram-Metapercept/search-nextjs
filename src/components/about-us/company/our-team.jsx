import React from "react";
import { allTeams } from "@/src/data/about-us/company/our-team";

function OurTeam() {
  return (
    <>
      <style jsx>{`
        .joinTeamBanner {
          background-image: url(/assets/img/about-us/company/da-pattern3.png);
          background-color: white;
        }
        .joinTeamBanner .descDiv {
          margin-left: 130px;
        }
        .teamImageDiv {
          width: 200px;
        }
        .ourTeamWrapper {
          max-height: 700px;
          overflow-y: auto;
        }
          .ourTeamWrapper::-webkit-scrollbar {
            width: 5px;
          }

          .ourTeamWrapper::-webkit-scrollbar-track {
            background: rgb(184, 201, 255);
            overflow: hidden;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
          }

          .ourTeamWrapper::-webkit-scrollbar-thumb {
            background: rgb(105, 87, 189);
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
          }

          .ourTeamWrapper::-webkit-scrollbar-thumb:hover {
            background: rgb(95, 76, 179);
          }
        }

        .swiper-wrapper {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        .customH1 {
          font-size: 18px;
        }

        @media (max-width: 1399px) {
          .teamImageDiv {
            width: 200px;
          }
        }
        @media (max-width: 439px) {
          .teamImageDiv {
            width: 200px;
          }
        }
        @media (max-width: 767px) {
          .joinTeamBanner {
            background-image: none;
          }
          .joinTeamBanner h4 {
            text-align: center;
          }
          .joinTeamBanner .descDiv {
            margin-left: 0px;
          }
        }
      `}</style>
      <div className="da-team-area pt-25 pb-25 theme-bg-black">
        <div className="container">
          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-10">Our core team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolioInfo tp-section text-center">
            <p className=" wow tpfadeUp" data-wow-delay=".4s">
              We have a can-do attitude backed up by more than 15 years
              experience delivering high-end, creative IT solutions on time and
              on budget.
            </p>
          </div>
          <div className="row d-flex justify-content-center ourTeamWrapper">
            {allTeams.map((item, i) => (
              <div className="teamImageDiv">
                <div className=" mb-20 wow tpfadeUp">
                  <div
                    className=" customProfileImg ca-team-item__img ca-team-item-after w-img mb-15 fix"
                    style={{ borderRadius: "8px" }}
                  >
                    <img src={item.img} alt={item.name} />

                    <div className="ca-team-item__img-social">
                      <a href={item.linkedin} target="_blank">
                        <i
                          className="fab fa-linkedin"
                          style={{ fontSize: "30px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                  <div className="ca-team-item__content text-center mt-15">
                    <h3 className="ca-team-item__content-title customH1">
                      {item.name}
                    </h3>
                    <span style={{ fontSize: "16px" }}>{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
