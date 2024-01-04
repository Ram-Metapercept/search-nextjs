import React, { useState } from "react";
import { motion } from "framer-motion";
import portfolio_data_three from "./partners-data";

const categories = [
  "All",
  "DevOps",
  "Technical Publication",
  "Authoring Tool Partner",
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

  return (
    <>
      <style jsx>
        {`
          .pf-item-wrapper:hover {
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 5px 0px,
              rgba(60, 64, 67, 0.15) 0px 1px 5px 1px !important;
            transform: scale(1.01);
          }
          .pf-single-item::after {
            display: none;
          }
          @media (min-width: 576px) and (max-width: 768px) {
            .pf-single-item {
              min-height: 275px;
            }
          }
        `}
      </style>

      <div className="tp-portfoliop-page-area pt-50 pb-50">
        <div className="container">
          {/* ---------------------------new------------------- */}
          <div className="row">
            <div className="col-12 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2 className="tp-section__title mb-60">
                    Our Business Partners
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
          <motion.div layout className="row tp-portfolio-isotop-active">
            {items.map((item, i) => (
              <div
                key={i}
                className={`col-12 col-sm-6 col-xl-4 tp-portfolio-item mb-25 w-img ${item.cls}`}
              >
                <a href={item.url} target="_blank">
                  <div
                    className="pf-item-wrapper p-relative"
                    style={{
                      boxShadow:
                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                      minHeight: "240px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="pf-single-item d-flex flex-column align-items-center text-center p-3">
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{ maxWidth: "250px", padding: "20px 0" }}
                      />
                      <p
                        style={{
                          color: "var(--tp-grey-1)",
                          fontSize: "16px",
                          textAlign: "justify",
                        }}
                      >
                        {item.description}
                      </p>
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
