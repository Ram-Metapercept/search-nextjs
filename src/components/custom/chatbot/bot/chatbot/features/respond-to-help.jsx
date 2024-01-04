import React from "react";

function RespondToHelp() {
  return (
    <div className="userFeedback mt-20 mb-20">
      <div className="botAns">
        <div className="sectionDiv">
          <p>Can I help you with anything else?</p>

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
    </div>
  );
}

export default RespondToHelp;
