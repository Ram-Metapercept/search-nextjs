import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const groupImages = [
  "/assets/img/employee-group-photos/1.jpg",
  "/assets/img/employee-group-photos/2.jpg",
  "/assets/img/employee-group-photos/3.jpg",
  "/assets/img/employee-group-photos/4.jpg",
  "/assets/img/employee-group-photos/5.jpg",
  "/assets/img/employee-group-photos/6.jpg",
  "/assets/img/employee-group-photos/7.jpg",
];

function JoinUs({ newRecentJobCategory }) {
  const settings = {
    // dots: true,
    arrows: true,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <style>
        {`
        .joinUsImage{
          border-radius: 8px;
        }
          .slick-slider {
            margin:0 20px;
          }
          .slick-prev {
            left: -60px;
          }
          .slick-next {
            right: -40px;
          }
          .slick-next:before,
          .slick-prev:before {
            color: #032b5f ;
          }
         
          @media (min-width: 767px) {
            .slick-next:before,
          .slick-prev:before {
            font-size: 40px;                                                           
          }
          
          }
          @media (max-width: 767px) {
            .slick-prev {
            left: -25px;
          }
          .slick-next {
            right: -25px;
          }
          }

          @media (max-width: 425px) {
            .slick-prev {
            left: -25px;
          }
          .slick-next {
            right: -25px;
          }
          }
        `}
      </style>
      <div className="pt-25 pb-25  joinUs">
        <div className="container">
          <div className="row mb-25">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-10">
                    Life at metapercept
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="cardDiv">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <Slider {...settings}>
                  {groupImages.map((image, i) => (
                    <div
                      key={i}
                      className="tp-sv-details-serive-left wow tpfadeUp d-flex justify-content-center "
                    >
                      <img
                        src={image}
                        alt="employees"
                        className="joinUsImage"
                        style={{
                          width: "100%",
                          height: "auto",
                          aspectRatio: "4/3",
                        }}
                      />
                    </div>
                  ))}
                  {/* <div className="tp-sv-details-serive-left wow tpfadeUp d-flex justify-content-center ">
                    <img
                      src="/img/lifeatmeta.png"
                      alt="solutions"
                      className="serviceFlowImg"
                      style={{
                        width: "min(100%, 600px)",
                        height: "auto",
                        // aspectRatio: "16/9",
                      }}
                    />
                  </div> */}
                </Slider>
              </div>
              {/* <div className="col-lg-6 pb-4 pb-lg-0 d-flex align-items-center">
                <div
                  className="tp-sv-details-serive-left wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  <div className="section-title-wraper ">
                    <div className="tp-section">
                      <h1 className=" mb-25 ">Life at metapercept</h1>
                      <p
                        className="mb-0 pb-25"
                        style={{ textAlign: "justify" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquid nulla voluptatum ab quasi modi, pariatur
                        recusandae esse vel expedita mollitia officia labore?
                        Fuga, atque velit. Esse beatae tempora quod sint!
                        adipisicing elit. Aliquid nulla voluptatum ab quasi
                        modi, pariatur recusandae esse vel expedita mollitia
                        officia labore? Fuga, atque velit. Esse beatae tempora
                        quod sint!
                      </p>
                      <div className="loadMoreDiv pt-istop-btn-wrapper   ">
                        <Link
                          to={`/career/${newRecentJobCategory}`}
                          className="tp-common-btn text-center "
                        >
                          <span className="text-center button-space">
                            <span style={{ color: "white" }}>Apply now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinUs;

//  background-image: linear-gradient(
//   to right,
//   #ff9844,
//   #ffa546,
//   #ffb349,
//   #ffc04e,
//   #ffcd55
// );
