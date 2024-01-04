import Image from "next/image";
import Link from "next/link";
import React from "react";

const service_data = [
  {
    id: 1,

    icon: "/assets/img/home/industries/lineIcon/case-study.png",
    name: "fintech & edutech",
    naem: (
      <>
        FinTech & <br />
        EdTech
      </>
    ),
    link: "/industries",
    delay: ".3s",
  },
  {
    id: 2,

    icon: "/assets/img/home/industries/lineIcon/drive.png",
    name: "cloud computing",
    naem: (
      <>
        Cloud <span style={{ color: "white" }}>.</span> <br />
        Computing
      </>
    ),
    link: "/industries",
    delay: ".4s",
  },
  {
    id: 3,

    icon: "/assets/img/home/industries/lineIcon/local-area-network.png",
    name: "storage & virtualization",
    naem: (
      <>
        Storage & <br />
        Virtualization
      </>
    ),
    link: "/industries",
    delay: ".6s",
  },
  {
    id: 4,

    icon: "/assets/img/home/industries/lineIcon/ai.png",
    name: "ai & ml",
    naem: (
      <>
        AI & Machine <br />
        Learning
      </>
    ),
    link: "/industries",
    delay: ".3s",
  },
  {
    id: 5,

    icon: "/assets/img/home/industries/lineIcon/maintenance.png",
    name: "automobile",
    naem: (
      <>
        Automobile & <br />
        Aerospace
      </>
    ),
    link: "/industries",
    delay: ".3s",
  },
];

const ServiceAre = () => {
  // const [hydrated, setHydrated] = React.useState(false);
  // React.useEffect(() => {
  //   setHydrated(true);
  // }, []);
  // if (!hydrated) {
  //   // Returns null on first render, so the client and server match
  //   return null;
  // }
  return (
    <>
      <style jsx>
        {`
          .tp-bs-sv-icon img {
            padding: 15px;
            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
          }
          .tp-bs-sv-icon::after {
            width: 70px;
            height: 70px;
          }
          .tp-bs-service-box:hover {
            box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.06);
            border-color: #086d38;
          }
        `}
      </style>
      <div
        className="tp-bs-service pt-25 theme-bg-7"
        style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}
      >
        <div className="container">
          {/* ---------------------new------------------- */}

          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-10">With Whom We Work</h2>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------new------------------- */}

          <div className="industriesInfo tp-section text-center">
            <p>
              We are an end-to-end service and solutions provider for all major
              industries.
            </p>
          </div>

          <div className="tp-bs-service pb-25  pt-0">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
              {service_data.map((item, i) => (
                <div
                  key={i}
                  className="col wow tpfadeUp"
                  data-wow-delay={item.delay}
                  style={{ marginBottom: "20px" }}
                >
                  <Link href={item.link}>
                    <div
                      className="tp-bs-service-box text-center pt-20 pb-10 mb-25"
                      style={{
                        // minHeight: "255px",
                        maxWidth: "240px",
                        backgroundColor: "white",
                        margin: "0 auto",
                        "--tp-theme-redical": "rgb(108,96,254)",
                        // margin: "0 auto 25px",
                        height: "100%",
                      }}
                    >
                      <div className="tp-bs-sv-icon mb-25">
                        {/* <Image width={90} height={90} src={item.icon} alt="" /> */}
                        <img
                          // className="sectionLogoImg p-0"
                          src={item.icon}
                          alt={item.name}
                          style={{ width: "85px" }}
                        />
                      </div>
                      <h3 className="tp-bs-sv-title px-3 " id={item.naem}>{item.naem}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAre;
