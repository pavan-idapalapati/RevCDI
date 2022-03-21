'use strict';

var utils = require('../utils/writer.js');
var Groups = require('../service/GroupsService');

module.exports.find all Groups = function find all Groups (req, res, next, body) {
  Groups.find all Groups(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
