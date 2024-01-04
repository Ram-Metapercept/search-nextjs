import portfolio_data from "@/src/data/about-us/portfolio-data";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const setting = {
  //  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  centeredSlides: true,
  centeredSlidesBounds: true,
  pagination: {
    el: ".da-project-pagenation",
    clickable: true,
  },
  navigation: {
    nextEl: ".law-pf-button-next",
    prevEl: ".law-pf-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};
const PortfolioArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <style>
        {`
        .portfolioDesc h5{
            text-align: center;
            padding : 20px 0 10px;
            font-size :24px;
        }
        .portfolioDesc p{
            color: rgb(117, 124, 128);
            font-size: 16px;
            text-align: justify;
        }
        .portfolioDiv{
          position:relative;
        }
        .portfolioDiv:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background-repeat: no-repeat;
            background-color: inherit;
            background-blend-mode: multiply;
            width: 100%;
            background-position: left;
            background-size: cover;
            z-index: -1;
            opacity: .6;
        }
        .ha-portfolio__item{
          border-radius: 10px;
          overflow:hidden;
          background-color :white;
          backdrop-filter: blur(10px);
        }
        @media (min-width: 992px) and (max-width:1200px){
          .ha-portfolio__item{
            min-height:550px;
          }
        }
        @media (min-width: 768px) and (max-width:992px){
          .ha-portfolio__item{
            min-height:566px;
          }
        }
      `}
      </style>

      <div className="pt-50 pb-50 portfolioDiv">
        <div className="container">
          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-40">portfolio</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="ha-portfolio ha-portfolio-slider fix">
            <Swiper
              {...setting}
              loop={isLoop}
              // loop={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="swiper-container ha-portfolio-slider-active"
            >
              {portfolio_data.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="ha-portfolio__item p-relative wow tpfadeUp"
                  data-wow-delay={item.delay}
                >
                  <div className="p-relative">
                    <div className="ha-portfolio__item-img w-img p-relative">
                      <img src={item.img} alt={item?.title} />
                    </div>
                    <div className="ha-portfolio__item-content">
                      <h3 className="ha-portfolio__item-content-title">
                        <Link href="/portfolio-details">{item.title}</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="portfolioDesc">
                    <h5>{item.title}</h5>
                    <p className="px-3">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioArea;
