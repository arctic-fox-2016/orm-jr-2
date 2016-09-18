"use strict"

import DBModel from "./db_model.js";

class Student extends DBModel {
  constructor(firstname, lastname, cohort_id) {
    super("students")
    this.firstname = firstname
    this.lastname = lastname
    this.cohort_id = cohort_id
    this.table = "students"
  }
}

export default Student
