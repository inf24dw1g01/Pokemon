'use strict';
const sql = require('../utils/dbconnect');

/**
 * Create Trainer
 *
 * body Trainer  (optional)
 * returns Trainer
 **/
exports.createTrainer = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO trainer (nome) Values(?)", [body.nome], function (err, res) {
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
 * Delete Trainer
 *
 * id_trainer Long 
 * no response value expected for this operation
 **/
exports.deleteTrainer = function(id_trainer) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM trainer WHERE id_trainer = ?", [id_trainer], function (err, res){
      if (err || !res.affectedRows) {
        console.log(err)
        console.log(res);
        reject();
      }
    }) 
  });
}


/**
 * Retrieve Trainer
 *
 * returns List
 **/
exports.retrieveTrainer = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM trainer",  function (err, res){
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
 * Retrieve Trainer by ID
 *
 * id_trainer Long 
 * returns Trainer
 **/
exports.retrieveTrainerID = function(id_trainer) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM trainer WHERE id_trainer = ?", [id_treinador], function (err, res){
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
 * Update Trainer
 *
 * body Trainer  (optional)
 * id_trainer Long 
 * no response value expected for this operation
 **/
exports.updateTrainer = function(body,id_trainer) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE trainer set nome = ?  WHERE id_trainer = ?", [body.nome, id_trainer], function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(id_trainer);
      }
    }) 
  });
  }
