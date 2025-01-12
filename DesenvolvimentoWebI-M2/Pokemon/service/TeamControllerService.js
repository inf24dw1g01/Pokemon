'use strict';
const sql = require('../utils/dbconnect');

/**
 * Create Team
 *
 * body Teams  (optional)
 * returns Teams
 **/
exports.createTeam = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO team (nome) Values(?)", [body.nome], function (err, res) {
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
 * Delete Team
 *
 * id_team Long 
 * no response value expected for this operation
 **/
exports.deleteTeam = function(id_team) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM team WHERE id_team = ?", [id_team], function (err, res){
      if (err || !res.affectedRows) {
        console.log(err)
        console.log(res);
        reject();
      }
    }) 
  });
}


/**
 * Retrieve Team
 *
 * returns List
 **/
exports.retrieveTeam = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM team",  function (err, res){
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
 * Retrieve Team by ID
 *
 * id_team Long 
 * returns Teams
 **/
exports.retrieveTeamID = function(id_team) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM team WHERE id_team = ?", [id_team], function (err, res){
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
 * Update Team
 *
 * body Teams  (optional)
 * id_team Long 
 * no response value expected for this operation
 **/
exports.updateTeam = function(body,id_team) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE team set nome = ? WHERE id_team = ?", [body.nome, id_team], function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(id_equipa);
      }
    }) 
  });
  }

