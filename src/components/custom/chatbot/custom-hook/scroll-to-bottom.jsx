import React from "react";

function ScrollToBottom() {
  const scrollToBottom = () => {
    setTimeout(() => {
      const element = document.getElementById("queAnsWrapper");
      element.scrollTop = element.scrollHeight;
    }, 100);
  };
  return scrollToBottom;
}

export default ScrollToBottom;
