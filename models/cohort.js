"use strict"

import DBModel from "./db_model.js"
import Student from "./student.js";

class Cohort extends DBModel{
  constructor(component,sqlite,file){
    super(sqlite,file)
    this.cohorts_name=component['cohorts_name'];
  }

  static create(connection,object) {

    super.create(connection,object,"COHORTS")
  }

  static all(connection) {

    super.all(connection,"COHORTS")
    }

    static update(connection,where,changeto) {
      //console.log(object);
      super.update(connection,where,changeto,"COHORTS")
      }

      static delete(connection,where) {
        //console.log(object);
        super.delete(connection,where,"COHORTS")
        // super.delete()
      }

}

export default Cohort
