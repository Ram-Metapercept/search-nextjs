import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from "react-avatar";

const testimonial_data_home_two = [
  {
    id: 1,
    img: "/assets/img/testimonial/testi-avata-1.png",
    name: "Shakti",
    title: "Founder, Romdon Co.",
    rating: ["fas", "fas", "fas", "fas", "fal"],

    des: (
      <>
        "It was a good training session with Metapercept for API documentation.
        Amit explained thoroughly the concepts involved in APIs and gave us a
        holistic approach to the whole thing. I enjoyed it and it resolved my
        curiosity about API as it's the need of the hour for me in my job. I
        would say I met the right training institute at the right time. I would
        be interested if there are any advanced courses in API too. Everything
        was fine and useful to me. Thanks to Amit!"
      </>
    ),
  },
  {
    id: 2,
    img: "/assets/img/testimonial/testi-avata-4.png",
    name: "Kishan Panchal",
    title: "Leader, Fontend Co",
    rating: ["fas", "fas", "fas", "fal", "fal"],
    des: (
      <>
        “It was a nice learning experience during the FrameMaker training
        session with team Metapercept. The course was presented in an
        enthusiastic way by Amit and it was easy to learn new things which I
        have never worked on. Excellent delivery and knowledge of the trainer
        Amit Siddartha and the fact that he explains the topics in such a clear
        manner not only demonstrates his deep understanding of the topic but his
        teaching abilities. I’d highly recommend a colleague and/or someone else
        in the industry for training on framemaker by Metapercept.”
      </>
    ),
  },
  {
    id: 3,
    img: "/assets/img/testimonial/testi-avata-3.png",
    name: "Sagar Dubewar",
    title: "Author, themepure Co.",
    rating: ["fas", "fas", "fas", "fas", "fas"],

    des: (
      <>
        “I am glad I joined the DITA-Basic training at Metapercept. The course
        played a pivotal role when it comes to my understanding of DITA
        methodology. Trainers' guidance and ability to explain the concepts
        helped to give a crisp and clear concept understanding about basic DITA
        concepts. As the proverb says, Practice makes a man perfect, DITA
        practice sessions, and the guided exercises help to get hands better on
        the methodology. If done in the right way, the assignments can do a
        miracle for your Technical Writing career. Thank you, Metapercept for
        DITA training.”
      </>
    ),
  },

  {
    id: 4,
    img: "/assets/img/testimonial/testi-avata-1.png",
    name: "Kavita Samudrala",
    title: "Founder, Romdon Co.",
    rating: ["fas", "fas", "fas", "fas", "fal"],
    des: (
      <>
        “Information Architecture and SEO training provided by Metapercept has
        been an experience to develop a new perspective and insights on
        implementing a successful information development and management system.
        The trainer, Amit Siddhartha provided a fresh approach and planning
        methods to implement SEO using Information Architecture in our
        organization.”
      </>
    ),
  },
  {
    id: 5,
    img: "/assets/img/testimonial/testi-avata-3.png",
    name: "Apurva Bahadur",
    title: "Author, themepure Co.",
    rating: ["fas", "fas", "fas", "fas", "fal"],
    des: (
      <>
        “I got to know Amit Siddhartha from Metapercept when I signed myself for
        DITA-XML training in the year 2016. I regard him as Pune's leading
        authority on XML-DITA. He is a patient teacher and has in-depth
        knowledge of the subject, both in the theoretical and practical aspects.
        His training methodology and consultancy is highly recommended.”
      </>
    ),
  },
  {
    id: 6,
    img: "/assets/img/testimonial/testi-avata-4.png",
    name: "Anirudh Kapur",
    title: "Leader, Fontend Co",
    rating: ["fas", "fas", "fas", "fas", "fas"],
    des: (
      <>
        “I took API documentation training from Metapercept Technology Services
        in the month of June 2020.This was my 2nd training course from
        Metapercept, and this time I was lucky enough to get it from the CEO
        himself, Mr. Amit Siddhartha. I believe I was lucky that I got
        Metapercept at the right time in my life as due to Metrapercept training
        I was able to get a job opportunity with a better organization. They
        also keep their ex-students notified about their webinars, any upcoming
        training on social media platforms, etc.”
      </>
    ),
  },
];

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

const Testimonial = () => {
  return (
    <>
      <style jsx global>
        {`
          .it-testimonial-box {
            //text-align: justify;
            padding: 20px;
          }
          .it-testimonial-box__review {
            font-size: 14px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 7;
          }
          @media (min-width: 992px) {
            .it-testimonial-box {
              min-height: 240px;
            }
          }
          @media (max-width: 425px) {
            .it-testimonial-box__review {
              font-size: 14px;
              -webkit-line-clamp: 10;
            }
            .it-testimonial-box {
              // text-align: justify;
              padding: 20px 30px;
            }
          }

          .it-testimonial-box:before {
            content: "";
            position: absolute;
            top: 2px;
            left: 2px;
            bottom: 2px;
            right: 2px;
            background-color: var(--tp-common-white);
            display: inline-block;
            z-index: -1;
            border-radius: 8px;
          }
          .it-testimonial-box:after {
            content: "";
            position: absolute;
            top: 100%;
            left: 90px;
            width: 46px;
            height: 45px;
            border: 2px solid #58559d;
            background-color: white;
            z-index: -5;
            transform: rotate(53deg) translateY(-47px);
          }
        `}
      </style>
      <div
        className="tp-it-testimonial fix pb-30 "
        style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}
      >
        <div
          className="it-testi-wraper  pt-25 pb-125"
          style={{ backgroundColor: "white" }}
        >
          <div className="container">
            <div className="row ">
              <div className="col-12 col-md-8">
                <div className="section-title-wraper">
                  <div className="tp-section">
                    {/* -----------------------------new----------------------- */}

                    <h2 className="tp-section__title mb-40">
                      What the participants say
                    </h2>

                    {/* -----------------------------new----------------------- */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-md-block">
                <div
                  className="it-testi-navigation text-end p-relative"
                  style={{ "--tp-theme-orange": "#d76a12" }}
                >
                  <div className="it-testi-button-prev">
                    <i className="fal fa-long-arrow-left"></i>
                  </div>
                  <div className="it-testi-button-next">
                    <i className="fal fa-long-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <Swiper
            {...setting}
            initialSlide="1"
            loop="true"
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className=" swiper-container"
          >
            {testimonial_data_home_two.map((item, i) => (
              <SwiperSlide key={i} className="it-testimonial swiper-slide">
                <div
                  className="it-testimonial-box p-relative"
                  style={{
                    backgroundImage: "linear-gradient(-90deg,#fe7a8f,#324da0)",
                  }}
                >
                  <div
                    className="it-testimonial-box__ratting"
                    style={{ "--tp-theme-orange": "#f47f20" }}
                  >
                    {item.rating.map((rating, i) => {
                      return <i key={i} className={`${rating} fa-star`}></i>;
                    })}
                  </div>
                  <div className="it-testimonial-box__review">{item.des}</div>
                  <div className="it-testimonial-bg">
                    <img
                      src="/assets/img/testimonial/testi-icon-bg.png"
                      alt="testimonial"
                    />
                  </div>
                </div>
                <div className="tp-testimonial-reviewer d-flex align-items-center ml-40">
                  <div className="tesi-reviewer-avata mr-15">
                    <Avatar
                      name={item.name.split(" ")[0]}
                      size="60"
                      round={true}
                      fontSize="20px"
                    />
                  </div>
                  <div className="it-tesi-reviewer-name">
                    <h4 className="mb-5 vogue-text-color">{item.name}</h4>
                    <span>{item.title}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
