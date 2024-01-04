import Image from "next/image";
import Link from "next/link";
import React from "react";
import { portfolio_web_Url } from "@/src/data/external-website";
// feature_data

const feature_data = [
  {
    id: 1,
    icon: "flaticon-sketchbook",
    position: "down",
    cls: "",
    title: <>Information Architect</>,
    name: "information architecture",
    des: <>Maximize your presence on search engine results pages.</>,
    delay: ".3s",

    backColor: "#f75756",
    img: "/assets/img/home/success-stories/lineIcon/systems.png",
    url: portfolio_web_Url + "Information Architecture",
    // url: "https://blog.metapercept.com/category/case-studies/",
  },
  {
    id: 2,
    icon: "flaticon-settings",
    position: "up firstDiv",
    cls: "",
    title: <>Technical Publications</>,
    name: "Technical publications",
    des: <>Maximize your presence on search engine results pages.</>,
    delay: ".4s",

    backColor: "#FBD85D",
    img: "/assets/img/home/success-stories/lineIcon/newspaper.png",
    url: portfolio_web_Url + "Technical Writing",
    // url: "https://blog.metapercept.com/category/case-studies/",
  },
  {
    id: 3,
    icon: "flaticon-design",
    position: "",
    cls: "",
    title: <>Web Development</>,
    name: "web development",
    des: <>Maximize your presence on search engine results pages.</>,
    delay: ".5s",

    backColor: "#539165",
    img: "/assets/img/home/success-stories/lineIcon/computer.png",
    url: portfolio_web_Url + "WebDevelopment",
    // url: "https://blog.metapercept.com/category/case-studies/",
  },
  {
    id: 4,
    icon: "flaticon-box",
    position: "up secondDiv",
    cls: "",
    title: <>Application Integration</>,
    name: "application integration",
    des: <>Maximize your presence on search engine results pages.</>,
    delay: ".6s",

    backColor: "#F79327",
    img: "/assets/img/home/success-stories/lineIcon/integration-2.png",
    url: portfolio_web_Url,
    // url: "https://blog.metapercept.com/category/case-studies/",
  },
];

const SuccessStories = () => {
  return (
    <>
      <style jsx>
        {`
          .flexDiv {
            display: flex;
            justify-content: center;
            align-items: center;
          }
           {
            /* .seo-feature-item.firstDiv {
            transform: translateY(-25px);
          }
          .seo-feature-item.secondDiv {
            transform: translateY(-25px);
          } */
          }

          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(10, 24, 94, 0.4);
            }
            70% {
              box-shadow: 0 0 0 45px rgba(255, 255, 255, 0);
            }

            100% {
              box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
            }
          }

          @media (max-width: 1199px) {
            .icon-right,
            .icon-left {
              display: none;
            }
            .tp-section p {
              margin-bottom: 0;
            }
          }
        `}
      </style>

      <div
        className="seo-feature-area  p-relative pt-25"
        style={{
          "--tp-theme-seagreen": "rgb(248,252,252)",
          "--tp-heading-primary": "var(--tp-theme-vogue)",
        }}
      >
        {/* <div
          className="seo-fea-line-share d-none d-xl-block"
          style={{ top: "49%" }}
        >
          <img
            src="/assets/img/icons/seo-feature-line.png"
            alt="success story"
          />
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-10">
                    Our Success Stories
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolioInfo tp-section text-center">
            <p
              className="pb-50 pb-xl-0 mb-6 wow tpfadeUp"
              data-wow-delay=".4s"
              style={{ color: "var(--tp-grey-3)" }}
            >
              With a track record of successful project deliveries, we have
              compelling success stories to share.
            </p>
          </div>

          <div className="row">
            {feature_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-3 col-md-6 wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <div
                  className={` ${item.position} text-center mb-30`}
                  style={{ transform: "translateY(0)" }}
                >
                  <Link href={item.url} target="_blank">
                    <div className="seo-feature-item__icon p-relative flexDiv">
                      <span
                        className="seo-circle-bg"
                        style={{ backgroundColor: item.backColor }}
                      >
                        <img
                          className="sectionLogoImg"
                          src={item.img}
                          alt={item.name}
                          // style={{ width: "70px" }}
                        />
                        {/* <Image src={item.img} alt="" width={75} height={75} /> */}
                      </span>
                    </div>
                  </Link>
                  <div className="seo-feature-item__content  ca-service__item p-0 mt-30">
                    <h3
                      className="ca-service__item-title mb-20"
                      style={{ cursor: "pointer" }}
                    >
                      <a href={item.url} target="_blank">
                        {item.title}
                      </a>
                    </h3>
                    {/* <p className="mb-30" style={{ color: "var(--tp-grey-1)" }}>
                      {item.des}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="seo-fea-shapes">
          <div
            className="icon-left wow tpfadeUp flexDiv"
            data-wow-delay=".3s"
            style={{ backgroundColor: "rgb(50,77,160)" }}
          >
            <img
              src="/assets/img/home/success-stories/lineIcon/start-up.png"
              alt="start up"
              style={{ width: "65%" }}
            />
          </div>
          <div
            className="icon-right wow tpfadeUp flexDiv"
            data-wow-delay=".4s"
            style={{ backgroundColor: "rgb(50,77,160)" }}
          >
            <img
              src="/assets/img/home/success-stories/lineIcon/trophy-2.png"
              alt="trophy"
              style={{ width: "65%" }}
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default SuccessStories;
