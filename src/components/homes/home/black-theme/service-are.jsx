import Link from "next/link";
import React from "react";

const service_data = [
  {
    id: 1,
    slug:"fintech-edutech",
    icon: "/assets/img/home/industries/lineIcon/dark/case-study.png",
    name: "fintech & edutech",
    naem: (
      <>
        FinTech & <br />
        edTech
      </>
    ),
    link: "/industries",
    delay: ".3s",
  },
  {
    id: 2,
    slug:"cloud-computing",
    icon: "/assets/img/home/industries/lineIcon/dark/drive.png",
    name: "cloud computing",
    naem: (
      <>
        Cloud <span style={{ color: "white" }}></span> <br />
        computing
      </>
    ),
    link: "/industries",
    delay: ".4s",
  },
  {
    id: 3,
    slug:"storage-virtualization",
    icon: "/assets/img/home/industries/lineIcon/dark/local-area-network.png",
    name: "storage & virtualization",
    naem: (
      <>
        Storage & <br />
        virtualization
      </>
    ),
    link: "/industries",
    delay: ".6s",
  },
  {
    id: 4,
    slug:"AI-Machine-learning",
    icon: "/assets/img/home/industries/lineIcon/dark/ai.png",
    name: "ai & ml",
    naem: (
      <>
        AI & machine <br />
        learning
      </>
    ),
    link: "/industries",
    delay: ".3s",
  },
  {
    id: 5,

    icon: "/assets/img/home/industries/lineIcon/dark/maintenance.png",
    slug:"automobile-aerospage",
    name: "automobile",
    naem: (
      <>
        Automobile & <br />
        aerospace
      </>
    ),
    link: "/industries",
    delay: ".3s",
  },
];

const ServiceAre = () => {
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
            border-color: #f47f20;
          }
        `}
      </style>
      <div
        className="tp-bs-service pt-25 theme-bg-black"
        style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}
      >
        <div className="container">
          {/* ---------------------new------------------- */}

          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-10">With whom we work</h2>
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
        </div>
        <div className="industriesInfoBackground">
          <div className="tp-bs-service pb-25  pt-0 container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
              {service_data.map((item, i) => (
                <div
                  key={i}
                  className="col wow tpfadeUp"
                  data-wow-delay={item.delay}
                  style={{ marginBottom: "20px" }}
                >
                  {/* <Link href={item.link}> */}
                  <Link href={"/aboutus/company/#industries"}>
                    <div
                      className="tp-bs-service-box text-center pt-20 pb-10 mb-25"
                      style={{
                        maxWidth: "240px",
                        margin: "0 auto",
                        "--tp-theme-redical": "rgb(108,96,254)",
                        height: "100%",
                      }}
                    >
                      <div className="tp-bs-sv-icon mb-25">
                        <img
                          src={item.icon}
                          alt={item.name}
                          style={{
                            width: "65px",
                            background: "transparent",
                            padding: 0,
                          }}
                        />
                      </div>
                      <h3 className="tp-bs-sv-title px-3 " id={item.slug}>{item.naem}</h3>
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
