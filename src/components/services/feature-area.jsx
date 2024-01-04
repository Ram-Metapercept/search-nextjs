import React from "react";
import { service_content_data } from "@/src/data/services/service-content-data";
import FeatureAreaRight from "./feature-area-right";
import FeatureAreaLeft from "./feature-area-left";

const [softwareDevelopment, technicalWriting, training] = service_content_data;

const FeatureArea = () => {
  return (
    <>
      <style jsx global>
        {`
          .techBoxContainer {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            flex: 1;
            gap: 30px;
            justify-content: space-between;
          }
          .techBox {
            width: 45%;
            padding: 20px;
            transition: transform 0.3s ease-in;
            border-radius: 8px;
            text-align: center;
            font-size: 16px;
            color: var(--tp-heading-primary);
          }
          .techBoxSoftware {
            background-color: #feedee;
          }
          .techBoxTechnical {
            background-color: #fde4d0;
          }
          .techBoxTraining {
            background-color: #cdfce3;
          }
          .techBox:hover {
            transform: scale(1.05);
            color: white;
          }
          .techBoxSoftware:hover {
            box-shadow: 0 20px 43px -20px #e35f63a3;
          }
          .techBoxTechnical:hover {
            box-shadow: 0 20px 43px -20px #fde4d0a3;
          }
          .techBoxTraining:hover {
            box-shadow: 0 20px 43px -20px #086d38a3;
          }
          #box {
            overflow: hidden;
            position: relative;
            z-index: 1;
          }
          #box::after {
            border-top-right-radius: 50%;
            content: "";
            display: block;
            height: 120%;
            width: 130%;
            position: absolute;
            left: 0;
            top: -15%;
            transform: translate(-100%, 75%) rotate(0deg);
            transform-origin: bottom left;
            transition: 0.5s transform ease-out;
            z-index: -1;
          }
          #box.techBoxSoftware::after {
            background-color: #cd5c5c;
          }
          #box.techBoxTechnical::after {
            background-color: #f47f20;
          }
          #box.techBoxTraining::after {
            background-color: #086d38;
          }

          #box:hover::after {
            transform: translate(0, 0);
            transition: 0.2s transform ease-out;
          }

          @media screen and (max-width: 550px) {
            .sv-page-fea-img-2,
            .sv-page-fea-img-1 {
              height: 300px;
            }
          }
          @media screen and (max-width: 375px) {
            .techBox {
              width: 70%;
            }
            .techBoxContainer {
              justify-content: center;
            }
            .sv-page-fea-img-2,
            .sv-page-fea-img-1 {
              height: 250px;
            }
          }
        `}
      </style>
      <div style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}>
        <FeatureAreaRight
          serviceInfo={softwareDevelopment}
          classes={"techBoxSoftware"}
        />
        <FeatureAreaLeft
          serviceInfo={technicalWriting}
          classes={"techBoxTechnical"}
        />
        <FeatureAreaRight
          serviceInfo={training}
          classes={"techBoxTraining"}
          targetTo="_blank"
        />
      </div>
    </>
  );
};

export default FeatureArea;
