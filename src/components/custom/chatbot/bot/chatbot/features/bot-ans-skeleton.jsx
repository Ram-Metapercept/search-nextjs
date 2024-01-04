import React from "react";
import BotLoader from "../../bot-loader";

function BotAnsSkeleton() {
  return (
    <div className=" botAns">
      <div className="sectionDiv " style={{ width: "90px" }}>
        <BotLoader />

        <div className="imageWrapper ">
          <img
            src={"/assets/img/chatbot/bot.png"}
            alt="chatbot"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}

export default BotAnsSkeleton;
