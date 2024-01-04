import React, { useContext } from "react";
import { ChatBotContext } from "./chatbot-context";

function ActivateButton() {
  const { setActive } = useContext(ChatBotContext);
  return (
    <div
      className="activateButton p-2 cursorPointer"
      onClick={() => setActive(true)}
    >
      <p className="mb-0 text-white">
        <span className="mr-10 d-none d-md-inline">Let's talk</span>
        <i className="fa-regular fa-comment-dots"></i>
      </p>
    </div>
  );
}

export default ActivateButton;
