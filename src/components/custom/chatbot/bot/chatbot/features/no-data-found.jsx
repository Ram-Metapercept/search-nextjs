import React from "react";

function NoDataFound() {
  return (
    <div className="userFeedback mt-20 mb-20">
      <div className=" botAns">
        <div className="sectionDiv ">
          <p>Sorry, I did'nt find any data related your request.</p>

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
      <div className="defaultMessage pb-10">
        <p>Can I help you with anything else?</p>
      </div>
      <div className="userSelectionMessage">
        <div className="message">
          <p>I would like to connect with "Agent"</p>
        </div>
        <div className="message">
          <p>I would like to end the chat</p>
        </div>
      </div>
    </div>
  );
}

export default NoDataFound;
