import React from "react";

function UserFeedBack() {
  return (
    <div className="userFeedback mt-20 mb-20">
      <div className=" botAns">
        <div className="sectionDiv ">
          <p>Thank you for the conversation!</p>

          <div className="imageWrapper ">
            <img
              src={"/assets/img/chatbot/bot.png"}
              alt="chatbot"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className="defaultMessage pb-10">
        <p>How satisfied are you with the help you received today?</p>
      </div>
      <div className="emojiRating">
        <i className="fa-regular fa-face-frown" title="Poor"></i>
        <i className="fa-regular fa-face-meh" title="Average"></i>
        <i className="fa-regular fa-face-smile" title="Good"></i>
      </div>
    </div>
  );
}

export default UserFeedBack;
