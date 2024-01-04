import React, { useContext, useRef, useState } from "react";
import { ChatBotContext } from "../../../chatbot-context";
import RespondToHelp from "./respond-to-help";
import ScrollToBottom from "../../../custom-hook/scroll-to-bottom";

function WantToConnectAgent() {
  const scrollToBottom = ScrollToBottom();
  const { respondToHelp, setRespondToHelp, setConnectToAgentForm } =
    useContext(ChatBotContext);
  const [isClicked, setIsClicked] = useState(false);
  const [userSelection, setUserSelection] = useState(false);
  const yesDivRef = useRef();
  const noDivRef = useRef();

  const userSelectionHandler = (e, decision) => {
    setIsClicked(true);
    e.target.style.pointerEvents = "none";
    e.target.style.backgroundColor = "#b4c7ff";
    e.target.style.border = "1px solid #b4c7ff";
    setUserSelection(decision);
    console.log("first", e.target);
  };
  return (
    <>
      <div className="askQuestionOnIdleTemplate mt-20 mb-20">
        <div className=" botAns">
          <div className="sectionDiv ">
            <p>Sorry to here that.</p>

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
        <div className="defaultMessage ">
          <p>Do you want to connect to our sales team?</p>
        </div>
        <p className="time">3.15 PM</p>

        <div className="userSelectionMessage d-flex justify-content-end gap-2">
          <div className="message" ref={yesDivRef}>
            <p
              onClick={(e) => {
                userSelectionHandler(e, true);
                noDivRef.current.style.display = "none";
                setConnectToAgentForm(true);
                scrollToBottom();
              }}
            >
              Yes
            </p>
          </div>
          <div className="message" ref={noDivRef}>
            <p
              onClick={(e) => {
                userSelectionHandler(e, false);
                yesDivRef.current.style.display = "none";
                setRespondToHelp(true);
                scrollToBottom();
              }}
            >
              No
            </p>
          </div>
        </div>
      </div>
      {/* {respondToHelp && <RespondToHelp />} */}
    </>
  );
}

export default WantToConnectAgent;
