"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    headers: { contentType: "application/json" },
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
