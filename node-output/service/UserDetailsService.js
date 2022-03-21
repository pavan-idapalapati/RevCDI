"use strict";

/**
 * Get user details and unread responses
 *
 * returns inline_response_200_1
 **/
exports.userDetailsGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        unReadResponses: [
          {
            cdiSpecialist: {
              firstName: "Puru",
              lastName: "vanteru",
            },
            message: "Yes, we run all out opportunities through the...",
            timestamp: "10/03/2022 17:35:44",
          },
          {
            cdiSpecialist: {
              firstName: "Puru",
              lastName: "vanteru",
            },
            message: "Yes, we run all out opportunities through the...",
            timestamp: "10/03/2022 17:35:44",
          },
        ],
        userDetails: {
          firstName: "A.",
          lastName: "Osman",
          imageUrl: "/revcdi2/ProfileImage.svg",
          specialization: "MD",
          id: 1,
        },
      },
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
