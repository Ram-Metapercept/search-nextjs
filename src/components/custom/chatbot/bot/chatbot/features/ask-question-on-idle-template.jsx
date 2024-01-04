import React, { useContext, useRef, useState } from "react";
import { ChatBotContext } from "../../../chatbot-context";
import ScrollToBottom from "../../../custom-hook/scroll-to-bottom";
import WantToConnectAgent from "./want-to-connect-agent";
import RespondToHelp from "./respond-to-help";

function AskQuestionOnIdleTemplate() {
  const scrollToBottom = ScrollToBottom();
  const {
    wantToConnectAgent,
    setWantToConnectAgent,
    respondToHelp,
    setRespondToHelp,
  } = useContext(ChatBotContext);
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
    scrollToBottom();
  };

  return (
    <>
      <div className="askQuestionOnIdleTemplate mt-20 mb-20">
        <div className=" botAns">
          <div className="sectionDiv ">
            <p>Did you find what you were looking for?</p>

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

        <div className="userSelectionMessage d-flex justify-content-end gap-2">
          <div className="message" ref={yesDivRef}>
            <p
              onClick={(e) => {
                userSelectionHandler(e, true);
                noDivRef.current.style.display = "none";
                setRespondToHelp(true);
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
                setWantToConnectAgent(true);
              }}
            >
              No
            </p>
          </div>
        </div>
      </div>
      {wantToConnectAgent && <WantToConnectAgent />}
      {/* {respondToHelp && <RespondToHelp />} */}
    </>
  );
}

export default AskQuestionOnIdleTemplate;
