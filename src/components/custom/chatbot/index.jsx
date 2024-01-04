import React from "react";

import ChatBot from "./chatbot";
import ChatbotContextProvider from "./chatbot-context-provider";
function Index() {
  return (
    <ChatbotContextProvider>
      <ChatBot />
    </ChatbotContextProvider>
  );
}

export default Index;
