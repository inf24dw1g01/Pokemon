'use strict';

var utils = require('../utils/writer.js');
var TrainerController = require('../service/TrainerControllerService');

module.exports.createTrainer = function createTrainer (req, res, next, body) {
  TrainerController.createTrainer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTrainer = function deleteTrainer (req, res, next, id_trainer) {
  TrainerController.deleteTrainer(id_trainer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTrainer = function retrieveTrainer (req, res, next) {
  TrainerController.retrieveTrainer()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTrainerID = function retrieveTrainerID (req, res, next, id_trainer) {
  TrainerController.retrieveTrainerID(id_trainer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTrainer = function updateTrainer (req, res, next, body, id_trainer) {
  TrainerController.updateTrainer(body, id_trainer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
