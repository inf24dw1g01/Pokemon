'use strict';
const sql = require('../utils/dbconnect');

/**
 * Create Tipo
 *
 * body Tipo  (optional)
 * returns Tipo
 **/
exports.createTipo = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO tipo (nome) Values(?)", [body.nome], function (err, res) {
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
 * Delete Tipo
 *
 * id_tipo Long 
 * no response value expected for this operation
 **/
exports.deleteTipo = function(id_tipo) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM tipo WHERE id_tipo = ?", [id_tipo], function (err, res){
      if (err || !res.affectedRows) {
        console.log(err)
        console.log(res);
        reject();
      }
    }) 
  });
}


/**
 * Retrieve Tipo
 *
 * returns List
 **/
exports.retrieveTipo = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM tipo",  function (err, res){
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
 * Retrieve Tipo by ID
 *
 * id_tipo Long 
 * returns tipo
 **/
exports.retrieveTipoID = function(id_tipo) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM tipo WHERE id_tipo = ?", [id_tipo], function (err, res){
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
 * Update Tipo
 *
 * body Tipo  (optional)
 * id_tipo Long 
 * no response value expected for this operation
 **/
exports.updateTipo = function(body,id_tipo) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE tipo set nome = ? WHERE id_tipo = ?", [body.nome, id_tipo], function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(id_tipo);
      }
    }) 
  });
  }

