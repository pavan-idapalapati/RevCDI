'use strict';

var utils = require('../utils/writer.js');
var UserDetails = require('../service/UserDetailsService');

module.exports.userDetailsGET = function userDetailsGET (req, res, next) {
  UserDetails.userDetailsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
