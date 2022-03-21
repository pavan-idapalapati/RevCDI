"use strict";

/**
 * Find all groups
 *
 * body Object  (optional)
 * returns inline_response_200_3
 **/
exports.findAllGroups = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: [
        {
          id: 1,
          description: "Critical Care",
        },
        {
          id: 2,
          description: "Discretionary Procedures",
        },
        {
          id: 3,
          description: "Incomplete Charts",
        },
        {
          id: 4,
          description: "Educational Tips",
        },
      ],
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
