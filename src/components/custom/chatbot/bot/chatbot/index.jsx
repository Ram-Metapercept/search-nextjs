import React, { useContext, useEffect } from "react";
import BotAns from "./bot-ans";
import UserQue from "./user-que";
import InputBar from "./input-bar";
import BotAnsSkeleton from "./features/bot-ans-skeleton";
import NoDataFound from "./features/no-data-found";
import UserFeedBack from "./features/user-feedback";
import AgentNotAvailable from "./features/agent-not-available";
import UserGetDataForm from "./features/user-get-data-form";
import MakeYourChoice from "./features/make-your-choice";
import { ChatBotContext } from "../../chatbot-context";
import AskQuestionOnIdleTemplate from "./features/ask-question-on-idle-template";
import WantToConnectAgent from "./features/want-to-connect-agent";
import ScrollToBottom from "../../custom-hook/scroll-to-bottom";
import RespondToHelp from "./features/respond-to-help";

function ChatBotBody() {
  const scrollToBottom = ScrollToBottom();
  const {
    chatbotDivData,
    conversation,
    threadRunStatus,
    askOnIdle,
    wantToConnectAgent,
    connectToAgentForm,
    respondToHelp,
  } = useContext(ChatBotContext);
  const renderMessageHandler = (data, i) => {
    switch (data.role) {
      case "assistant":
        return <BotAns key={i} msg={data.message} />;
      case "user":
        return <UserQue key={i} msg={data.message} />;
      default:
        return null;
    }
  };

  // const scrollToBottom = () => {
  //   const element = document.getElementById("queAnsWrapper");
  //   element.scrollTop = element.scrollHeight;
  // };
  useEffect(() => {
    scrollToBottom();
  });
  return (
    <div className="chatbotContainer">
      <div className="queAnsWrapper" id="queAnsWrapper">
        {/* <BotAns msg="hello, how can I help you?" /> */}
        {/* {conversation?.map((data, i) => renderMessageHandler(data, i))} */}
        <div dangerouslySetInnerHTML={{ __html: chatbotDivData }}></div>
        {/* {initialChat()} */}
        {/* {htmlToJsx( chatbotDivData)} */}
        {/* <NoDataFound /> */}
        {/* <UserFeedBack /> */}
        {/* <MakeYourChoice /> */}
        {/* <AgentNotAvailable /> */}
        {threadRunStatus && <BotAnsSkeleton />}
        {askOnIdle && <AskQuestionOnIdleTemplate />}
        {respondToHelp && <RespondToHelp />}
        {connectToAgentForm && <UserGetDataForm />}
      </div>
      <InputBar scrollToBottom={scrollToBottom} />
    </div>
  );
}

export default ChatBotBody;
