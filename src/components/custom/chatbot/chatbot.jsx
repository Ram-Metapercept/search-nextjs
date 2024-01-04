import React, { useContext, useEffect } from "react";
import ActivateButton from "./activate-button";
import LinksContainer from "./links-container";
import { ChatBotContext } from "./chatbot-context";

function ChatBot() {
  const { active } = useContext(ChatBotContext);

  return (
    <div className="chatbot">
      {active ? <LinksContainer /> : <ActivateButton />}
    </div>
  );
}

export default ChatBot;
