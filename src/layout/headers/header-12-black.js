import useSticky from "@/hooks/use-sticky";
import Sidebar from "@/src/layout/headers/sidebar-new";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavMenu from "./nav-menu-new-black";
import GoogleLangPickerWithFlag from "./google-lang-picker-with-flag";
import Search from "@/src/components/Search";
import data from "../../../data.json";
import Head from "next/head";


const Header = ({ style_home_one }) => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);
const [open,setOpen] = useState(false)

const closeModal = () => {
  console.log("in close modal");
  setOpen(false)
  document.removeEventListener("click", closeModal);
};
const handleClick = (e) => {

  // if (activeFilters.columns) {
  //   closeModal();
  //   return;
  // }

  console.log("in handle click"); 
  e.stopPropagation();
  setOpen(true)
  window.addEventListener("click", ()=>{
    console.log("added click")
    closeModal
  });
};

 
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
      
.modal-backdrop{
  z-index:0;
}
.search-bar-centering{
  display:flex;

  align-items: center;
  margin:10px
}
          
        `}
      </style>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />


      </Head>
      <header className="HideHeaderFooter">
        <div
          className={` theme-bg-black 
          ${!sticky ? "is-header-not-sticky" : ""} 
          ${style_home_one ? "p-absolute onlyHome" : "p-relative"}`}
        >
          <div
            id="header-sticky"
            className={`tp-header__1-main header-border-button pl-105 pr-105  ${sticky ? "header-sticky" : ""
              }`}
          >
            <div className="container-fluid p-relative">
              <div id="google_translate_element" className="d-none"></div>
              <div className="mega-menu-wrapper">
                <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-2 col-6">
                    <div className="logo border-right">
                      <Link href="/">
                        <img
                          className="header-logo"
                          src="/assets/img/footer/Metapercept_footer_logo2-black.svg"
                          alt="metapercept logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-7 col-xl-8 d-none d-xl-flex justify-content-center">
                    <div className="main-menu p-relative">
                      <nav id="mobile-menu">
                        <NavMenu />
                      </nav>

                    <div
                      className="btn"  onClick={handleClick}>
                      <i className="material-icons" >search</i>
                    </div>
 
                  </div>
                  <div className="col-xxl-2 col-xl-2 col-md-6 col-6">
                    <div className="tp-header__1-right d-flex justify-content-end align-items-center">
                      <GoogleLangPickerWithFlag
                        classes="d-none d-xl-block"
                        sticky={sticky}
                      />

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
        </div>
      </header>

      <Sidebar isActive={isActive} setIsActive={setIsActive} />



      {/* <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" > */}
      {open && (
     <div className="modal fade show" id="searchModal" style={{display:'block'}} onClick={(e) => e.nativeEvent.stopImmediatePropagation()}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <div className="search-bar-centering">
                  <Search data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
                      {/* </div> */}
    </>
  );
};

export default Header;
