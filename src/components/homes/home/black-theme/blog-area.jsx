import { blog_web_Url, blog_web_api_Url } from "@/src/data/external-website";

import React, { useEffect, useState } from "react";

const BlogArea = () => {
  const [latest, setLatest] = useState([]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    fetch(
      `${blog_web_api_Url}/api/articles?filters[Archived][$eq]=false&pagination[page]=1&pagination[pageSize]=6&sort[0]=createdAt:desc&populate=*`
    )
      .then((response) => response.json())
      .then((data) => {
        setLatest(data.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <style jsx>
        {`
          .tp-lasted-blog .it-portfolio-item__btn:hover {
            background-color: #d76a12;
          }
        `}
      </style>
      <div
        className="tp-lasted-blog-grid pt-25 pb-25 "
        style={{
          "--tp-heading-primary": "var(--tp-theme-vogue)",
        }}
      >
        <div className="container">
          {/* ---------------------new------------------- */}

          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-40">Latest blogs</h2>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------new------------------- */}
          <div className="row">
            {latest.slice(0, 3).map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6 mb-20">
                <a
                  target="_blank"
                  href={`${blog_web_Url}highlight-single/${item?.attributes?.Slug}`}
                >
                  <div
                    className="it-blog tp-lasted-blog  aos-init aos-animate it-blog-wrapper"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    style={{
                      height: "100%",
                      border: "2px solid #f6f6f6",
                      borderRadius: "8px",
                    }}
                  >
                    <div className="it-blog__thumb w-img">
                      <div className="fix">
                        <img
                          src={`${blog_web_api_Url}${item.attributes.Image.data[0].attributes.url}`}
                          alt={item.attributes.Title}
                          style={{ aspectRatio: "16/9" }}
                        />
                      </div>
                    </div>
                    <div
                      className="it-blog-info  pb-0"
                      style={{ border: "none" }}
                    >
                      <div className="centeringDiv mb-20">
                        <i
                          className="fi flaticon-calendar"
                          style={{
                            fontSize: "13px",
                            marginRight: "5px",
                            marginTop: "2px",
                          }}
                        ></i>
                        <span className="date">
                          {new Date(
                            item.attributes.publishedAt
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <h3
                        className="ca-service__item-title mb-25"
                        style={{
                          maxHeight: "3em",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {/* <a
                        target="_blank"
                        href={`${blog_web_Url}highlight-single/${item?.attributes?.Slug}`}
                      > */}
                        {item.attributes.Title}
                        {/* </a> */}
                      </h3>
                      {/* <div
                      className="tp-seo-full-btn"
                      style={{ "--tp-theme-redical": "#6c60fe" }}
                    >
                      <a
                        target="_blank"
                        href={`${blog_web_Url}highlight-single/${item?.attributes?.Slug}`}
                        className="it-portfolio-item__btn"
                      >
                        {" "}
                        Read More
                        <span className="mt-5">
                          <i className="fal fa-long-arrow-right"></i>
                          <i className="fal fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div> */}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArea;
