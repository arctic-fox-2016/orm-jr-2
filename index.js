"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const repl = require("repl");
const sqlite = require("sqlite3").verbose();

let dbModel = new DBModel("student.db");

class System {
  static clearScreen() {
    let lines = process.stdout.getWindowSize()[1];
    for (let idx = 0; idx < lines; idx++) console.log("\r\n");
    return true;
  }
  static printHead() {
    console.log("/////////  /////////   /////////     ///   ///   ///   /////////");
    console.log("/////////  /////////   //////////    ///   ///   ///   ///      ");
    console.log("      ///  ///   ///   ///     ///   ///   ///   ///   ///      ");
    console.log("      ///  ///   ///   ///    ///    ///   ///   ///   /////////");
    console.log("///   ///  /////////   /////////     /////////   ///         ///");
    console.log("/////////  ///   ///   ///    ///     ///////    ///         ///");
    console.log("/////////  ///   ///   ///     ///     /////     ///   /////////");
    console.log("\n       v.1.0. © Copyright 2016 Sahbana - Septhianto Diga");
    console.log("\n----------------------------------------------------------------\n");
    return true;
  }
}

if (process.argv.length > 2) {
  if (process.argv[2] == "playtime") {

    System.clearScreen();
    System.printHead();
    console.log("Welcome Tony.. Jarvis ready to serve you");

    let replServer = repl.start({
      prompt: "your command sir, "
    });

    //copy below in repl for testing purpose
    // allCohort(db.connection)
    // createCohort(db.connection, new Cohort("Tesla"))
    // whereCohort(db.connection,"*","name","Tesla")
    // findCohort(db.connection,"name","id",2)
    // updateCohort(db.connection,"name","Actic-Fox","id",2)
    //
    // allStudent(db.connection)
    // createStudent(db.connection, new Student({firstname: "Tevinstein",lastname:"Amos",cohort_id:1}))
    // whereStudent(db.connection,"*","id",2)
    // findStudent(db.connection,"*","id",2)
    // updateStudent(db.connection,"firstname","Sahbanagold","id",2)
    //

    replServer.context.db = dbModel;
    replServer.context.Student = Student;
    replServer.context.Cohort = Cohort;

    replServer.context.allStudent = Student.all;
    replServer.context.createStudent = Student.create;
    replServer.context.whereStudent = Student.where;
    replServer.context.findStudent = Student.find;
    replServer.context.updateStudent = Student.update;

    replServer.context.allCohort = Cohort.all;
    replServer.context.createCohort = Cohort.create;
    replServer.context.whereCohort = Cohort.where;
    replServer.context.findCohort = Cohort.find;
    replServer.context.updateCohort = Cohort.update;

    replServer.on("exit", () => {
      System.clearScreen();
      System.printHead();
      console.log("See you Tony!\n\n");
      process.exit();
    });
  }
}
