import Link from "next/link";
import React, { useRef, useState } from "react";
import menu_data from "./menu-data-new";

const NavMenu = ({ setReRender, reRender }) => {
  return (
    <>
      <ul className="headerUL">
        {menu_data.map((item, i) => (
          <li
            key={i}
            style={{ "--tp-theme-redical": "rgb(12,84,173)" }}
            className={`headerLI ${item.has_dropdown ? "has-dropdown" : ""} 
            `}
          >
            <Link className="headerA" href={item.link}>
              {item.title}
              {/* {item.sub_menus && (
                <i class="fa-solid fa-angle-down dropDownIcon"></i>
              )} */}
            </Link>
            {item.sub_menus && (
              <ul
                className="submenu"
                style={{
                  backgroundColor: "white",
                  minWidth: "246px",
                }}
              >
                {item.sub_menus.map((sub_item, sub_i) => {
                  const isUrl = sub_item.link.startsWith("https://");
                  const targetAttr = isUrl ? `"_blank"` : "";

                  return (
                    <li
                      key={sub_i}
                      style={{
                        "--tp-common-white": "black",
                        "--tp-theme-redical": "rgb(12,84,173)",
                      }}
                    >
                      <Link
                        href={sub_item.link}
                        target={targetAttr}
                        style={{ fontSize: "15px", fontWeight: 400 }}
                      >
                        {sub_item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
