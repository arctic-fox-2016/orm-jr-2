"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const repl = require ('repl');
const sqlite = require ('sqlite3').verbose();

let file = 'student.db';

let dbModel = new DBModel(sqlite,file);

DBModel.init(dbModel.connection);

//
// Cohort.create (dbModel.connection, new Cohort({
//   cohorts_name:"Math"
//
// }))
// // Student.create(dbModel.connection, new Student ({
// //   first_name: "Ivan",
// //   last_name: "Gerard",
// //   cohorts_id:"1"
// //
// // }))
// //
// //
// // Student.create(dbModel.connection, new Student ({
// //   first_name: "Gerard",
// //   last_name: "Steven",
// //   cohorts_id:"1"
// //
// // }))
// //
// //
Student.create(dbModel.connection, new Student ({
  first_name: "Ratih",
  last_name: "Sule",
  cohorts_id:"2"

}))

// Cohort.create (dbModel.connection, new Cohort({
//   cohorts_name:"Math"
// }))
// Cohort.create (dbModel.connection, new Cohort({
//   cohorts_name:"B.Indo"
//
// }))
// Cohort.create (dbModel.connection, new Cohort({
//   cohorts_name:"Biology"
// }))

// Cohort.all(dbModel.connection);
//Cohort.update(dbModel.connection,"6","Science");


let replServer = repl.start({prompt:">"})
replServer.context.dbModel = dbModel
replServer.context.DBModel = DBModel
replServer.context.Student = Student
replServer.context.Cohort = Cohort

replServer.context.deleteCohort = Cohort.delete



//Cohort.delete(dbModel.connection,"25");

//Student.all(dbModel.connection);
//Cohort.all(dbModel.connection);
