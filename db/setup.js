"use strict"

//write your code here
const repl = require ('repl');
const sqlite = require ('sqlite3').verbose();

let file = 'student.db';
let db = new sqlite.Database(file);

//SQL Statement
let CREATE_TABLE_STUDENTS = "CREATE TABLE IF NOT EXISTS students ( id INTEGER PRIMARY KEY AUTOINCREMENT, first_name VARCHAR(100),last_name VARCHAR(100), gender VARCHAR(1) );"

let CREATE_TABLE_COHORT = "CREATE TABLE IF NOT EXISTS cohorts (id INTEGER PRIMARY KEY AUTOINCREMENT,cohorts_name VARCHAR(100),student_id INTEGER ,FOREIGN KEY (student_id) REFERENCES cohorts(student_id));"


//CREATE TABLE
let createTable = () => {
  //RUN SQL one at a a time

  db.serialize(function() {
    // Create TABLE
    db.run (CREATE_TABLE_STUDENTS, function(err){
      if (err){
        console.log(err);
      } else {
        console.log('CREATE TABLE STUDENTS');
      }
    })

    db.run (CREATE_TABLE_COHORT, function(err){
      if (err){
        console.log(err);
      } else {
        console.log('CREATE_TABLE_HEADER_GROUPS TABLE');
      }
    })
  })
}

//SEED_DATA

let seedData = () => {
  //RUN SQL one at a a time

  db.serialize(function() {
    // Create TABLE

    db.run (SEED_DATA, function(err){
      if (err){
        console.log(err);
      } else {
        console.log('seed data');
      }
    })
  })
}

createTable();
