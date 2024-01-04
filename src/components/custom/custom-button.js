import { buttonColor } from "@/src/data/button-color";
import Link from "next/link";
import React from "react";

function CustomButton({
  url,
  classes,
  text,
  targetTo = "",
  backgroundColor = "blue",
}) {
  return (
    <>
      <style>
        {`
        .customBtnDiv a{
          background-color: ${buttonColor[backgroundColor].backgroundColor}
        }
        .customBtnDiv a:hover{
          background-color:${buttonColor[backgroundColor].hoverColor}
        }
        `}
      </style>

      <div className={`${classes} customBtnDiv`}>
        <Link
          href={url}
          target={targetTo}
          style={{
            color: "white",
            padding: "12px 15px",
            fontSize: "13px",
            overflow: "hidden",
          }}
          className="tp-white-btn"
          aria-label="read more"
        >
          {text}
          <span className="ml-10">
            <i
              className="fal fa-long-arrow-right"
              style={{ color: "white" }}
            ></i>
            <i
              className="fal fa-long-arrow-right"
              style={{ color: "white" }}
            ></i>
          </span>
        </Link>
      </div>
    </>
  );
}

export default CustomButton;
