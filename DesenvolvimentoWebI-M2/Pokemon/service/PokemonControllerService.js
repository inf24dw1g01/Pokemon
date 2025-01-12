'use strict';
const sql = require('../utils/dbconnect');

/**
 * Create Pokemon
 *
 * body Pokemon  (optional)
 * returns Pokemon
 **/
exports.createPokemon = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO pokemon (nome,tipo1, tipo2) Values(? , ? , ?)", [body.nome, body.tipo1, body.tipo2], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
}


/**
 * Delete Pokemon
 *
 * id_pokemon Long 
 * no response value expected for this operation
 **/
exports.deletePokemon = function(id_pokemon) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM pokemon WHERE id_pokemon = ?", [id_pokemon], function (err, res){
      if (err || !res.affectedRows) {
        console.log(err)
        console.log(res);
        reject();
      }
    }) 
  });
}

/**
 * Retrieve Pokemon
 *
 * returns List
 **/
exports.retrievePokemon = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM pokemon",  function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    }) 
  });
}


/**
 * Retrieve Pokemon by ID
 *
 * id_pokemon Long 
 * returns Pokemon
 **/
exports.retrievePokemonID = function(id_pokemon) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM pokemon WHERE id_pokemon = ?", [id_pokemon], function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    }) 
  });
}


/**
 * Update Pokemon
 *
 * body Pokemon  (optional)
 * id_pokemon Long 
 * no response value expected for this operation
 **/
exports.updatePokemon = function(body,id_pokemon) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE pokemon set nome = ?, tipo1 = ?, tipo2 = ? WHERE id_pokemon = ?", [body.nome, body.tipo1, body.tipo2, id_pokemon], function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(id_pokemon);
      }
    }) 
  });
  }
