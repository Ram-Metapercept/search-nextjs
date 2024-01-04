import { service_content_data } from "@/src/data/services/service-content-data";
import Link from "next/link";
import React from "react";

function SubSections() {
  return (
    <>
      <style jsx>{`
        .sectionWrapper {
          justify-content: center;
        }
        .theme-bg-black ul li {
          color: white;
          position: relative;
        }
        .theme-bg-black ul {
          display: flex;
          padding: 0 10px 20px;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .theme-bg-black ul li::after {
          content: "";
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
          position: absolute;
          left: -15px;
          top: 50%;
          transform: translateY(-50%);
        }
        .sectionWrapper .mainData {
          background-color: #314bac;
          padding: 10px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;

          height: 100%;
        }
        .sectionWrapper button {
          background-color: #c9c9ce;
          color: #314bac;
          padding: 10px;
          border-radius: 4px;
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
      <div className="theme-bg-black">
        <div className="container ">
          <div className="sectionWrapper row">
            {service_content_data.map((service) => (
              <div className="col-lg-6 mb-20">
                <div className="mainData">
                  <img src={service.img} alt={service.name} height={100} />
                  <h4 className="   text-center text-sm-start pt-10 pb-10">
                    {service.name}
                  </h4>
                  <ul className="pb-20">
                    {service.listInfo.map((info, i) => (
                      <li>{info}</li>
                    ))}
                  </ul>

                  <p className="text-center">{service.info}</p>
                  <Link href={service.url} className="readMoreLink">
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SubSections;
