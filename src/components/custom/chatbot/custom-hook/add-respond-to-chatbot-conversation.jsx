import React from "react";
import ReactDOMServer from "react-dom/server";
import Bot from "../bot/bot";
import BotAns from "../bot/chatbot/bot-ans";
import UserQue from "../bot/chatbot/user-que";
function AddRespondToChatbotConversation() {
  const addRespondToChatbotConversation = ({ role, message }) => {
    let data = "";
    if (role == "assistant") {
      data = ReactDOMServer.renderToString(<BotAns msg={message} />);
    } else if (role == "user") {
      data = ReactDOMServer.renderToString(<UserQue msg={message} />);
    }

    console.log("content", data);
    const chatDiv = document.getElementById("queAnsWrapper");
    // console.log("immtertext", chatDiv.innerHTML.toString());
    chatDiv.insertAdjacentHTML("beforeend", data);
  };
  return addRespondToChatbotConversation;
}

export default AddRespondToChatbotConversation;
