import React from "react";

const portfolio_content = {
  img_1: "/assets/img/home/success-stories/info-arch-2.jpg",

  img_2: "/assets/img/home/success-stories/technical-publication.jpg",
  title: "UX, Website Design",
  name_2: "Technical Publication",
  name_1: "Information Architecture",
};
const { img_1, img_2, title, name_1, name_2 } = portfolio_content;

const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/home/success-stories/software-dev-3.jpg",

    title: "UX, Website Design",
    name: "Web Development",
  },
  {
    id: 2,
    img: "/assets/img/home/success-stories/application-integration.png",
    title: "UX, Website Design",
    name: "Company Case Study",
    name: "Application Integration",
  },
];

const PortfolioArea = () => {
  return (
    <>
      <style jsx>
        {`
          .currentName {
            position: absolute;
            bottom: 0;
            left: 40px;
             {
              /* color:#54fff9; */
            }
             {
              /* color :#f5f147; */
            }
            color: #fff900;

            font-size: 24px;
             {
              /* text-shadow: 0 0 2px gray; */
            }
          }
          .ca-portfolio-img:hover .currentName {
            opacity: 0;
          }
          .imgOne {
            max-height: 750px;
          }
          @media (min-width: 1200px) and (max-width: 1400px) {
            .imgOne {
              max-height: 690px;
            }
          }
        `}
      </style>
      <div
        className="ca-portfolio-area pt-50 pb-50"
        style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-40">
                    Our Success Stories
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolioInfo tp-section text-center">
            <p>
              Now that we have delivered so many projects successfully, we have
              success stories to share with you.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div
                className="ca-portfolio-img w-img mb-30 wow tpfadeUp "
                data-wow-delay=".3s"
              >
                <img
                  className="imgOne"
                  src={img_1}
                  alt={name_1}
                  style={{ aspectRatio: "3/4" }}
                />
                <h3 className="currentName">
                  <a href="#">{name_1}</a>
                </h3>
                <div className="ca-project-item__info">
                  <h3 className="ca-project-item__title">
                    <a href="#">{name_1}</a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div
                className="ca-portfolio-img mb-25 w-img wow tpfadeUp"
                data-wow-delay=".4s"
              >
                <img
                  src={img_2}
                  alt={name_2}
                  style={{ maxHeight: "318px", objectFit: "cover" }}
                />
                <h3 className="currentName">
                  <a href="#">{name_2}</a>
                </h3>
                <div className="ca-project-item__info">
                  <h3 className="ca-project-item__title">
                    <a href="#">{name_2}</a>
                  </h3>
                </div>
              </div>

              <div className="row">
                {portfolio_data.map((item, i) => (
                  <div key={i} className="col-md-6">
                    <div
                      className="ca-portfolio-img w-img mb-30 wow tpfadeUp"
                      data-wow-delay=".4s"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ aspectRatio: "3/4", objectFit: "cover" }}
                      />
                      <h3 className="currentName">
                        <a href="#">{item.name}</a>
                      </h3>
                      <div className="ca-project-item__info">
                        <h3 className="ca-project-item__title">
                          <a href="#">{item.name}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioArea;
