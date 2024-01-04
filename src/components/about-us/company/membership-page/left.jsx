import React from "react";

function Left({ content, headerHeight }) {
  return (
    <>
      <div
        className="row justify-content-center text-left singleContentDiv"
        id={content.id}
        style={{
          scrollMarginBlockStart: headerHeight,
        }}
      >
        <div
          className="col-xl-10 col-md-12 pt-4 s-box shadow-lg mt-2 pt-5 pb-3  position-relative"
          // style={{
          //   backgroundColor: content.backColor,
          // }}
        >
          <div className="row justify-content-end ">
            <img
              src={content.image}
              alt="membership"
              className="img-fluid d-block  s-img-left"
            />
            <div className="col-xl-6 col-xxl-7 col-md-12 col-lg-6 col-sm-12  p-4 tp-section infoContainer">
              <h2 className="display-5 pb-2 tp-section__title  ">
                {content.title}
              </h2>
              <p style={{ marginBottom: "20px" }}>{content.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Left;
