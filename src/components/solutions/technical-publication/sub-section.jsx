import React, { useEffect } from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".it-testi-button-next",
    prevEl: ".it-testi-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};
function SubSection({ solution, headerHeight, theme = "" }) {
  function findParentDiv(element) {
    // Loop until we find a div or reach the top (body) of the DOM
    while (element.parentNode) {
      element = element.parentNode;
      if (element.classList.contains("subSectionInfoWrapper")) {
        return element;
      }
    }

    // If no parent div is found, return null
    return null;
  }
  const toggleDesc = (e) => {
    const button = e.target;

    var parentDiv = findParentDiv(button);

    if (parentDiv) {
      console.log("Parent div id:", parentDiv.id);
    } else {
      console.log("Parent div not found.");
    }

    // const sectionDesc = button.nextElementSibling;
    const sectionDesc = parentDiv.querySelector(".sectionDesc");
    // console.log(sectionDesc, button.nextElementSibling);
    if (sectionDesc.style.display == "block") {
      button.innerText = "read more";
      sectionDesc.style.display = "none";
    } else {
      button.innerText = "show less";

      sectionDesc.style.display = "block";
    }
  };
  // useEffect(() => {
  //   // Find the maximum height among all child elements
  //   function setEqualHeight() {
  //     console.log("fgdkfgjhfgkljh");
  //     var parents = document.querySelectorAll(".swiper-wrapper");

  //     parents.forEach(function (parent) {
  //       console.log(parent);
  //       var children = parent.querySelectorAll(".subSectionInfoWrapper");
  //       var maxHeight = 0;

  //       children.forEach(function (child) {
  //         maxHeight = Math.max(maxHeight, child.offsetHeight);
  //       });

  //       // Set the height of all child elements to the maximum height
  //       children.forEach(function (child) {
  //         child.style.minHeight = maxHeight + "px";
  //       });
  //     });
  //   }
  //   setEqualHeight();
  // }, []);
  return (
    <>
      <style>
        {`
          .tp-section p {
            color: black;
          }
          .theme-bg-black .tp-section p {
            color: white;
          }
          .subSectionInfoWrapper {
            background: linear-gradient(
              0deg,
              transparent 5%,
              rgba(255, 113, 0, 1) 95%
            );
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #bf5500;
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 20px !important;
            
          }
          .swiper-button-next{
            right: 0 !important;
            color: black;
          }
          .swiper-button-prev {
            left: 0 !important;
            color:black;
          }
          .theme-bg-black .swiper-button-next,
          .theme-bg-black .swiper-button-prev {        
            color:white;
          }
          .section-title-wraper li p{
            display: inline-block;
            width: 90%;
          }
          .section-title-wraper li::marker{
            position: relative !important;
            top:0;
          }
          .sectionDesc{
            display: none
          }
          .toggleButton{
           // position: absolute;
           // bottom:10px;
           // background-color:#c9c9ce;
            padding:5px;
            border-radius:5px;
            color: black;
            font-weight:bold;
            margin-left : 15px;
          }
          .theme-bg-black .toggleButton, .theme-bg-black .toggleButtonI{
            color:darkgray;
          }
        `}
      </style>
      <div
        id={solution.idName}
        className={`tp-bs-service pt-25 pb-25  ${theme}`}
        style={{
          "--tp-heading-primary": "var(--tp-theme-vogue)",
          scrollMarginBlockStart: headerHeight,
        }}
      >
        <div className="container">
          <div className="row  ">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-10">{solution.name}</h2>
                  <p>{solution.desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-relative">
            <Swiper
              {...setting}
              initialSlide="1"
              loop="true"
              modules={[Navigation, Autoplay, Pagination]}
              // pagination={{ clickable: true }}
              navigation
              // autoplay={{
              //   delay: 5000,
              //   disableOnInteraction: false,
              // }}
              className=" swiper-container position-relative pl-20 pr-20"
            >
              {solution.subTypesInfo.map((item, i) => (
                <SwiperSlide key={i} className="it-testimonial swiper-slide">
                  <div
                    className="subSectionInfoWrapper tp-section"
                    style={{ minHeight: "330px" }}
                  >
                    <div className="row ">
                      <div className="col-xl-5 col-lg-12 mb-20 mb-xl-0">
                        <div className="tp-sv-details-serive-left wow tpfadeUp d-flex justify-content-center">
                          <img
                            src={item.img}
                            alt="solutions"
                            className="serviceFlowImg"
                            style={{
                              width: "min(100%, 600px)",
                              height: "auto",
                              aspectRatio: "4/3",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-12">
                        <div
                          className="tp-sv-details-serive-left wow tpfadeUp"
                          data-wow-delay=".3s"
                        >
                          <div className="section-title-wraper">
                            <div className="">
                              <h4 className=" mb-25 ">{item.name}</h4>
                              <ul>
                                {item.list.map((data, i) => (
                                  <li
                                    key={i}
                                    style={{
                                      listStyleType: "disc",
                                      listStylePosition: "inside",
                                    }}
                                  >
                                    <p className="mb-0">{data}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <button
                          className="toggleButton mt-10"
                          onClick={toggleDesc}
                        >
                          read more
                        </button>
                        <i className="fa-solid fa-arrow-right toggleButtonI"></i>
                      </div>
                    </div>
                    <div>
                      <p className="mt-10 mb-0 sectionDesc">{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubSection;
