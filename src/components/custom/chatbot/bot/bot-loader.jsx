import React from "react";

function BotLoader() {
  return (
    <>
      <style jsx>
        {`
          .dot-flashing {
            position: relative;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background-color: #324da0;
            color: #324da0;
            animation: dot-flashing 0.6s infinite linear alternate;
            animation-delay: 0.3s;
          }
          .dot-flashing::before,
          .dot-flashing::after {
            content: "";
            display: inline-block;
            position: absolute;
            top: 0;
          }
          .dot-flashing::before {
            left: -15px;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background-color: #324da0;
            color: #324da0;
            animation: dot-flashing 0.6s infinite alternate;
            animation-delay: 0s;
          }
          .dot-flashing::after {
            left: 15px;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background-color: #324da0;
            color: #324da0;
            animation: dot-flashing 0.6s infinite alternate;
            animation-delay: 0.6s;
          }

          @keyframes dot-flashing {
            0% {
              background-color: #324da0;
            }
            50%,
            100% {
              background-color: #324da070;
            }
          }
        `}
      </style>

      <div
        className="snippet"
        data-title="dot-flashing"
        style={{ marginLeft: "25px" }}
      >
        <div className="stage">
          <div className="dot-flashing"></div>
        </div>
      </div>
    </>
  );
}

export default BotLoader;
