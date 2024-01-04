import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const brands_data = [
  {
    img: "/assets/img/home/companies/ADB-Safegatelogo.jpg",
    tpfade: "tpfadeRight",
    name: "ADB-Safegate",
    delay: ".4s",
  },
  {
    img: "/assets/img/home/companies/airtightpng.png",
    tpfade: "tpfadeRight",
    name: "airtight",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/algolia.png",
    tpfade: "tpfadeRight",
    name: "algolia",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/altova_logo.png",
    tpfade: "tpfadeLeft",
    name: "altova",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/analogdevices.png",
    tpfade: "tpfadeLeft",
    name: "analog devices",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/avaya.png",
    tpfade: "tpfadeRight",
    name: "avaya",
    delay: ".4s",
  },
  {
    img: "/assets/img/home/companies/barsys.png",
    tpfade: "tpfadeRight",
    name: "barsys",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/cadence.png",
    tpfade: "tpfadeRight",
    name: "cadence",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/clodura.png",
    tpfade: "tpfadeLeft",
    name: "clodura",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/coreecredit.png",
    tpfade: "tpfadeLeft",
    name: "core credit",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/corum.png",
    tpfade: "tpfadeRight",
    name: "corum",
    delay: ".4s",
  },
  {
    img: "/assets/img/home/companies/Dakotalogo.png",
    tpfade: "tpfadeRight",
    name: "dakota",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/drobo.png",
    tpfade: "tpfadeRight",
    name: "drobo",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/hitachi.png",
    tpfade: "tpfadeLeft",
    name: "hitachi",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/imagination.png",
    tpfade: "tpfadeLeft",
    name: "imagination",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/infosys.png",
    tpfade: "tpfadeRight",
    name: "infosys",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/lt.png",
    tpfade: "tpfadeRight",
    name: "lt",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/mojo.png",
    tpfade: "tpfadeLeft",
    name: "mojo",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/servicemax.png",
    tpfade: "tpfadeLeft",
    name: "service max",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/stryker.png",
    tpfade: "tpfadeRight",
    name: "stryker",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/synopsys.png",
    tpfade: "tpfadeRight",
    name: "synopsys",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/TechMlogo.jpg",
    tpfade: "tpfadeLeft",
    name: "tech mahindra",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/waikato.png",
    tpfade: "tpfadeLeft",
    name: "waikato",
    delay: "",
  },
  {
    img: "/assets/img/home/companies/avaya.png",
    tpfade: "tpfadeRight",
    name: "avaya",
    delay: "",
  },
];
// const brands_data = [
//   {
//     img: "/assets/img/home/certificates/nass.webp",
//     tpfade: "tpfadeRight",
//     name: "ADB-Safegate",
//     delay: ".4s",
//   },
//   {
//     img: "/assets/img/home/certificates/ama.webp",
//     tpfade: "tpfadeRight",
//     name: "airtight",
//     delay: "",
//   },
//   {
//     img: "/assets/img/home/certificates/globe.webp",
//     tpfade: "tpfadeRight",
//     name: "algolia",
//     delay: "",
//   },
//   {
//     img: "/assets/img/home/certificates/intel.webp",
//     tpfade: "tpfadeLeft",
//     name: "altova",
//     delay: "",
//   },
//   {
//     img: "/assets/img/home/certificates/spa.webp",
//     tpfade: "tpfadeLeft",
//     name: "analog devices",
//     delay: "",
//   },
//   {
//     img: "/assets/img/home/certificates/mic.webp",
//     tpfade: "tpfadeRight",
//     name: "avaya",
//     delay: ".4s",
//   },
//   {
//     img: "/assets/img/home/certificates/nass.webp",
//     tpfade: "tpfadeRight",
//     name: "ADB-Safegate",
//     delay: ".4s",
//   },
//   {
//     img: "/assets/img/home/certificates/ama.webp",
//     tpfade: "tpfadeRight",
//     name: "airtight",
//     delay: "",
//   },
//   {
//     img: "/assets/img/home/certificates/globe.webp",
//     tpfade: "tpfadeRight",
//     name: "algolia",
//     delay: "",
//   },
//   {
//     img: "/assets/img/home/certificates/intel.webp",
//     tpfade: "tpfadeLeft",
//     name: "altova",
//     delay: "",
//   },
//   {
//     img: "/assets/img/home/certificates/spa.webp",
//     tpfade: "tpfadeLeft",
//     name: "analog devices",
//     delay: "",
//   },
//   {
//     img: "/assets/img/home/certificates/mic.webp",
//     tpfade: "tpfadeRight",
//     name: "avaya",
//     delay: ".4s",
//   },
// ];

// brands slider setting
const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};
const Brand = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div className="tp-bs-brand pt-30 pb-30 ">
        <div className="container">
          <div className="">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="tp-bs-brand me-lg-5">
                  <h3 className="tp-bs-brand__title wow tpfadeRight">
                    {/* Setting the Standard in Award-Winning */}
                    Trusted by Companies all over the world
                  </h3>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="tp-bs-brand-slider">
                  <Swiper
                    {...setting}
                    loop={isLoop}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    className="brand-slider-active swiper-container"
                    style={{
                      minHeight: "70px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {brands_data.map((item, i) => (
                      <SwiperSlide
                        key={i}
                        className={`tp-bs-brand-item wow ${item?.tpfade}`}
                        data-wow-delay={item?.delay}
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          style={{
                            width: "150px",
                            background: "white",
                            borderRadius: "8px",
                            padding: "2px",
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
