'use strict';

var utils = require('../utils/writer.js');
var TipoController = require('../service/TipoControllerService');

module.exports.createTipo = function createTipo (req, res, next, body) {
  TipoController.createTipo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTipo = function deleteTipo (req, res, next, id_tipo) {
  TipoController.deleteTipo(id_tipo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTipo = function retrieveTipo (req, res, next) {
  TipoController.retrieveTipo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTipoID = function retrieveTipoID (req, res, next, id_tipo) {
  TipoController.retrieveTipoID(id_tipo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTipo = function updateTipo (req, res, next, body, id_tipo) {
  TipoController.updateTipo(body, id_tipo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
