import React, { useState } from "react";
import { ChatBotContext } from "./chatbot-context";
import ReactDOMServer from "react-dom/server";
import BotAns from "./bot/chatbot/bot-ans";

function ChatbotContextProvider({ children }) {
  const data = ReactDOMServer.renderToString(
    <BotAns msg={"hello, how can I help you?"} />
  );
  const [chatbotDivData, setChatbotDivData] = useState(data);
  const [active, setActive] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [threadRunStatus, setThreadRunStatus] = useState(false);
  const [askOnIdle, setAskOnIdle] = useState(false);
  const [wantToConnectAgent, setWantToConnectAgent] = useState(false);
  const [connectToAgentForm, setConnectToAgentForm] = useState(false);
  const [respondToHelp, setRespondToHelp] = useState(false);
  const [conversation, setConversation] = useState([
    {
      role: "assistant",
      message: "hello, how can I help you?",
    },
    // {
    //   role: "user",
    //   message: "what is content management",
    // },
  ]);
  return (
    <ChatBotContext.Provider
      value={{
        active,
        setActive,
        activePage,
        setActivePage,
        conversation,
        setConversation,
        threadRunStatus,
        setThreadRunStatus,
        askOnIdle,
        setAskOnIdle,
        wantToConnectAgent,
        setWantToConnectAgent,
        respondToHelp,
        setRespondToHelp,
        connectToAgentForm,
        setConnectToAgentForm,
        chatbotDivData,
        setChatbotDivData,
      }}
    >
      {children}
    </ChatBotContext.Provider>
  );
}

export default ChatbotContextProvider;
