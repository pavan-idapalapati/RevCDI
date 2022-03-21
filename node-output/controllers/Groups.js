'use strict';

var utils = require('../utils/writer.js');
var Groups = require('../service/GroupsService');

module.exports.findAllGroups = function findAllGroups (req, res, next, body) {
  Groups.findAllGroups(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
