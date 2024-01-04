import Link from "next/link";
import React from "react";

const feature_data = [
  {
    id: 1,
    icon: "/assets/img/home/solutions/lineIcon/shield.png",
    url: "/solutions",
    title: <>Technology Services</>,
    name: "Technology Services",
    des: (
      <>
        Empowering businesses with innovative technology solutions through
        expert software engineering, technical publications, and consulting
        services.
      </>
    ),
  },
  {
    id: 2,
    icon: "/assets/img/home/solutions/lineIcon/content.png",
    url: "/solutions/softwareengineering",
    title: <>Software Engineering</>,
    name: "Software Engineering",
    des: (
      <>
        Transform ideas into reality with our software engineering, specializing
        in product development, microservices, and SaaS solutions.
      </>
    ),
  },
  {
    id: 3,
    icon: "/assets/img/home/solutions/lineIcon/copywriter.png",
    url: "/solutions/technicalpublication",
    title: <>Technical Publication</>,
    name: "Technical Publication",
    des: (
      <>
        Experiences and insights gained from real-world comprehensive and
        effective structured authoring and technical documentation.
      </>
    ),
  },
  {
    id: 4,
    icon: "/assets/img/home/solutions/lineIcon/info.png",
    url: "/solutions/informationarchitecture",
    title: <>Information Architecture</>,
    name: "Information Architecture",
    des: (
      <>
        Actionable recommendations based on the Information Architecture and
        DITA-XML knowledge for complete information solutions.
      </>
    ),
  },
  {
    id: 5,
    icon: "/assets/img/home/solutions/lineIcon/document.png",
    url: "/solutions/technicalpublication#contentmigrationsection",
    title: <>Content Migration</>,
    name: "Content Migration",
    des: (
      <>
        Drawing from the first-hand experiences of practitioners in the field,
        we use innovative solutions and best practices for seamless content
        migration.
      </>
    ),
  },
  {
    id: 6,
    icon: "/assets/img/home/solutions/lineIcon/staff.png",
    url: "/solutions/staffaugmentation",
    title: <>Staff Augmentation</>,
    name: "Staff Augmentation",
    des: (
      <>
        Get trained professionals for your organization's staff augmentation
        challenges with ready-to-onboard professional and skilled resources.
      </>
    ),
  },
];

const FeatureArea = () => {
  return (
    <>
      <style jsx>
        {`
          .app-feature-box {
            height: 100%;
            margin-bottom: 0;
          }
          .app-feature-box:hover {
            border: 2px solid #f47f20;
          }
          .app-feature__arrow {
            color: #f47f20;
          }
        `}
      </style>
      <div
        className="tp-app-feature theme-bg-black pt-25 pb-25"
        style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}
      >
        <div className="container">
          {/* ---------------------------new------------------- */}
          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-40">What we provide</h2>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------new------------------- */}

          <div className="row">
            {feature_data.map((item, i) => (
              <div key={i} className="col-lg-6 col-12 mb-30">
                <Link href={item.url} aria-label="read more">
                  <div
                    className="app-feature-box d-flex  p-relative wow tpfadeUp align-items-center"
                    data-wow-delay=".3s"
                  >
                    <div className=" me-0 me-sm-4 pb-3 pb-md-0">
                      <img
                        className="sectionLogoImg"
                        src={item.icon}
                        alt={item.name}
                      />
                    </div>
                    <div className="app-feature__info">
                      <h4
                        className="app-feature__title text-mirage text-center text-sm-start"
                        // style={{ color: "var(--tp-heading-primary)" }}
                      >
                        {item.title}
                      </h4>
                      <span style={{ textAlign: "start", display: "block" }}>
                        {item.des}{" "}
                      </span>
                    </div>
                    <div className="app-feature__arrow">
                      <span>
                        <i className="fal fa-long-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
