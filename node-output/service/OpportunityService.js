'use strict';


/**
 * opportunities Page Meta data
 *
 * returns inline_response_200_2
 **/
exports.dashboardMetaData = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "potentialRevenue" : {
      "wRUV" : "14.9",
      "value" : "$738"
    },
    "statusCounts" : [ {
      "statusId" : 1,
      "count" : 10
    }, {
      "statusId" : 1,
      "count" : 10
    } ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find all opportunities
 *
 * body Object  (optional)
 * returns inline_response_200
 **/
exports.findAllOpportunities = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "educationalTips" : [ {
      "description" : "Patient appears to be partially responding or appears to have minor complication",
      "label" : "Educational Tips: E&M - Review of System",
      "isHelpful" : false
    }, {
      "description" : "Patient appears to be partially responding or appears to have minor complication",
      "label" : "Educational Tips: E&M - Review of System",
      "isHelpful" : false
    } ],
    "chartId" : 1,
    "patientInfo" : {
      "firstName" : "Andrew",
      "lastName" : "Lange",
      "gender" : "M",
      "dateOfService" : "24-May-2021",
      "age" : 39
    },
    "opportunities" : [ {
      "charts" : [ {
        "name" : "Main notes",
        "url" : "https://example.com/example.pdf"
      }, {
        "name" : "Main notes",
        "url" : "https://example.com/example.pdf"
      } ],
      "peerReviewRequest" : {
        "firstName" : "M.",
        "lastName" : "Singh",
        "imageUrl" : "imageUrl",
        "designation" : "MD"
      },
      "comment" : "Patient appears to be partially responding or appears to have minor complication.",
      "category" : "Critical Care: Insufficient critical care statement"
    }, {
      "charts" : [ {
        "name" : "Main notes",
        "url" : "https://example.com/example.pdf"
      }, {
        "name" : "Main notes",
        "url" : "https://example.com/example.pdf"
      } ],
      "peerReviewRequest" : {
        "firstName" : "M.",
        "lastName" : "Singh",
        "imageUrl" : "imageUrl",
        "designation" : "MD"
      },
      "comment" : "Patient appears to be partially responding or appears to have minor complication.",
      "category" : "Critical Care: Insufficient critical care statement"
    } ]
  }, {
    "educationalTips" : [ {
      "description" : "Patient appears to be partially responding or appears to have minor complication",
      "label" : "Educational Tips: E&M - Review of System",
      "isHelpful" : false
    }, {
      "description" : "Patient appears to be partially responding or appears to have minor complication",
      "label" : "Educational Tips: E&M - Review of System",
      "isHelpful" : false
    } ],
    "chartId" : 1,
    "patientInfo" : {
      "firstName" : "Andrew",
      "lastName" : "Lange",
      "gender" : "M",
      "dateOfService" : "24-May-2021",
      "age" : 39
    },
    "opportunities" : [ {
      "charts" : [ {
        "name" : "Main notes",
        "url" : "https://example.com/example.pdf"
      }, {
        "name" : "Main notes",
        "url" : "https://example.com/example.pdf"
      } ],
      "peerReviewRequest" : {
        "firstName" : "M.",
        "lastName" : "Singh",
        "imageUrl" : "imageUrl",
        "designation" : "MD"
      },
      "comment" : "Patient appears to be partially responding or appears to have minor complication.",
      "category" : "Critical Care: Insufficient critical care statement"
    }, {
      "charts" : [ {
        "name" : "Main notes",
        "url" : "https://example.com/example.pdf"
      }, {
        "name" : "Main notes",
        "url" : "https://example.com/example.pdf"
      } ],
      "peerReviewRequest" : {
        "firstName" : "M.",
        "lastName" : "Singh",
        "imageUrl" : "imageUrl",
        "designation" : "MD"
      },
      "comment" : "Patient appears to be partially responding or appears to have minor complication.",
      "category" : "Critical Care: Insufficient critical care statement"
    } ]
  } ],
  "page" : {
    "totalRecords" : 100,
    "perPageRecords" : 10,
    "page" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

