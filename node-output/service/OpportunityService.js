'use strict';


/**
 * Find all opportunities
 *
 * returns inline_response_200
 **/
exports.findAllOpportunities = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "reviewRequestedPhysicianName" : "M. Sing",
    "isPeerReviewRequested" : true,
    "patientInfo" : {
      "firstName" : "Andrew",
      "lastName" : "Lange",
      "gender" : "M",
      "dateOfService" : "24-May-2021",
      "age" : 39
    },
    "opportunities" : [ {
      "isEducationalTipAvailable" : false,
      "comment" : "Patient appears to be partially responding or appears to have minor complication.",
      "isHelpfulSelected" : false,
      "category" : "Critical Care: Insufficient critical care statement",
      "isNotHelpfulSelected" : false
    }, {
      "isEducationalTipAvailable" : false,
      "comment" : "Patient appears to be partially responding or appears to have minor complication.",
      "isHelpfulSelected" : false,
      "category" : "Critical Care: Insufficient critical care statement",
      "isNotHelpfulSelected" : false
    } ]
  }, {
    "reviewRequestedPhysicianName" : "M. Sing",
    "isPeerReviewRequested" : true,
    "patientInfo" : {
      "firstName" : "Andrew",
      "lastName" : "Lange",
      "gender" : "M",
      "dateOfService" : "24-May-2021",
      "age" : 39
    },
    "opportunities" : [ {
      "isEducationalTipAvailable" : false,
      "comment" : "Patient appears to be partially responding or appears to have minor complication.",
      "isHelpfulSelected" : false,
      "category" : "Critical Care: Insufficient critical care statement",
      "isNotHelpfulSelected" : false
    }, {
      "isEducationalTipAvailable" : false,
      "comment" : "Patient appears to be partially responding or appears to have minor complication.",
      "isHelpfulSelected" : false,
      "category" : "Critical Care: Insufficient critical care statement",
      "isNotHelpfulSelected" : false
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

