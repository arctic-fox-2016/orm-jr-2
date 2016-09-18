"use strict"

import DBModel from "./db_model.js";

class Cohort extends DBModel {
  constructor(cohort, year) {
    super("cohorts")
    this.cohort = cohort
    this.year = year
    this.table = "cohorts"
  }
}

export default Cohort
