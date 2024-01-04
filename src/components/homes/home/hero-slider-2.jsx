import React from "react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from "../../custom/custom-button";

const slider_content = [
  {
    id: 1,
    bg_img: "/assets/img/carousel/img3.svg",
    bg_color: "#ffe8d9",
    sliderImg: "/assets/img/carousel/image7.png",
    title:
      "Simplify information distribution with effective information architecture & DITA-XML",
    name: "DITA-XML",
    category:
      "Offering end-to-end information architecture, DITA-XML, and content strategy services to improve the ROI of technical publication systems.",
  },
  {
    id: 2,
    bg_img: "/assets/img/carousel/img4.svg",
    bg_color: "#d3fac5",
    sliderImg: "/assets/img/carousel/image8.png",
    title: "Develop technical documents to enhance product design",
    name: "Product Design",
    category:
      "Technical manual writing services and solutions to improve the customer experience, reduce support calls, and increase return on investment.",
  },
  {
    id: 3,
    bg_img: "/assets/img/carousel/img1.svg",
    bg_color: "#fee8dd",
    sliderImg: "/assets/img/carousel/image5.png",
    title: "Optimized documentation lifecycle with DocOps",
    name: "DevOps",
    category:
      "Streamlined technical publication process using CD/CI and various DocOps best practices for SaaS products with automated frameworks and workflows.",
  },
  {
    id: 4,
    bg_img: "/assets/img/carousel/img2.svg",
    bg_color: "#e4f0f8",
    sliderImg: "/assets/img/carousel/image6.png",
    title:
      "Specialize in developing software applications that drive digital transformation.",
    name: "Software Application",
    category:
      "Expertise in designing, building, integrating, and supporting enterprise-level component content management systems powered with intuitive web applications.",
  },
];

const HeroSlider = () => {
  return (
    <>
      <style jsx>
        {`
          .ptg-slider-item::after {
            background-color: rgba(0, 0, 0, 0.1);
          }

          .carouselInfo .title2 {
            font-size: 40px;
            font-weight: 400;
            margin-bottom: 20px;
            //text-align: center;
            color: var(--tp-theme-vogue) !important;
          }

          .carouselInfo .justcont {
            font-size: 18px;
            font-weight: 400;
            //text-align: justify;
          }

          .imgHide {
            margin: auto;
          }

          .carouselBackTop {
            position: absolute;
            right: 20px;
            top: 20px;
            max-width: 250px;
            z-index: 90;
          }
          .carouselBackBottom {
            position: absolute;
            left: 20px;
            bottom: 20px;
            max-width: 250px;
            z-index: 90;
          }

          @media (max-width: 1500px) {
            .carouselBackTop,
            .carouselBackBottom {
              max-width: 150px;
            }
          }

          @media (max-width: 992px) {
            .imgHide {
              display: none !important;
            }
            .carouselBackTop,
            .carouselBackBottom {
              max-width: 130px;
            }
          }
          @media (max-width: 767px) {
            .carouselInfo .title2 {
              font-size: 40px;
            }
            .carouselInfo .justcont {
              font-size: 18px;
            }
            .carouselBackTop,
            .carouselBackBottom {
              display: none;
            }
          }

          @media (max-width: 425px) {
            .carouselInfo .title2 {
              font-size: 25px;
            }
            .carouselInfo .justcont {
              font-size: 18px;
            }
          }
        `}
      </style>

      <div className="tp-ptg-slider p-relative">
        <Swiper
          slidesPerView={1}
          loop={true}
          className="swiper-container ptg-slider-active"
          effect="slide"
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".ptg-sldider-dot",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} carouselBullets" style="background-color:gray">
               <button style="color:gray !important">${index < 9 ? "0" : ""}${
                index + 1
              }</button>
             </span>`;
            },
          }}
        >
          {slider_content.map((item, i) => (
            <SwiperSlide
              key={i}
              className="  ptg-slider-height d-flex align-items-center p-relative carouselBackground"
              style={{
                backgroundImage: `url(${item.sliderImg}), linear-gradient(${item.bg_color},${item.bg_color})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
              }}
            >
              <div className="container" style={{ zIndex: "100" }}>
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-xs-12 ">
                    <div
                      className="d-flex flex-column justify-content-center align-content-center carouselInfo"
                      style={{ height: "100%" }}
                    >
                      <div data-wow-delay="0.3s" className=" wow fadeInUp ">
                        <h2 className="title2 swiper-no-swiping">
                          {item.title}
                        </h2>
                      </div>
                      <div
                        data-wow-delay="0.5s"
                        className="layer-2 wow fadeInUp"
                      >
                        <p
                          className="justcont swiper-no-swiping"
                          style={{
                            color: "var(--tp-grey-3)",
                            fontWeight: "500",
                            marginBottom: "30px",
                          }}
                        >
                          {item.category}
                        </p>
                      </div>

                      <CustomButton
                        text={"Get In Touch"}
                        url={"/contact"}
                        backgroundColor="orange"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 imgHide">
                    <div
                      data-wow-delay="0.5s"
                      className="slide-images-inner wow fadeInUp"
                      style={{ visibility: "visible", animationDelay: "0.5s" }}
                    >
                      <div className="slide-images">
                        <img
                          alt={item.name}
                          style={{
                            minHeight: "450px",
                            maxHeight: "500px",
                            width: "100%",
                            aspectRatio: "16/9",
                          }}
                          src={item.bg_img}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="ptg-sldider-dot" style={{ bottom: 0 }}></div>
      </div>
    </>
  );
};

export default HeroSlider;
