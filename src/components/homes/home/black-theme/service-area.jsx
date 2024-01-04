import Link from "next/link";
import React from "react";
import { training_web_Url } from "@/src/data/external-website";
import CustomButton from "@/src/components/custom/custom-button";
const service_data = [
  {
    id: 1,
    slug:"softwaredevelopment",
    img: "/assets/img/home/services/lineIcon/web-designing.png",
    title: "Software Development",
    url: "/services/softwaredevelopment",
    targetTo: "",
    des: (
      <>
        Empower your business with top-notch software development services
        tailored to your needs.
      </>
    ),
  },
  {
    id: 2,
    slug:"technicalwriting",
    img: "/assets/img/home/services/lineIcon/letter.png",
    title: "Technical Writing",
    url: "/services/technicalwriting",
    targetTo: "",
    des: (
      <>
        Optimize your technical writing workflow by implementing structured
        authoring techniques and efficient content management solutions to
        elevate your documentation process.
      </>
    ),
  },
  {
    id: 3,
   slug:"TrainingAndCertification",
    img: "/assets/img/home/services/lineIcon/certificate.png",
    title: "Training & Certification",
    url: training_web_Url,
    targetTo: "_blank",
    des: (
      <>
        Join our industry-leading training program, having successfully trained
        over 500 professionals in DITA-XML, technical writing, and API
        documentation.
      </>
    ),
  },
];

const service_content = {
  title: "Service",
  main_title: "Our Services",
  we_do: "What we do",
  btn_text: "More Services",
};

const { title, main_title, we_do, btn_text } = service_content;

const ServiceArea = () => {
  return (
    <>
      <style jsx>
        {`
          .ca-service-wrapper:hover {
            border: 2px solid #f47f20;
          }
          .ca-service-wrapper .ca-service__item {
            border: none;
          }
          //.serviceInfo p {
          //  text-align: justify;
          //}
          .read-btn {
            color: var(--tp-heading-primary) !important;
          }
          .singleService {
            height: 100%;
            width: 90%;
            margin: auto;
            border-radius: 8px;
          }
          @media (min-width: 992px) and (max-width: 1200px) {
            .singleService {
              width: 100%;
            }
          }
        `}
      </style>

      <div
        className="ca-service-area theme-bg-black pt-25 pb-25"
        style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}
      >
        <div className="container">
          <div className="row align-content-center">
            <div className="col-md-8 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section">
                  <h2 className="tp-section__title mb-md-40 mb-20">{we_do}</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow tpfadeUp">
              <CustomButton
                url="/services"
                classes="ca-service-btn-wrapper float-md-end mb-25"
                text={btn_text}
                backgroundColor="orange"
              />
            </div>
          </div>

          <div className="serviceInfo tp-section">
            <p className="mb-0">
              Metapercept takes pride in being an expert in three core service
              domains:
            </p>
            <ul>
              <li style={{ listStyleType: "disc" }} className="ml-15">
                <p className="mb-0">Software Development</p>
              </li>
              <li style={{ listStyleType: "disc" }} className="ml-15">
                <p className="mb-0">Technical Writing</p>
              </li>
              <li style={{ listStyleType: "disc" }} className="ml-15">
                <p className="mb-0">Professional Training</p>
              </li>
            </ul>
            <p className="mt-20">
              Our diverse team comprises Frontend and Backend Software
              Developers, Information Architects, DocOps Specialists, Product
              Designers, and Technical Writers. We have expertise in niche
              technologies and frameworks such as Gatsby, Hugo, GitBook, and
              Docusaurus for developers' portals or Doc-as-Code and API
              documentation. We are one of the leading experts in DITA-XML and
              DocBook-based structured documentation practices and CCMSs to
              manage and deliver complex information structures.
            </p>
          </div>

          <div className="row">
            {service_data.map((item, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6 "
                style={{ marginBottom: "20px" }}
              >
                <Link href={item.url} target={item.targetTo}>
                  <div
                    className="ca-service-wrapper mb-30 wow tpfadeUp singleService"
                    data-wow-delay=".4s"
                  >
                    <div
                      className="ca-service__item  aos-init aos-animate p-0 text-center"
                      style={{
                        height: "100%",
                        borderRadius: "8px",
                        "--tp-theme-redical": "rgb(108,96,254)",
                      }}
                    >
                      <div className="law-servicce__item-img mb-20 ">
                        <img
                          className="sectionLogoImg"
                          src={item.img}
                          alt={item.title}
                        />
                      </div>
                      <h3 className="ca-service__item-title mb-20 " id={item.slug} >
                        {/* <Link href={item.url} target={item.targetTo}> */}
                        {item.title}
                        {/* </Link> */}
                      </h3>
                      <p className="mb-0" style={{ textAlign: "left" }}>
                        {item.des}
                      </p>

                      {/* <CustomButton
                      url={item.url}
                      text={"read more"}
                      targetTo={item.targetTo}
                      backgroundColor="orange"
                    /> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
