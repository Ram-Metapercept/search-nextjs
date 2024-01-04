import Link from "next/link";
import React, { useContext } from "react";
import AskQuestionOnIdle from "./custom-hook/ask-question-on-idle";
import { ChatBotContext } from "./chatbot-context";

const askQuestionOnIdle = AskQuestionOnIdle();

function RedirectLink({
  name,
  url = "#",
  iClass = "fa-solid fa-arrow-right",
  target = "",
}) {
  const {
    setActivePage,
    setAskOnIdle,
    setWantToConnectAgent,
    setRespondToHelp,
  } = useContext(ChatBotContext);

  const addOnIdleHandler = () => {
    // setConversation((conversation) => [
    //   ...conversation,
    //   { role: "assistant", message: "Did you find what you were looking for?" },
    // ]);
    setAskOnIdle(true);
    setActivePage(() => "Talk to Us");
  };

  return (
    <Link
      href={url}
      className="linkA"
      target={target}
      onClick={() => {
        setAskOnIdle(false);
        setWantToConnectAgent(false);
        setRespondToHelp(false);
        askQuestionOnIdle(addOnIdleHandler);
      }}
    >
      <div className="link">
        <p>{name}</p>
        <i className={iClass}></i>
      </div>
    </Link>
  );
}

export default RedirectLink;
