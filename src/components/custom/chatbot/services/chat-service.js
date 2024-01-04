const { BASE_URL, backEndAPI, assistantId } = require("../helper/global-var");

const createThread = async () => {
  try {
    let response = await fetch(`${backEndAPI}/thread`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await response.json();
    console.log("response", res);

    return res;
  } catch (err) {
    throw new Error(err.message || "internal server error");
  }
};

const createMessage = async (data) => {
  try {
    let response = await fetch(`${backEndAPI}/message`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await response.json();
    console.log("response", res);

    return res;
  } catch (err) {
    throw new Error(err.message || "internal server error");
  }
};

const createThreadRun = async (threadId) => {
  const data = {
    // threadId: "thread_jFKyuMeKEr96LRulyJvTLTVy",
    threadId,
    assistantId: assistantId,
    instructions: "test",
  };
  console.log("request", data);
  try {
    let response = await fetch(`${backEndAPI}/runthread`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await response.json();
    console.log("response", res);

    return res;
  } catch (err) {
    throw new Error(err.message || "internal server error");
  }
};

const checkRunStatus = async (runId, threadId) => {
  const data = {
    // threadId: "thread_jFKyuMeKEr96LRulyJvTLTVy",
    threadId,
    runId,
  };
  console.log("status data", data);
  try {
    let response = await fetch(`${backEndAPI}/checkrunstatus`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await response.json();
    console.log("response status run", res);

    return res;
  } catch (err) {
    throw new Error(err.message || "internal server error");
  }
};

const getMessages = async (threadId) => {
  try {
    let response = await fetch(
      // `${backEndAPI}/messages?threadId=thread_jFKyuMeKEr96LRulyJvTLTVy`
      `${backEndAPI}/messages?threadId=${threadId}`
    );

    let res = await response.json();
    console.log("response", res?.data);

    return res?.data || [];
  } catch (err) {
    throw new Error(err.message || "internal server error");
  }
};

module.exports = {
  createMessage,
  createThreadRun,
  getMessages,
  checkRunStatus,
  createThread,
};
