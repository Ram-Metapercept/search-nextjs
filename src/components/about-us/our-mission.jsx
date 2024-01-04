import React from "react";

const feature_data_2 = [
  {
    id: 1,
    icon: "flaticon-megaphone",
    color: "ab-computer-icon",
    title: "Our Vision",
    slug:"Our-Vision",
    des: (
      <>
        Collaborate as a team to surpass client expectations, delivering
        top-notch technology solutions and services.
      </>
    ),
    imgPath: "/assets/img/about-us/our-mission/lineIcon/monitoring.png",
  },
  {
    id: 2,
    icon: "flaticon-computer",
    color: "ab-computer-icon",
    title: "Our Mission",
    slug:"Our-Mission",
    des: (
      <>
        We endeavor to deliver world-class technology services to offer
        high-quality solutions at a reasonable cost.
      </>
    ),
    imgPath: "/assets/img/about-us/our-mission/lineIcon/target.png",
  },
  {
    id: 3,
    icon: "flaticon-bubble-chat",
    color: "ab-computer-icon",
    slug:"Our-Values",
    title: "Our Values",
    des: (
      <>
        We dedicate our efforts to delivering premium quality services and
        solutions that adhere to industry standards.
      </>
    ),
    imgPath: "/assets/img/about-us/our-mission/lineIcon/value2.png",
  },
];

const OurMission = () => {
  return (
    <>
      <style jsx>
        {`
          .app-feature-box:hover {
            border: 2px solid #cd5c5c;
          }

          .app-feature-box {
            padding: 20px 20px 0;
            height: 100%;
          }
        `}
      </style>

      <div className="tp-ab-feature-area ">
        <div className="ab-title-section-bg  pt-25 pb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="section-title-wraper mb-60">
                  {/* ---------------------------new------------------- */}
                  <div className="row">
                    <div className="col-12 wow tpfadeUp">
                      <div className="section-title-wraper">
                        <div className="tp-section text-center">
                          <h2 className="tp-section__title " id="what-our-goals">What our goals</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ---------------------------new------------------- */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tp-ab-sv-feature-boxes theme-bg-black"
          style={{
            background: "linear-gradient(to bottom,white 80px, black 20px)",
          }}
        >
          <div className="container">
            <div className="row">
              {feature_data_2.map((item, i) => (
                <div key={i} className="col-lg-4 wow tpfadeUp mb-30">
                  <div className="app-feature-box about-feature-item white-bg text-center">
                    <div className={`app-feature-box-icon  ${item.color}`}>
                      <span>
                        <img
                          src={item.imgPath}
                          alt={item.title}
                          width={65}
                          style={{ boxShadow: "none" }}
                        />
                      </span>
                    </div>
                    <div
                      className="app-feature__info ca-service__item"
                      style={{ padding: 0, margin: 0 }}
                    >
                      <h4
                        className="app-feature__title mb-20" id={item.slug}
                        // style={{ color: "#032b5f" }} 
                      >
                        {item.title}
                      </h4>
                      <p style={{ marginBottom: 0, textAlign: "left" }}>
                        {item.des}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
