import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import portfolio_data_three from "./partners-data";

import findHeaderHeight from "@/hooks/find-header-height";

const categories = [
  "All",
  "Content Management System",
  "Authoring Tool",
  "DevOps",
];

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data_three);

  const filterItems = (cateItem) => {
    setActiveCategory(cateItem);

    if (cateItem === "All") {
      return setItems(portfolio_data_three);
    } else {
      const findItems = portfolio_data_three.filter((findItem) => {
        return findItem.category.includes(cateItem);
      });
      setItems(findItems);
    }
  };
  const [headerHeight, setHeaderHeight] = useState(110);
  useEffect(() => {
    setHeaderHeight(findHeaderHeight());
  }, []);

  return (
    <>
      <style jsx global>
        {`
          .singlePartner {
            box-shadow: rgba(9, 30, 66, 0.15) 0px 0.5rem 1rem 0px;
            border-radius: 0.5rem;
            overflow: hidden;

            height: 100%;
          }
          .singlePartner:hover {
            box-shadow: rgba(9, 30, 66, 0.25) 0px 0.5rem 1rem 0px;
          }
          .headColor {
            height: 55px;
            margin-bottom: 50px;
            position: relative;
          }
          .partner img {
            width: 200px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%);
            background-color: white;
            padding: 5px 10px;
            border-radius: 0.5rem;
          }
          .description {
            padding: 0 20px;
          }
          .description p {
            margin-bottom: 20px;
          }
        `}
      </style>
      <div
        className="tp-portfoliop-page-area pt-25 pb-25 theme-bg-black"
        id="business-partner"
        style={{
          scrollMarginBlockStart: headerHeight,
        }}
      >
        <div className="container">
          {/* ---------------------------new------------------- */}
          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-30" id="our-buisness-partners">
                    Our business partners
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------new------------------- */}

          <div className="tp-portfolio-header mb-30">
            <div className="row">
              <div className="col-12">
                <div className="tp-pf-btn-group text-center">
                  {categories.map((cate, i) => (
                    <button
                      onClick={() => filterItems(cate)}
                      key={i}
                      className={`${cate === activeCategory ? "active" : ""}`}
                    >
                      {cate}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <motion.div
            layout
            className="row tp-portfolio-isotop-active d-flex justify-content-center"
          >
            {items.map((item, i) => (
              <div
                key={i}
                className={`col-12 col-md-6 col-xl-4 tp-portfolio-item mb-25 w-img `}
              >
                <a href={item.url} target="_blank">
                  <div className="singlePartner">
                    <div
                      className="headColor"
                      style={{ backgroundColor: item.backColor }}
                    >
                      <div className="partner">
                        <img src={item.img} alt={item.name} />
                      </div>
                    </div>
                    <div className="description ca-service__item">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Partners;
