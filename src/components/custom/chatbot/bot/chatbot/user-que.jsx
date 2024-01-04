import React from "react";

function UserQue({ msg = "" }) {
  return (
    <div>
      <div className="userQue">
        <div className="sectionDiv">
          <p className="text-white ">{msg}</p>
          <div className="imageWrapper">
            <img
              src={"/assets/img/chatbot/user.png"}
              alt="chatbot"
              width={28}
              height={28}
            />
          </div>
        </div>
      </div>
      <p className="time text-end">3.15 PM</p>
    </div>
  );
}

export default UserQue;
