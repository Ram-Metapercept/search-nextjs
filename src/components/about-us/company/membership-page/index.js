import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React, { useEffect, useState } from "react";
import Left from "./left";
import Right from "./right";
import findHeaderHeight from "@/hooks/find-header-height";
const consulting_data = [
  {
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellat fugiat molestiae dolore, dolorum totam expedita iusto incidunt beatae alias repudiandae vel, sunt hic nobis esse perferendis quae tempora nisi? Minus repellat fugiat molestiae dolore, dolorum totam expedita iusto incidunt beatae alias repudiandae vel, Minus repellat fugiat molestiae dolore, dolorum totam expedita iusto incidunt beatae alias repudiandae vel,",
    image: "/assets/img/about-us/certificate.jpg",
    url: "/solutions/informationarchitecture",
    darkColor: "#cd5c5c",
    backColor: "#feedee",
    id: "1",
  },
  {
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellat fugiat molestiae dolore, dolorum totam expedita iusto incidunt beatae alias repudiandae vel, sunt hic nobis esse perferendis quae tempora nisi? Minus repellat fugiat molestiae dolore, dolorum totam expedita iusto incidunt beatae alias repudiandae vel, Minus repellat fugiat molestiae dolore, dolorum totam expedita iusto incidunt beatae alias repudiandae vel,",
    image: "/assets/img/about-us/certificate.jpg",
    url: "/solutions/technicalpublication#contentmigrationsection",
    darkColor: "#086d38",
    backColor: "#f1fef8",
    id: "2",
  },
  {
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellat fugiat molestiae dolore, dolorum totam expedita iusto incidunt beatae alias repudiandae vel, sunt hic nobis esse perferendis quae tempora nisi? Minus repellat fugiat molestiae dolore, dolorum totam expedita iusto incidunt beatae alias repudiandae vel, Minus repellat fugiat molestiae dolore, dolorum totam expedita iusto incidunt beatae alias repudiandae vel,",
    image: "/assets/img/about-us/certificate.jpg",
    url: "/solutions/technicalpublication#contentstrategysection",
    darkColor: "#324da0",
    backColor: "#eff2fa",
    id: "3",
  },
  {
    title: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellat fugiat molestiae dolore, dolorum totam expedita iusto incidunt beatae alias repudiandae vel, sunt hic nobis esse perferendis quae tempora nisi? Minus repellat fugiat molestiae dolore, dolorum totam expedita iusto incidunt beatae alias repudiandae vel, Minus repellat fugiat molestiae dolore, dolorum totam expedita iusto incidunt beatae alias repudiandae vel,",
    image: "/assets/img/about-us/certificate.jpg",
    url: "/solutions/staffaugmentation",
    darkColor: "#f47f20",
    backColor: "#fef3eb",
    id: "4",
  },
];

function MembershipPage() {
  const [headerHeight, setHeaderHeight] = useState(110);
  useEffect(() => {
    setHeaderHeight(findHeaderHeight());
  });
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
            max-width: min(80%, 400px);
            height: auto;
            padding: 0 !important;
            border-radius: 8px;
          }
          .s-img-left {
            position: absolute;
            left: -4%;
            top: 50%;
            transform: translateY(-50%);
          }
          .s-img-right {
            position: absolute;
            right: -4%;
            top: 50%;
            transform: translateY(-50%);
          }
          .singleContentDiv {
            padding: 50px 16px 16px;
          }

          @media (min-width: 991px) {
            .mainTitle {
              font-size: 50px;
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

      <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
        <BreadcrumbArea
          title="Membership"
          backColor="#fff1cd"
          backImage="/assets/img/breadcrumb/bg_4.png"
          theme="yellowTheme"
        />
        <div className="theme-bg-black">
          <div className="container d-block pt-0 pt-lg-50 pt-lg-0 pb-50">
            {consulting_data.map((data, i) => {
              if (i % 2 == 0) {
                return (
                  <Left content={data} headerHeight={headerHeight} key={i} />
                );
              } else {
                return (
                  <Right content={data} headerHeight={headerHeight} key={i} />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MembershipPage;
