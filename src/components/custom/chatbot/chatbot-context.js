const { createContext } = require("react");

export const ChatBotContext = createContext({
  active: false,
  setActive: () => {},
  activePage: "home",
  setActivePage: () => {},
  conversation: [],
  setConversation: () => {},
  threadRunStatus: false,
  setThreadRunStatus: () => {},
  askOnIdle: false,
  setAskOnIdle: () => {},
  wantToConnectAgent: false,
  setWantToConnectAgent: () => {},
  respondToHelp: false,
  setRespondToHelp: () => {},
  connectToAgentForm: false,
  setConnectToAgentForm: () => {},
  chatbotDivData: "",
  setChatbotDivData: () => {},
});
