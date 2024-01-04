import React, { useEffect } from "react";

const ChatBotComponent = () => {
  useEffect(() => {
    const loadChatBot = () => {
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || {
        widgetcode:
          "a96c22401c40db28ed2fe7accfc89177f59f438ba2d8fb44766784f245cd99b81a2010ab7b6727677d37b27582c0e9c4",
        values: {},
        ready: function () {},
      };

      const d = document;
      const s = d.createElement("script");
      s.type = "text/javascript";
      s.id = "zsiqscript";
      s.defer = true;
      s.async = true;
      s.src = "https://salesiq.zoho.com/widget";

      const t = d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(s, t);
    };

    loadChatBot();
  }, []);

  return <div>{/* Your component JSX */}</div>;
};

export default ChatBotComponent;
