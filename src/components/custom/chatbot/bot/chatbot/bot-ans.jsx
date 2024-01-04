import React from "react";
import ReactMarkdown from "react-markdown";
function BotAns({ msg = "" }) {
  return (
    <div className=" botAns">
      <div className="sectionDiv ">
        <p className=""></p>
        <ReactMarkdown>{msg}</ReactMarkdown>
        <div className="imageWrapper ">
          <img
            src={"/assets/img/chatbot/bot.png"}
            alt="chatbot"
            width={30}
            height={30}
          />
        </div>
      </div>
      <p className="time">3.15 PM</p>
    </div>
  );
}

export default BotAns;
