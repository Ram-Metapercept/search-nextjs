import BreadcrumbArea from "@/src/common/breadcrumb-area";

import React, { useEffect, useState } from "react";
import RightInfo from "./right-info";
import LeftInfo from "./left-info";
import softwareEngineeringData from "@/src/data/solutions/software-engineering/software-engineering-data";
import findHeaderHeight from "@/hooks/find-header-height";
import SubSection from "./sub-section";

function SoftwareEngineering() {
  const [headerHeight, setHeaderHeight] = useState(110);
  useEffect(() => {
    setHeaderHeight(findHeaderHeight());
  });
  return (
    <div className="softEngDiv">
      <style jsx global>
        {`
          .softEngDiv .sectionButton {
            height: 65px;
            width: min(500px, 90%);
            border-radius: 8px;
            cursor: pointer;
            padding: 0 20px;
            position: relative;
            margin-bottom: 20px;
            z-index: 1;
          }
          .softEngDiv .sectionButton.active {
            --tp-heading-primary: white;
          }
          .softEngDiv .subTypes {
            padding: 20px 30px 1px;
            border-radius: 8px;
            --tp-grey-3: var(--tp-heading-primary);
          }
           {
            /* .softEngDiv .listP {
            line-height: 36px;
          } */
          }
          @media (max-width: 991px) {
            .softEngDiv .sectionButton {
              width: 45%;
              margin-bottom: 20px;
            }
          }
          @media (max-width: 767px) {
            .softEngDiv .sectionButton {
              width: 80%;
              margin-bottom: 20px;
            }
          }
          @media (max-width: 425px) {
            .softEngDiv .sectionButton {
              width: 100%;
              transform: scale(0.7);
              margin-bottom: 0px;
            }
             {
              /* .softEngDiv .listP {
              line-height: 26px;
            } */
            }
          }
        `}
      </style>

      {/* <Header /> */}
      <BreadcrumbArea
        // acive_menu="Software Engineering"
        // slug={slug}
        title="Software Engineering"
        backColor="#d3daff"
        backImage="/assets/img/breadcrumb/bg_1.png"
        theme="blueTheme"
      />
      {/* {softwareEngineeringData.map((data, i) => {
        if (i % 2 === 0) {
          return (
            <SubSection
              solution={data}
              headerHeight={headerHeight}
              theme="theme-bg-black"
            />
          );
        } else {
          return <SubSection solution={data} headerHeight={headerHeight} />;
        }
      })} */}

      {softwareEngineeringData.map((data, i) => {
        if (i % 2 === 0) {
          return (
            <RightInfo key={i} solution={data} headerHeight={headerHeight} />
          );
        } else {
          return (
            <LeftInfo key={i} solution={data} headerHeight={headerHeight} />
          );
        }
      })}

      {/* <Footer /> */}
    </div>
  );
}

export default SoftwareEngineering;
