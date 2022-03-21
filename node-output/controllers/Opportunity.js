'use strict';

var utils = require('../utils/writer.js');
var Opportunity = require('../service/OpportunityService');

module.exports.dashboardMetaDataGET = function dashboardMetaDataGET (req, res, next) {
  Opportunity.dashboardMetaDataGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAllOpportunities = function findAllOpportunities (req, res, next, body) {
  Opportunity.findAllOpportunities(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
