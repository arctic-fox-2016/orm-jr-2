"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const repl = require('repl')

if (process.argv.length > 2) {
  if (process.argv[2] == "playtime") {
    let replServer = repl.start({
      prompt: "playtime > "
      })

    replServer.context.Student = Student
    replServer.context.student = new Student()
    replServer.context.Cohort = Cohort
    replServer.context.cohort = new Cohort()
    replServer.context.DBModel = DBModel

  }
}
