import Link from "next/link";
import React from "react";
import {
  news_blog_web_Url,
  event_blog_web_Url,
  blog_web_Url,
} from "@/src/data/external-website";
// footer_links data
const footer_links = [
  {
    id: 1,
    title: "Quick Links",
    col: "col-xl-2",
    id: "company",
    links: [
      { title: "About us", link: "/aboutus" },
      // { title: "Our Team", link: "/aboutus/company" },
      { title: "Services", link: "/services" },
      // { title: "Membership", link: "/aboutus/company#membership" },
      { title: "Solutions", link: "/solutions" },
      // { title: "Affiliation", link: "/aboutus/company#affiliation" },
      { title: "News", link: news_blog_web_Url },
      // { title: "Get In Touch", link: "/contact" },
      { title: "Events", link: event_blog_web_Url },
      { title: "Blogs", link: blog_web_Url },
      // { title: "News", link: "https://blog.metapercept.com/" },
      // { title: "Event", link: "https://blog.metapercept.com/category/events/" },
      // { title: "Blog", link: "https://blog.metapercept.com/" },
    ],
  },
];

const CommonFooter = () => {
  const generateLink = (link) => {
    if (link.link.startsWith("https")) {
      return (
        <a href={link.link} target="_blank" className="font-12">
          {link.title}
        </a>
      );
    } else {
      return (
        <Link href={link.link} className="font-12">
          {link.title}
        </Link>
      );
    }
  };
  return (
    <>
      {/* <style jsx>
        {`
          @media (min-width: 767px) {
            .tp-footer__widget ul#company li {
              width: 100%;
            }
          }
        `}
      </style> */}
      {footer_links.map((item, i) => (
        <div key={i} className={`${item.col} col-md-6`}>
          <div className="tp-footer__widget mb-20">
            <h3 className="tp-footer__widget-title mb-10">{item.title}</h3>
            <ul id={item.id}>
              {item.links?.map((link, id) => (
                <li key={id}>{generateLink(link)}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommonFooter;

// copy right text
const footer_content = {
  copy_right_info: (
    <>
      {" "}
      Copyright © {new Date().getFullYear()}{" "}
      <Link href="/">Metapercept Technology Services LLP</Link> All Rights
      Reserved{" "}
    </>
  ),
};

const { copy_right_info } = footer_content;

export const FooterCopyRight = ({ style_3, style_7, style_9 }) => {
  return (
    <>
      <div
        style={{ "--tp-theme-redical": "#324da0" }}
        className={`tp-footer__bottom pt-25 pb-25 ${
          style_3 ? "da-ft-copyright-bg" : ""
        } ${style_7 ? "law-footer__bottom red-bg" : ""} ${
          style_9 ? "ha-footer-copyright" : ""
        }`}
      >
        <div className="row align-items-center ">
          <div className="col-md-8 col-12">
            {/* <div className="col-md-8 col-12 mb-20"> */}
            <div
              className={`tp-copyrigh-text ${
                style_3 ? "" : "text-center text-md-start"
              }`}
            >
              <span className="font-12">{copy_right_info}</span>
            </div>
          </div>
          {/* <div className="col-md-4 d-none d-md-block"> */}
          <div className="col-md-4 d-md-block pt-4 pt-sm-0 ">
            {/* <div className="tp-footer-menu text-end"> */}
            <div className="tp-footer-menu text-center">
              {/* <ul> */}
              <ul className="d-flex justify-content-center font-12">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/sitemap">View Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const FooterCopyRightBlack = ({ style_3, style_7, style_9 }) => {
  return (
    <>
      <div
        // style={{ "--tp-theme-redical": "#324da0" }}
        className={`tp-footer__bottom pt-25 pb-25 ${
          style_3 ? "da-ft-copyright-bg" : ""
        } ${style_7 ? "law-footer__bottom red-bg" : ""} ${
          style_9 ? "ha-footer-copyright" : ""
        }`}
      >
        <div className="row align-items-center ">
          <div className="col-md-8 col-12">
            {/* <div className="col-md-8 col-12 mb-20"> */}
            <div
              className={`tp-copyrigh-text ${
                style_3 ? "" : "text-center text-md-start"
              }`}
            >
              <span className="font-12">{copy_right_info}</span>
            </div>
          </div>
          {/* <div className="col-md-4 d-none d-md-block"> */}
          <div className="col-md-4 d-md-block pt-4 pt-sm-0 ">
            {/* <div className="tp-footer-menu text-end"> */}
            <div className="tp-footer-menu text-center">
              {/* <ul> */}
              <ul className="d-flex justify-content-center font-12">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/sitemap">View Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
