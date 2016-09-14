"use strict"

let sqlite = require('sqlite3').verbose()
let fs = require('fs')

let file = 'db/contacts.db'
let db = new sqlite.Database(file)

let CREATE_STUDENTS_TABLE = "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT NOT NULL, cohort_id INTEGER, FOREIGN KEY(cohort_id) REFERENCES cohorts(id));"
let CREATE_COHORTS_TABLE = "CREATE TABLE IF NOT EXISTS cohorts (id INTEGER PRIMARY KEY AUTOINCREMENT, cohortname TEXT);"

let createTable = () => {
  db.serialize(function(){
    db.run(CREATE_STUDENTS_TABLE, function(err){
      if(err){
        console.log(err)
      } else {
        console.log("CREATE STUDENTS TABLE")
      }
    })

    db.run(CREATE_COHORTS_TABLE, function(err){
      if(err){
        console.log(err)
      } else {
        console.log("CREATE COHORTS TABLE")
      }
    })

  })
}

createTable()
