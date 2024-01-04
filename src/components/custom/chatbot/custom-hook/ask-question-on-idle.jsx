import React, { useContext, useEffect } from "react";
import { ChatBotContext } from "../chatbot-context";

function AskQuestionOnIdle() {
  // const { setActivePage } = useContext(ChatBotContext);
  // Set the idle time threshold (in milliseconds)
  const idleTimeThreshold = 5000; // 5 seconds
  let idleTimer;
  var events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"];

  function askQuestionOnIdle(addOnIdleHandler) {
    function resetIdleTimer() {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        // Run your function here
        console.log(
          "Screen has been idle for 5 seconds. Running the function..."
        );
        addOnIdleHandler();

        events.forEach(function (name) {
          console.log("event run");
          document.removeEventListener(name, resetIdleTimer, true);
        });
      }, idleTimeThreshold);
    }
    console.log("on reset");
    events.forEach(function (name) {
      document.addEventListener(name, resetIdleTimer, true);
    });
  }
  return askQuestionOnIdle;
}

export default AskQuestionOnIdle;
