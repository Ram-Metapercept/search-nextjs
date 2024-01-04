import React, { useContext } from "react";
import chatService from "../../services/chat-service";
import { ChatBotContext } from "../../chatbot-context";
import AddRespondToChatbotConversation from "../../custom-hook/add-respond-to-chatbot-conversation";
function InputBar({ scrollToBottom }) {
  const { setConversation, setThreadRunStatus } = useContext(ChatBotContext);
  const addRespondToChatbotConversation = AddRespondToChatbotConversation();
  const createMessageHandler = async (e) => {
    e.preventDefault();

    try {
      // ===============create thread if not available in localStorage============
      let threadId = localStorage.getItem("threadId") || undefined;
      if (!threadId) {
        console.log("thread not found in localStorage");
        const res = await chatService.createThread();
        localStorage.setItem("threadId", res.id);
        threadId = res.id;
      }
      // ===========create message==============
      const form = new FormData(e.target);
      const data = {
        content: form.get("content"),
        threadId,
        // threadId: "thread_jFKyuMeKEr96LRulyJvTLTVy",
      };
      const res = await chatService.createMessage(data);
      console.log("create message response", res);
      addRespondToChatbotConversation({ role: "user", message: data.content });
      scrollToBottom();

      // ===========create thread run =========
      const threadRunRes = await chatService.createThreadRun(threadId);

      // ===========check run status============
      const runStatusHandler = async () => {
        setThreadRunStatus(true);
        const checkRunStatus = await chatService.checkRunStatus(
          threadRunRes.id,
          threadId
        );
        console.log("checkRunStatus", checkRunStatus.status);
        if (
          checkRunStatus.status === "failed" ||
          checkRunStatus.status === "canceled"
        ) {
          setThreadRunStatus(false);
          throw new Error("data not found");
        }
        if (checkRunStatus.status != "completed") {
          // If status is not completed, wait for 10 second and then recursively call runStatusHandler
          await new Promise((resolve) => setTimeout(resolve, 10000));
          await runStatusHandler();
        } else {
          setThreadRunStatus(false);
        }
      };

      await runStatusHandler();

      // ============get messages============
      const allMessages = await chatService.getMessages(threadId);
      let tempData = {
        role: allMessages[0]?.role,
        message: allMessages[0]?.content[0]?.text?.value,
      };
      console.log("tempData", tempData);
      addRespondToChatbotConversation({
        role: tempData?.role,
        message: tempData.message,
      });

      scrollToBottom();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="inputBar">
      <form onSubmit={createMessageHandler}>
        <input type="text" name="content" placeholder="Type your message" />
        <button>
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default InputBar;
