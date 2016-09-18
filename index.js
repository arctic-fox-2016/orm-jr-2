"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const sqlite = require('sqlite3').verbose();
const repl = require('repl');

let db = DBModel.connect(sqlite, "db/student.db")

Cohort.create(db, new Cohort("Physics", 2016))
Student.create(db, new Student("Peter", "Raswono", 2))

Student.updateById(db, {
  student_id: 3,
  firstname: "Peter",
  lastname: "Ganteng",
  cohort_id: 2,
  table: "students"
})

Cohort.updateById(db, {
  cohort_id: 2,
  cohort: "Chemistry",
  year: 2017,
  table: "cohorts"
})

Student.deleteById(db, {
  student_id: 3,
  table: "students"
})
Cohort.deleteById(db, {
  cohort_id: 2,
  table: "cohorts"
})

DBModel.read(db, "students")
DBModel.read(db, "cohorts")
