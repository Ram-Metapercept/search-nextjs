import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React from "react";
import Left from "./left";
import Right from "./right";
import consulting_data from "@/src/data/solutions/consulting/consulting-data";
function Consulting() {
  return (
    <>
      <style jsx global>
        {`
          .shadow-lg {
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
            border-radius: 8px;
          }
          .border-blue {
            border: 2px solid #006596;
          }
          .img-fluid {
            max-width: min(80%, 500px);
            height: auto;
            padding: 0 !important;
            border-radius: 8px;
          }
          .s-img-left {
            position: absolute;
            left: -6%;
            top: 50%;
            transform: translateY(-50%);
          }
          .s-img-right {
            position: absolute;
            right: -6%;
            top: 50%;
            transform: translateY(-50%);
          }
          .singleContentDiv {
            padding: 50px 16px 16px;
          }

          @media (min-width: 991px) {
            .mainTitle {
              font-size: 40px;
            }
          }
          @media (max-width: 991px) {
            .infoContainer {
              margin-top: -50px;
            }
            .singleContentDiv {
              padding-top: 100px;
            }
            .s-img-left,
            .s-img-right {
              position: relative;
              left: 0;
              top: -50px;
              margin: auto;
              transform: translate(0%, 0%);
            }
            .img-fluid {
              max-width: min(90%, 550px);
              height: auto;
            }
          }
        `}
      </style>
      <BreadcrumbArea
        title="Consulting"
        backColor="#fff1cd"
        backImage="/assets/img/breadcrumb/bg_4.png"
        theme="yellowTheme"
      />
      <div className="theme-bg-black">
        <div
          className="container d-block pt-0 pt-lg-50 pt-lg-0 pb-50"
          style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}
        >
          {consulting_data.map((data, i) => {
            if (i % 2 == 0) {
              return <Left content={data} key={i} />;
            } else {
              return <Right content={data} key={i} />;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Consulting;
