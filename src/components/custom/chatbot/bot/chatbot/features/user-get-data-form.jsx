import React from "react";

function UserGetDataForm() {
  return (
    <>
      <div className="userGetDataForm formWrapper">
        <p>Please fill this form to get connected.</p>
        <div>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="mobile" />
          <input type="text" placeholder="Message" />
          <button>Connect</button>
        </div>
      </div>
      {/* {FormSubmission()} */}
    </>
  );
}

export default UserGetDataForm;

function FormSubmission() {
  return (
    <div className="userFeedback mt-20 mb-20">
      <div className=" botAns">
        <div className="sectionDiv ">
          <p>Your ticket is generated.</p>

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
        <p>You will get notified when agent is available.</p>
      </div>
    </div>
  );
}
