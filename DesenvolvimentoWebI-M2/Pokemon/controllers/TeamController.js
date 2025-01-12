'use strict';

var utils = require('../utils/writer.js');
var TeamController = require('../service/TeamControllerService');

module.exports.createTeam = function createTeam (req, res, next, body) {
  TeamController.createTeam(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTeam = function deleteTeam (req, res, next, id_team) {
  TeamController.deleteTeam(id_team)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTeam = function retrieveTeam (req, res, next) {
  TeamController.retrieveTeam()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTeamID = function retrieveTeamID (req, res, next, id_team) {
  TeamController.retrieveTeamID(id_team)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTeam = function updateTeam (req, res, next, body, id_team) {
  TeamController.updateTeam(body, id_team)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
