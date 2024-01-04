import SocialLinks from "@/src/common/social-links-new";
import Link from "next/link";
import React from "react";
import CommonFooter, { FooterCopyRight } from "./common-footer-new";

import { SubscribeEmailValidation, clearError } from "@/utils/FormValidation";

// footer_links data

const footer_content = {
  footer_logo: "/assets/img/footer/Metapercept_footer_logo2.svg",
  about: "About Us",
  about_des: (
    <>
      Are you looking for professional information technology services and
      solutions in software development or technical writing? Connect with us
      today.
    </>
  ),
  phone_icon: "/assets/img/footer/call-icon.png",
  address: (
    <>
      Office Number 4080, <br /> Marvel Fuego, <br /> Magarpatta Road, <br />{" "}
      Pune Maharashtra, India
    </>
  ),
  phone: <>+91-(839)-090-5726</>,
  tel: "8390905726",
};

const { footer_logo, about, about_des, phone_icon, address, phone, tel } =
  footer_content;

const Footer = ({ tp_border }) => {
  const isFormValid = (e) => {
    const ErrorMsg = document.getElementsByClassName("errorMessage");
    let count = 0;
    for (let ele of ErrorMsg) {
      if (ele.style.display == "block") count++;
    }
    if (count) {
      e.preventDefault();
    }
    //  else {
    //   localStorage.setItem("isSubscribed", true);
    // }
    return count ? false : true;
  };

  return (
    <>
      <style jsx>
        {`
          .errorMessage {
            display: none;
            margin: 10px 0 0 0;
            color: red;
          }
          .tp-footer-from form button {
            background-color: rgb(50, 77, 160);
          }
          .tp-footer-from form button:hover {
            background-color: rgb(108, 96, 254);
          }
          .subscribeEmailBtn {
            width: auto;
            padding: 0 10px;
          }
          .subscribeDiv {
            max-width: 350px;
          }

          @media (max-width: 768px) {
            //.footerContent {
            //   text-align: center;
            // }
            .subscribeDiv {
              padding-right: 0;
            }
          }
        `}
      </style>

      <footer className="HideHeaderFooter">
        <div
          className={`bs-footer ${tp_border && "tp-border-top"}`}
          style={{ backgroundColor: "rgb(248,252,252)" }}
        >
          <div className="container">
            {/* <div className="bs-footer__top fotter-btn-bottom pt-25 pb-25 d-md-block">
              <div className="row align-items-center">
                <div className="col-12 pb-20 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start">
                  <div className="bs-footer__top-logo">
                    <Link href="/">
                      <img src={footer_logo} alt="metapercept logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-6 text-md-end d-flex align-items-center justify-content-center justify-content-md-end">
                  <div className="bs-footer__top-social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="bs-footer__main pb-10 pt-25 tp-border-bottom footerContent">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-md-6">
                  <div className="tp-footer__widget mb-10">
                    {/* <h3 className="tp-footer__widget-title mb-35">{about}</h3> */}
                    <div className="bs-footer__top-logo mb-10">
                      <Link href="/">
                        <img
                          src={footer_logo}
                          alt="metapercept logo"
                          style={{ width: "200px" }}
                        />
                      </Link>
                    </div>
                    <p
                      className="pe-xl-0 pe-md-5 font-12 mb-0"
                      style={{ lineHeight: "18px" }}
                    >
                      {/* <p className="pr-40"> */}
                      {/* <p className="pr-40" style={{ textAlign: "justify" }}> */}
                      {about_des}
                    </p>
                  </div>

                  <div className="tp-footer__widget pe-xl-0 pe-md-5  subscribeDiv">
                    <div className="tp-footer-from p-relative">
                      <form
                        method="post"
                        action="https://cfed3d59.sibforms.com/serve/MUIFAAQuk_u9WnIQCnfRSQRDr6tsGW02CFsAaqR-YpfsGA1BPLNNRbGXRv0x9e4KlZsFmKI5FoLlPU1hHvmAdB8-T_blKEXpJ3tSaWPa-44duJsbdTcYQtXXO3jnTgLW_wn2Yd6_0vXAr9N-KCqb8mOwh53AaLspAPoA-xVKkJO3oTSXe4rS678QVt87n2qp6r-VxWNFuDHGvG2X"
                        onSubmit={isFormValid}
                      >
                        <span>
                          <i
                            className="fas fa-envelope-open"
                            style={{ color: "rgb(50, 77, 160)" }}
                          ></i>
                        </span>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          id="EMAIL"
                          name="EMAIL"
                          autoComplete="off"
                          required
                          data-required="true"
                          onBlur={SubscribeEmailValidation}
                          onFocus={() => clearError("errorSubscribeEmail")}
                        />
                        <button
                          type="submit"
                          aria-label="subscribe"
                          className="subscribeEmailBtn"
                        >
                          {/* <i className="fas fa-paper-plane"></i> */}
                          subscribe
                        </button>
                      </form>
                    </div>
                    <p className="errorMessage" id="errorSubscribeEmail">
                      error div
                    </p>
                    <p className="tp-form-note p-0 mt-5 mb-30"></p>
                  </div>
                </div>
                {/* Coommon Footer start */}
                <CommonFooter />
                {/* Coommon Footer end */}

                <div className="col-xl-2 col-md-6">
                  <div className="tp-footer__widget  mb-20">
                    <h3 className="tp-footer__widget-title mb-10">
                      Contact Details
                    </h3>
                    {/* <p
                      style={{ color: "rgb(12,84,173)", marginBottom: "4px" }}
                      className="font-12"
                    >
                      Contact Numbers
                    </p> */}
                    <ul>
                      <li>
                        <a href="tel:8390905726" className="font-12">
                          <strong>Line 1:</strong> +91-(839)-090-5726
                        </a>
                      </li>
                      <li>
                        <a href="tel:7420965726" className="font-12">
                          <strong>Line 2:</strong> +91-(742)-096-5726
                        </a>
                      </li>
                      {/* <li>
                        <a href="tel:8390905726">
                          <strong>Consulting:</strong> +91-(839)-090-5726
                        </a>
                      </li>
                      <li>
                        <a href="tel:8173820346">
                          <strong>Sales:</strong> +1-(817) 382-0346
                        </a>
                      </li>

                      <li>
                        <a href="tel:02041291914">
                          <strong>Main Line:</strong> +91-(020)-4129-1914
                        </a>
                      </li> */}
                    </ul>
                    {/* <p
                      style={{
                        color: "rgb(12,84,173)",
                        marginBottom: "4px",
                      }}
                      className="font-12"
                    >
                      Emails
                    </p> */}
                    <ul translate="no">
                      <li>
                        <a
                          href="mailto:sales@metapercept.com"
                          className="font-12"
                        >
                          sales@metapercept.com
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:info@metapercept.com"
                          className="font-12"
                        >
                          info@metapercept.com
                        </a>
                      </li>
                      {/* <li>
                        <a href="mailto:training@metapercept.com">
                          training@metapercept.com
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6">
                  <div className="tp-footer__widget  mb-0 locationDiv">
                    <h3 className="tp-footer__widget-title mb-10">Offices</h3>

                    <div className="tp-footer-cta d-flex align-items-center  justify-content-start mb-10">
                      {/* <span className="call-icon">
                        <i
                          className="fa-solid fa-location-dot mr-20"
                          style={{ color: "rgb(12,84,173)", fontSize: "2rem" }}
                        ></i>
                      </span> */}
                      <span>
                        <span
                          className="d-block mb-0 font-12"
                          style={{
                            color: "rgb(119, 119, 119)",
                          }}
                        >
                          <div translate="no">
                            <strong>India:</strong> Pune, Maharashtra, India
                          </div>
                          <div translate="no">
                            <strong>USA:</strong> Arlington, Texas, USA
                          </div>
                        </span>
                      </span>
                    </div>
                    <div className="bs-footer__top-social  mb-10">
                      <SocialLinks />
                    </div>
                    {/* <div className="tp-footer__widget pe-xl-0 pe-md-5 mb-0 subscribeDiv">
                      <h3 className="tp-footer__widget-title mb-15">
                        Subscribe Now
                      </h3>

                      <div className="tp-footer-from p-relative">
                        <form
                          method="post"
                          action="https://cfed3d59.sibforms.com/serve/MUIFAAQuk_u9WnIQCnfRSQRDr6tsGW02CFsAaqR-YpfsGA1BPLNNRbGXRv0x9e4KlZsFmKI5FoLlPU1hHvmAdB8-T_blKEXpJ3tSaWPa-44duJsbdTcYQtXXO3jnTgLW_wn2Yd6_0vXAr9N-KCqb8mOwh53AaLspAPoA-xVKkJO3oTSXe4rS678QVt87n2qp6r-VxWNFuDHGvG2X"
                          onSubmit={isFormValid}
                        >
                          <span>
                            <i
                              className="fas fa-envelope-open"
                              style={{ color: "rgb(50, 77, 160)" }}
                            ></i>
                          </span>
                          <input
                            type="email"
                            placeholder="Enter your email"
                            id="EMAIL"
                            name="EMAIL"
                            autoComplete="off"
                            required
                            data-required="true"
                            onBlur={SubscribeEmailValidation}
                            onFocus={() => clearError("errorSubscribeEmail")}
                          />
                          <button type="submit" aria-label="subscribe">
                            <i className="fas fa-paper-plane"></i>
                          </button>
                        </form>
                      </div>
                      <p className="errorMessage" id="errorSubscribeEmail">
                        error div
                      </p>
                      <p className="tp-form-note p-0 mt-5 mb-30"></p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* footer copy right start */}
            <FooterCopyRight />
            {/* footer copy right end */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
