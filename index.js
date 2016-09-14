"use strict"

import DBModel from "./models/db_model.js";
import Cohorts from "./models/cohort.js";
import Students from "./models/student.js";

let repl = require('repl')
let sqlite = require('sqlite3').verbose()
let fs = require('fs')
let file = 'db/contacts.db'
let db = new sqlite.Database(file)

let replServer = repl.start(">")
replServer.context.Cohorts = Cohorts
replServer.context.Students = Students
replServer.context.db = db

// Cohorts.save(db, new Cohorts("Physics"))
// Cohorts.save(db, new Cohorts("Chemistry"))
// Cohorts.save(db, new Cohorts("Biology"))
// Cohorts.save(db, new Cohorts("Math"))
DBModel.Studentssave(db, new Students("Soni","Setiawan","3"))
DBModel.Studentssave(db, new Students("Malik","Bum","1"))
DBModel.StudentsreadTable(db)
