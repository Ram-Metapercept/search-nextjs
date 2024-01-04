import React from "react";

const contact_info = {
  img: "/assets/img/cta/contact-page-1.jpg",
  hi_text: "Say Hello",
  title: <>The feeling is mutual. These are the best ways to make it happen.</>,
};

const { img, hi_text, title } = contact_info;

const ContactArea = () => {
  return (
    <>
      <div className="contact-page-area pt-120 pb-90 wow tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-img-1 pb-100 w-img">
                <img src={img} alt="contact" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <span className="say-hello">{hi_text}</span>
            </div>
            <div className="col-lg-10">
              <div className="tp-contact-page-info ">
                <h3 className="tp-section__title  ">{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
