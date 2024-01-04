import React from "react";
import accordion_data from "@/src/data/about-us/industries-data";
import Link from "next/link";

const Accordion = ({ setImg, setIndustryName }) => {
  return (
    <>
      <style>
        {`
    .tp-accordion{
      --backColor : rgb(255, 241, 243);
    }
    .tp-accordion .accordion-button::after{
      background-color:var(--backColor);
      color: white;
    }
    .app-blog-info a.blog-btn{
      color:black;
    }
    .app-blog-info a.blog-btn:hover{
      color: var(--tp-theme-cornblue);
    }
    .accordion-body p{
      display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
      overflow: hidden;
    }
    `}
      </style>

      {accordion_data.map((item, i) => (
        <div
          key={i}
          className="accordion-item"
          style={{ backgroundColor: "transparent" }}
        >
          <h2 className="accordion-header" id={item.accordion_id}>
            <button
              className={`accordion-button ${item.collapsed}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={item.data_bs_target}
              aria-expanded={item.aria_expanded}
              aria-controls={item.aria_controls}
              style={{
                "--tp-theme-redical": item.color,
                backgroundColor: item.backColor,
                "--backColor": item.color,
              }}
              onClick={() => {
                setImg(item.img);
                setIndustryName(item.name);
              }}
            >
              {item.name}
            </button>
          </h2>
          <div
            id={item.aria_controls}
            className={`accordion-collapse collapse ${item.show}`}
            aria-labelledby={item.accordion_id}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body tp-section app-blog-info">
              <p className="mb-2">{item.description}</p>
              <Link href="/industries" className="blog-btn">
                Read More
                <span className="pl-10">
                  <i className="fal fa-long-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
