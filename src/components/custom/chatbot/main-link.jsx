import React, { useContext } from "react";
import { ChatBotContext } from "./chatbot-context";

function MainLink({ name }) {
  const { setActivePage } = useContext(ChatBotContext);
  return (
    <div className="link cursorPointer" onClick={() => setActivePage(name)}>
      <p>{name}</p>
      <i className="fa-solid fa-arrow-right"></i>
    </div>
  );
}

export default MainLink;
