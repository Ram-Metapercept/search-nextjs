import React from "react";
import CustomButton from "../../custom/custom-button";

function Left({ content }) {
  return (
    <>
      <div className="row justify-content-center text-left singleContentDiv">
        <div
          className="col-xl-10 col-md-12 pt-4 s-box shadow-lg mt-2 pt-5 pb-3  position-relative"
          // style={{ border: ` 2px solid ${content.darkColor}` }}
        >
          <div className="row justify-content-end ">
            <img
              src={content.image}
              alt={content.title}
              className="img-fluid d-block  s-img-left"
            />
            <div className="col-xl-6 col-xxl-7 col-md-12 col-lg-6 col-sm-12  p-4 tp-section infoContainer">
              <h2 className="display-5 pb-2 tp-section__title mainTitle ">
                {content.title}
              </h2>
              <p style={{ textAlign: "start", marginBottom: "20px" }}>
                {content.desc}
              </p>
              <CustomButton
                text={"read more "}
                url={content.url}
                backgroundColor="yellow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Left;
