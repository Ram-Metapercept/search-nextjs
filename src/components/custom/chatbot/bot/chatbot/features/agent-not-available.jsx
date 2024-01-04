import React from "react";

function AgentNotAvailable() {
  return (
    <div className="agentNotAvailable mt-20 mb-20">
      <div className=" botAns">
        <div className="sectionDiv ">
          <p>Sorry, it looks like agent is busy with another customer.</p>

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
          <p>Create a ticket.</p>
        </div>
        <div className="message">
          <p>Come back later to chat.</p>
        </div>
      </div>
    </div>
  );
}

export default AgentNotAvailable;
