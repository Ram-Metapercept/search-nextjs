import { portfolio_web_Url } from "@/src/data/external-website";
import Link from "next/link";
import React from "react";

function SuccessStoriesNew() {
  return (
    <>
      <div
        className="seo-feature-area  p-relative pt-25"
        style={{
          "--tp-theme-seagreen": "rgb(248,252,252)",
          "--tp-heading-primary": "var(--tp-theme-vogue)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-10">
                    Our Success Stories
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolioInfo tp-section text-center">
            <p
              className="pb-0 mb-6 wow tpfadeUp"
              data-wow-delay=".4s"
              style={{ color: "var(--tp-grey-3)" }}
            >
              With a track record of successful project deliveries, we have
              compelling success stories to share.
            </p>
          </div>
          <div className="SuccessStoriesCards row">
            <div className="singleCardContainer col-md-7">
              <Link
                href={portfolio_web_Url + "Information Architecture"}
                target="_blank"
              >
                <div className="singleCard">
                  <h2>Information Architect</h2>
                  <div className="scaleDiv"></div>
                </div>
              </Link>
            </div>
            <div className="singleCardContainer col-md-5">
              <Link
                href={portfolio_web_Url + "Technical Writing"}
                target="_blank"
              >
                <div className="singleCard">
                  <h2>Technical Publications</h2>
                  <div className="scaleDiv"></div>
                </div>
              </Link>
            </div>
            <div className="singleCardContainer col-md-5">
              <Link href={portfolio_web_Url + "WebDevelopment"} target="_blank">
                <div className="singleCard">
                  <h2>Web Development</h2>
                  <div className="scaleDiv"></div>
                </div>
              </Link>
            </div>
            <div className="singleCardContainer col-md-7">
              <Link href={portfolio_web_Url} target="_blank">
                <div className="singleCard">
                  <h2>Application Integration</h2>
                  <div className="scaleDiv"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessStoriesNew;
