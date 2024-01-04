import CallToActionForm from "@/src/forms/call-to-action-form-2";
import React from "react";

const call_to_action_data = {
  action: "Call To Action",
  title: "Any project on your mind. Let us know.",
  phone: "+91-(839)-090-5726;",
  tel: "8390905726",
  address: "Magarpatta Road, Pune Maharashtra, India",
  email: "info@metapercept.com",
  date: "Mon-Fri: 10:00 - 18:00",
};

const { action, title, phone, address, email, date, tel } = call_to_action_data;
const CallToAction = () => {
  return (
    <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
      <div className="it-cta-area theme-bg-black">
        {/* <div className="it-cta-area " style={{ backgroundColor: "#E3F4F4" }}> */}
        <div className="container ">
          <div className=" pt-50"></div>
          <div className="row pb-60">
            <div className="it-cta__title pb-30">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-40 ">{title}</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow tpfadeUp" data-wow-delay=".3s">
              <div className="row">
                <div
                  className="contact-inner d-flex flex-column  align-items-center p-0"
                  style={{ fontSize: "3rem" }}
                >
                  <div
                    className="col-md-8 col-sm-12 col-11 m-3  mt-0 contactUsCard"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                      borderRadius: "10px",
                      // backgroundColor: "white",
                      paddingBottom: "10px",
                    }}
                  >
                    <div className="contact-icon text-center">
                      <div className="single-icon ">
                        <i
                          className="fa-solid fa-mobile-screen-button"
                          style={{ color: "#fcb713", fontSize: "2rem" }}
                        ></i>
                        <p style={{ fontSize: "16px" }}>
                          <b>Consulting:</b> +91-(839)-090-5726 <br />
                          <b>Sales:</b> +1-(817) 382-0346 <br />
                          <b>Training:</b> +91-(986)-080-0135 <br />
                          <b>Main Line:</b>+91-(020)-4129-1914
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-8 col-sm-12 col-11 m-3 mt-0  contactUsCard"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                      borderRadius: "10px",
                      // backgroundColor: "white",
                      paddingBottom: "10px",
                    }}
                  >
                    <div className="contact-icon text-center">
                      <div className="single-icon">
                        <i
                          className="fa-solid fa-envelope"
                          style={{ color: "#fcb713", fontSize: "2rem" }}
                        ></i>
                        <p style={{ fontSize: "16px" }}>
                          <b>Sales:</b> sales@metapercept.com <br />
                          <b>Info:</b> info@metapercept.com <br />
                          <b>Training:</b> training@metapercept.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-8 col-sm-12 col-11 m-3 mt-0  contactUsCard"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                      borderRadius: "10px",
                      // backgroundColor: "white",
                      paddingBottom: "10px",
                    }}
                  >
                    <div className="contact-icon text-center">
                      <div className="single-icon">
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ color: "#fcb713", fontSize: "2rem" }}
                        ></i>
                        <p style={{ fontSize: "16px", padding: "0 20px" }}>
                          <b>India:</b> Office Number 603, Konark Icon,
                          <br />
                          Magarpatta Road, Pune Maharashtra, India
                          <br />
                          <b>USA:</b> Arlington, Texas, USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="it-cta-form wow tpfadeUp" data-wow-delay=".4s">
                <CallToActionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
