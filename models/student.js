"use strict"
import DBModel from "./db_model.js";


class Student extends DBModel{
  constructor(firstname, lastname, cohort_id ){
    super("students")
    this.firstname = firstname,
    this.lastname = lastname,
    this.cohort_id = cohort_id
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
  viewAll(){
    super.viewAll()
  }
}

export default Student
