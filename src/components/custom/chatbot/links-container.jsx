import React, { useContext } from "react";
import MainLink from "./main-link";
import RedirectLink from "./redirect-link";
import { ChatBotContext } from "./chatbot-context";
import TopBar from "./topbar";
import { redirectLinks } from "./data/redirect-links";
import Bot from "./bot/bot";
import { mainTabs } from "./data/main-tabs";

function LinksContainer() {
  const { activePage } = useContext(ChatBotContext);
  const renderUI = () => {
    switch (activePage) {
      case "home":
        return (
          <div className="mainLinks">
            {mainTabs.map((tab, i) => (
              <MainLink key={i} name={tab} />
            ))}
          </div>
        );
      case "Talk to Us":
        return <Bot />;
      case "Services":
      case "Solutions":
      case "Training":
        return (
          <div className="redirectLinks">
            {redirectLinks[activePage].map((link, i) => (
              <RedirectLink
                key={i}
                name={link.name}
                url={link.url}
                iClass={link.iClass}
                target={link?.target}
              />
            ))}
          </div>
        );
      default:
        return (
          <div className="mainLinks">
            {mainTabs.map((tab, i) => (
              <MainLink key={i} name={tab} />
            ))}
          </div>
        );
    }
  };
  return (
    <div className="linksContainer">
      <TopBar />
      {renderUI()}
    </div>
  );
}

export default LinksContainer;
