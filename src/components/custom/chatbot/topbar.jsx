import React, { useContext } from "react";
import { ChatBotContext } from "./chatbot-context";

function TopBar() {
  const { chatbotDivData, setChatbotDivData } = useContext(ChatBotContext);
  const initialChat = () => {
    const chatDiv = document.getElementById("queAnsWrapper");
    let divData = chatDiv?.innerHTML || chatbotDivData;
    setChatbotDivData(divData);
  };
  const {
    active,
    setActive,
    activePage,
    setActivePage,
    setAskOnIdle,
    setWantToConnectAgent,
    setRespondToHelp,
    setConnectToAgentForm,
  } = useContext(ChatBotContext);

  return (
    <>
      <i
        className="fa-solid fa-circle-minus closeBtn cursorPointer"
        onClick={() => setActive(false)}
      ></i>
      <div className="pl-10 pr-10 pb-10 pt-10 topBar">
        <div className="text-white pb-30">
          <i
            className="fa-solid fa-house cursorPointer"
            onClick={() => {
              initialChat();
              setAskOnIdle(false);
              setWantToConnectAgent(false);
              setRespondToHelp(false);
              setConnectToAgentForm(false);
              setActivePage("home");
            }}
          ></i>
          {activePage !== "home" && (
            <>
              <span className="px-1">/</span>
              <span className="cursorPointer">{activePage}</span>
            </>
          )}
        </div>
        <p className="text-white">Welcome to Metapercept support!</p>
        <p className="text-white">How can I assist you today?</p>
      </div>
    </>
  );
}

export default TopBar;
