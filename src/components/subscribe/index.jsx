import React, { useEffect, useState } from "react";
import CustomButton from "../custom/custom-button";
import { useRouter } from "next/navigation";
function Subscribe() {
  const router = useRouter();
  let isSubscribed = false;

  // useEffect(() => {
  //   isSubscribed = JSON.parse(localStorage.getItem("isSubscribed"));
  //   if (!isSubscribed) {
  //     router.replace("/");
  //   }
  // }, []);

  return (
    <>
      <style jsx global>
        {`
          .backDiv {
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 50px 0;
          }
          .contentDiv {
            width: min(90%, 500px);
            background-color: #fff9ea;
            text-align: center;
            padding: 60px 30px 30px;
            position: relative;
            border-radius: 8px;
          }
          .checkmark {
            border-radius: 50%;
            height: 70px;
            width: 70px;
            background: #fcb713;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translate(-50%, -50%);
          }
          .checkmark i {
            font-size: 30px;
            font-weight: bolder;
          }
          .tp-section p,
          .tp-ab-sv-tabs-title {
            margin-bottom: 25px;
          }

          .HideHeaderFooter,
          .zsiq_floatmain {
            display: none !important;
          }
          @media (max-width: 425px) {
            .subscriptionHead {
              font-size: 20px;
            }
            .tp-section p,
            .tp-ab-sv-tabs-title {
              margin-bottom: 15px;
            }
          }
        `}
      </style>
      <div
        className="backDiv "
        style={{ "--tp-heading-primary": "var(--tp-theme-vogue)" }}
      >
        <h2 className="tp-section__title mb-80 text-center p-2">
          Metapercept Technology Services LLP
        </h2>
        <div className="contentDiv tp-section">
          <div className="checkmark">
            <i>✓</i>
          </div>
          <h3 className="tp-ab-sv-tabs-title text-center subscriptionHead">
            Subscription Confirmed
          </h3>
          <p>Your subscription to our list has been confirmed.</p>
          <p>Thank you for subscribing!</p>
          <p className="mb-0">Metapercept Technology Services LLP</p>
          <p className="mb-0">Office Number 4080,</p>
          <p className="mb-0">Marvel Fuego, Magarpatta Road,</p>
          <p>Pune Maharashtra, India</p>
          <CustomButton url={"/"} text={"Go To Home"} />
        </div>
      </div>
    </>
  );
}

export default Subscribe;
