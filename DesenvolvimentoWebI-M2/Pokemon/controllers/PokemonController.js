'use strict';

var utils = require('../utils/writer.js');
var PokemonController = require('../service/PokemonControllerService');

module.exports.createPokemon = function createPokemon (req, res, next, body) {
  PokemonController.createPokemon(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePokemon = function deletePokemon (req, res, next, id_pokemon) {
  PokemonController.deletePokemon(id_pokemon)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievePokemon = function retrievePokemon (req, res, next) {
  PokemonController.retrievePokemon()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievePokemonID = function retrievePokemonID (req, res, next, id_pokemon) {
  PokemonController.retrievePokemonID(id_pokemon)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePokemon = function updatePokemon (req, res, next, body, id_pokemon) {
  PokemonController.updatePokemon(body, id_pokemon)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
