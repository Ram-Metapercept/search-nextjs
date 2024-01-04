import React from "react";

const BreadcrumbArea = ({
  title = "Our Company Histoy",
  backImage = "/assets/img/breadcrumb/Maskgroup16.png",
  backColor = "#fef5f6",
}) => {
  return (
    <>
      <div
        className="breadcrumb__area theme-bg pt-120 pb-120"
        style={{
          backgroundImage: `url(${backImage})`,
          backgroundColor: backColor,
          backgroundPosition: "right top",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <h3 className="breadcrumb__title">{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbArea;
