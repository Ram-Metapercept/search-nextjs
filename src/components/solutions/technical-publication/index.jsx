import BreadcrumbArea from "@/src/common/breadcrumb-area";
import React, { useEffect, useState } from "react";
import technicalPublicationData from "@/src/data/solutions/technical-publication/technical-publication-data";
import RightInfo from "./right-info";
import LeftInfo from "./left-info";
import findHeaderHeight from "@/hooks/find-header-height";
import SubSection from "./sub-section";
function TechnicalPublication() {
  const [headerHeight, setHeaderHeight] = useState(110);
  useEffect(() => {
    setHeaderHeight(findHeaderHeight());
  });
  return (
    <div className="technicalPublicationDiv">
      <style jsx global>
        {`
          .technicalPublicationDiv .sectionButton {
            height: 65px;
            width: min(500px, 90%);
            border-radius: 8px;
            cursor: pointer;
            padding: 0 20px;
            margin-bottom: 20px;
            position: relative;
            z-index: 1;
          }
          .technicalPublicationDiv .sectionButton.active {
            --tp-heading-primary: white;
          }
          .technicalPublicationDiv .subTypes {
            padding: 20px 30px;
            border-radius: 8px;
            --tp-grey-3: var(--tp-heading-primary);
          }

          @media (max-width: 991px) {
            .technicalPublicationDiv .sectionButton {
              width: 45%;
              margin-bottom: 20px;
            }
          }
          @media (max-width: 767px) {
            .technicalPublicationDiv .sectionButton {
              width: 80%;
              margin-bottom: 20px;
            }
          }
          @media (max-width: 425px) {
            .technicalPublicationDiv .sectionButton {
              width: 100%;
              transform: scale(0.7);
              margin-bottom: 0px;
            }
          }
        `}
      </style>
      <BreadcrumbArea
        title="Technical Publication"
        backColor="#aeffd4"
        backImage="/assets/img/breadcrumb/bg_2.png"
        theme="greenTheme"
      />
      {technicalPublicationData.map((data, i) => {
        {
          /* if (i % 2 === 0) {
          return (
            <SubSection
              solution={data}
              headerHeight={headerHeight}
              theme="theme-bg-black"
            />
          );
        } else {
          return <SubSection solution={data} headerHeight={headerHeight} />;
        } */
        }
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
    </div>
  );
}

export default TechnicalPublication;
