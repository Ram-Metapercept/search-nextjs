import React from "react";

function TopBar() {
  return (
    <div className="bg-indigo-500 p-4 shadow-lg rounded-lg">
      <div className="flex gap-4">
        <div>
          <img
            src={"/assets/img/chatbot/bot.png"}
            alt="chatbot"
            width={50}
            height={50}
          />
        </div>
        <div className="text-white">
          <h2 className="font-semibold text-2xl">Buddy</h2>
          <p>Metapercept chat buddy</p>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
