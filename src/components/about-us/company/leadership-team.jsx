import React from "react";
import leadership_team_data from "@/src/data/about-us/company/leadership-team";
import Image from "next/image";
function LeadershipTeam() {
  return (
    <>
      <style>
        {`
      .LeadershipImageDiv {
          width: 200px;
        }
      `}
      </style>
      <div className="da-team-area pt-25 pb-25 theme-bg-black">
        <div className="container">
          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-10">
                    Our leadership team
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolioInfo tp-section text-center">
            <p
              className=" wow tpfadeUp"
              data-wow-delay=".4s"
              // style={{ color: "var(--tp-grey-3)" }}
            >
              The best and brightest innovators in the field of technical
              documentation and product development.
            </p>
          </div>
          <div className="row d-flex justify-content-center">
            {leadership_team_data.map((item, i) => (
              <div
                key={i}
                className="col-md-6 col-lg-3 col-xl-3 LeadershipImageDiv"
              >
                <div className=" mb-20 wow tpfadeUp">
                  <div
                    className="ca-team-item__img ca-team-item-after w-img mb-15 fix"
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
                  <div className="ca-team-item__content text-center">
                    <h3 className="ca-team-item__content-title">{item.name}</h3>
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

export default LeadershipTeam;
