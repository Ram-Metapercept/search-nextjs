import portfolio_data from "@/src/data/about-us/portfolio-data";
import React from "react";
import slugify from "slugify";
const PortfolioArea2 = () => {
  return (
    <>
      <style jsx>
        {`
          .portfolioDesc h3 {
            font-size: 24px;
          }
          .singlePortfolio {
            height: 100%;
          }
          .portfolioDesc p {
            color: rgb(117, 124, 128);
            font-size: 16px;
            text-align: start;
          }
          .portfolioImg {
            aspect-ratio: 16/9;
          }
          .accordion-body p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
          }
          @media (max-width: 992px) {
            .accordion-body p {
              -webkit-line-clamp: 6;
            }
          }
        `}
      </style>

      <div className="da-blog-area pt-25 pb-25 p-relative">
        <img
          className="d-none d-md-block"
          src="/assets/img/about-us/portfolio/bottom.png"
          alt="portfolio background"
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
            maxWidth: "220px",
            transform: "rotate(90deg)",
          }}
        />
        <img
          className="d-none d-md-block"
          src="/assets/img/about-us/portfolio/bottom.png"
          alt="portfolio background"
          style={{
            position: "absolute",
            right: "20px",
            bottom: "20px",
            maxWidth: "200px",
            transform: "rotate(-90deg)",
          }}
        />

        <div className="container">
          {/* ---------------------new------------------- */}

          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-40">Portfolio</h2>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------new------------------- */}

          <div className="row">
            {portfolio_data.map((item, i) => (
              <div key={i} className="col-md-6 col-xl-4 mb-30">
                <a href={item.url} target="_blank">
                  <div
                    className="da-blog mb-30 wow tpfadeUp singlePortfolio"
                    data-wow-delay={item.delay}
                  >
                    <div className="da-blog__thumb w-img">
                      <div className="fix">
                        <img
                          className="portfolioImg"
                          src={item.img}
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <div
                      className="da-blog-info white-bg pb-5"
                      style={{ backgroundImage: "none" }}
                    >
                      <div className="blog-inner-zin portfolioDesc accordion-body">
                        <h3 className="" id={slugify(item.title)}>{item.title}</h3>
                        <p className="m-0"> {item.desc}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioArea2;
