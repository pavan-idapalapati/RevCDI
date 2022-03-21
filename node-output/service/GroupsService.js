'use strict';


/**
 * Find all groups
 *
 * body Object  (optional)
 * returns inline_response_200_3
 **/
exports.find all Groups = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "description" : "Critical Care",
    "id" : 1
  }, {
    "description" : "Critical Care",
    "id" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

