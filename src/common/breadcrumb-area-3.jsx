import React from "react";

const BreadcrumbArea = ({
  title = "Our Company Histoy",
  info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi vel reiciendis inventore recusandae? Debitis aliquid autem amet praesentium exercitationem eius quae sunt porro id.",
  backImage = "/assets/img/breadcrumb/soft-engg-back.png",
}) => {
  return (
    <>
      <style jsx>
        {`
          .bg-panel-glass {
            padding: 3rem 2rem;
          }
          .bg-panel-glass .breadcrumb__title {
            font-weight: bolder;
          }
          .bg-panel-glass .breadcrumb__title,
          .bg-panel-glass .tp-section p {
            color: white;
          }

          .bannerText p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
            text-align: start;
          }
          .breadcrumb__area {
            padding-top: 100px;
            padding-bottom: 100px;
          }
          @media (max-width: 425px) {
            .breadcrumb__area {
              padding-top: 80px;
              padding-bottom: 80px;
            }
          }
        `}
      </style>
      <div
        className="breadcrumb__area theme-bg"
        style={{
          backgroundImage: `url(${backImage})`,

          backgroundPosition: "center center",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <div
                  className={`col-md-9 col-lg-7 col-xxl-6 col-sm-12 bg-panel-glass side-content `}
                >
                  <h2 className="breadcrumb__title">{title}</h2>
                  <div className="tp-section bannerText">
                    <p className="mb-0">{info}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbArea;
