import useSticky from "@/hooks/use-sticky";
import Sidebar from "@/src/layout/headers/sidebar-new";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavMenu from "./nav-menu-new";
import Image from "next/image";
import { useRouter } from "next/router";
import GoogleLangPicker from "./google-lang-picker";
import GoogleLangPickerWithFlag from "./google-lang-picker-with-flag";
import data from "../../../data.json"
import Search from "@/src/components/Search";
const Header = ({ style_home_one }) => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);
  // const [reRender, setReRender] = useState(true);
  const { isFallback, events } = useRouter();

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: "true",
        includedLanguages: "en,es,de,fr",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };
  // useEffect(() => {
  //   // ====================google translate=================
  //   const id = "google-translate-script";

  //   const addScript = () => {
  //     const s = document.createElement("script");
  //     s.setAttribute(
  //       "src",
  //       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //     );
  //     s.setAttribute("id", id);
  //     const q = document.getElementById(id);
  //     if (!q) {
  //       document.body.appendChild(s);
  //       window.googleTranslateElementInit = googleTranslateElementInit;
  //     }
  //   };

  //   const removeScript = () => {
  //     const q = document.getElementById(id);
  //     if (q) q.remove();
  //     const w = document.getElementById("google_translate_element");
  //     if (w) w.innerHTML = "";
  //   };

  //   isFallback || addScript();

  //   events.on("routeChangeStart", removeScript);
  //   events.on("routeChangeComplete", addScript);

  //   return () => {
  //     events.off("routeChangeStart", removeScript);
  //     events.off("routeChangeComplete", addScript);
  //   };
  //   // ====================google translate=================
  // }, []);
  return (
    <>
      <style jsx global>
        {`
          .header-logo {
            width: 200px;
            height: auto;
          }
          @media (max-width: 425px) {
            .header-logo {
              width: 150px;
              height: auto;
            }
            .tp-header__1-main {
              padding: 20px 0;
            }
          }
        `}
      </style>
      <header className="HideHeaderFooter">
        <div
          className={`${
            style_home_one ? "" : "tp-header__1 theme-bg p-relative"
          }`}
        >
          <div
            id="header-sticky"
            className={`tp-header__1-main header-border-button pl-105 pr-105  ${
              sticky ? "header-sticky" : ""
            }`}
            // style={{height:'112px'}}
          >
            <div className="container-fluid p-relative">
              <div id="google_translate_element" className="d-none"></div>
              <div className="mega-menu-wrapper">
                <div className="row align-items-center">
                  {/* <div className="col-xxl-3 col-xl-3 col-6"> */}
                  <div className="col-xxl-3 col-xl-2 col-6">
                    <div className="logo border-right">
                      <Link href="/">
                        {/* <Image
                          width={200}
                          height={47}
                          // style={{ height: "auto" }}
                          className="header-logo"
                          // src="/assets/img/header/Metapercept_Cube_logo2_48.svg"
                          src="/assets/img/footer/Metapercept_footer_logo2.svg"
                          alt="logo"
                        /> */}
                        <img
                          className="header-logo"
                          // src="/assets/img/header/Metapercept_Cube_logo2_48.svg"
                          src="/assets/img/footer/Metapercept_footer_logo2.svg"
                          alt="metapercept logo"
                        />
                      </Link>
                    </div>
                  </div>
                  {/* <div className="col-xxl-6 col-xl-6 d-none d-xl-block"> */}
                  <div className="col-xxl-7 col-xl-8 d-none d-xl-flex justify-content-center">
                    <div className="main-menu p-relative">
                      <nav id="mobile-menu">
                        <NavMenu />
                        {/* <NavMenu
                          setReRender={setReRender}
                          reRender={reRender}
                        /> */}
                      </nav>
              
                    </div>
                  </div>
                
                  <div className="col-xxl-2 col-xl-2 col-md-6 col-6">
                    {/* <div className="col-xxl-4 col-xl-3 d-xl-block col-md-6 col-6" style={{display:'block !important'}}> */}
                    <div className="tp-header__1-right d-flex justify-content-end align-items-center">
                      {/* <div className="header-mail-info  ">
                        <a
                          href="mailto:info@metapercept.com"
                          style={{
                            textTransform: "lowercase",
                            fontSize: "18px",
                          }}
                        >
                          info@metapercept.com
                        </a>
                      </div> */}
                      {/* <GoogleLangPicker classes="d-none d-xl-block" /> */}
                      <GoogleLangPickerWithFlag classes="d-none d-xl-block" />

                      <div className="tp-header-search-nav d-flex justify-content-end d-xl-none">
                        <div
                          className="tp-header-nav"
                          onClick={() => setIsActive(true)}
                        >
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Header;
