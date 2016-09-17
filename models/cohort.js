"use strict"

import Student from "./student.js";
import DBModel from "./db_model.js";

class Cohort extends DBModel{
  constructor(name){
    super('cohorts')
    this.name = name
  }

  create(data){
    super.create(data)
  }
  find(id){
    super.find(id)
  }
  where(where){
    super.where(where)
  }
  list(){
    super.list()
  }
  delete(id){
    super.delete(id)
  }
  update(id, data){
    super.update(id,data)
  }
}

export default Cohort
