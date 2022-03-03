'use strict';

var utils = require('../utils/writer.js');
var Opportunity = require('../service/OpportunityService');

module.exports.findAllOpportunities = function findAllOpportunities (req, res, next) {
  Opportunity.findAllOpportunities()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
