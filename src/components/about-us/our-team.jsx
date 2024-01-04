import React from "react";
import CustomButton from "../custom/custom-button";
import SpinningLogo from "@/src/common/spinningLogo";

const about_content_2 = {
  img: "/assets/img/about-us/ab-about-img.jpg",
  title: (
    <>Embracing dynamic growth for our organization, clients, and employees.</>
  ),
  slug:"embracing-dynamic-growth-for-our-organization-clients-and-employees",
  description: (
    <>
      Metapercept is a trusted consulting and implementation service provider,
      excelling in diverse fields, including technical publication, software
      development, and professional training services. Dedicated to elevating
      content authoring, styling, management, and curation processes, we excel
      in delivering end-to-end, budget-friendly DITA-XML solutions tailored to
      organization-specific goals.
      <br />
      <br />
      Thriving on the latest technologies, we continually refine our proficiency
      in information architecture, structured authoring, content strategy,
      software development, and integration techniques. Our domain expertise
      extends beyond IT and Software, encompassing automotive, aerospace,
      finance, healthcare services, IoT, artificial intelligence, and machine
      learning.
    </>
  ),
};
const { img, title, description,slug } = about_content_2;

const OurTeam = () => {
  return (
    <>
      <style>
        {`
        @media (min-width:768px){
          .ourTeamTitle{
            font-size:40px;
          }
        }
       
        .about-page-about-img{
          width: 90%;
        }
        .ourTeamImg{
          width:100%;
        }

        @media only screen and (max-width:1200px) and (min-width:992px){
          .about-page-about-img{
             width: 50%;
          }
          .ourTeamContainer{
            display: flex;
            justify-content: center;
          }
        }
        @media only screen and (max-width:767px) {
          .about-page-about-img{
          width: 100%;
        }
        `}
      </style>

      <div
        className="about-page-about pt-25 pb-25"
        style={{ overflow: "hidden" }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-xl-6 wow tpfadeUp ourTeamContainer">
              <div className="about-page-about-img mb-30 mb-xl-0 p-relative">
                <img className="ourTeamImg" src={img} alt={"about us"} />

                <SpinningLogo />
              </div>
            </div>
            <div className="col-xl-6 wow tpfadeUp">
              <div className="about-page-ab">
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <h2 className="tp-section__title mb-30 text-start ourTeamTitle" id={slug}>
                      {title}
                    </h2>
                    <p style={{ marginBottom: "10px" }}>{description}</p>
                  </div>
                </div>

                <CustomButton
                  url="/aboutus/company"
                  classes="about-page-ab-btn-wrapper  wow tpfadeUp"
                  text="About Company"
                  backgroundColor="red"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
