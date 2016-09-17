"use strict"

const sqlite = require('sqlite3').verbose()
class DBModel {
  constructor(tableName){
    this.file = './db/student.db'
    this.connection = new sqlite.Database(this.file)
    this.tableName = tableName
  }

  init(){
    let statement = 'CREATE TABLE IF NOT EXISTS students(id INT PRIMARY KEY AUTINCREMENT, firstname TEXT, lastname TEXT, cohort_id INT);'
    this.connection.run(statement, (err)=>{
      if (err) {
        console.log(err)
      } else {
        console.log('table students created');
      }
    })

    statement = 'CREATE TABLE IF NOT EXISTS cohorts (id INT PRIMARY KEY AUTINCREMENT, name TEXT);'
    this.connection.run(statement, (err)=>{
      if (err) {
        console.log(err)
      } else {
        console.log('table cohorts created');
      }
    })
  }


list(){
  this.connection.all(`SELECT * FROM ${this.tableName}`, (err, result)=>{
    console.log(result)
  })
}


create(data){
  if(this.tableName =='students'){
  let statement = `INSERT INTO students(firstname, lastname, cohort_id) VALUES ('${data.firstname}', '${data.lastname}', ${data.cohort_id});`
  this.connection.run(statement, (err, result)=>{
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  })
} else if(this.tableName == 'cohorts'){
  let statement = `INSERT INTO cohorts(name) VALUES ('${data.name}');`
  this.connection.run(statement, (err, result)=>{
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  })
} else{
  console.log('Inputan tidak sesuai');
}
}

delete(id){
  this.connection.run(`DELETE FROM ${this.tableName} WHERE id = ${id}`, (err)=> {
    if (err) {
      console.log(err)
    } else {
      console.log('Data Deleted')
    }
  })
}

 update(id, data){
   if (this.tableName == 'students'){
  this.connection.run(`UPDATE students SET firstname = '${data.firstname}', lastname = '${data.lastname}', cohort_id = ${data.cohort} WHERE id = ${id}`, (err)=> {
    if (err) {
      console.log(err)
    } else {
      console.log('student updated');
    }
  })
}else if (this.tableName == 'cohorts'){
  this.connection.run(`UPDATE cohorts SET name = '${data.name}' WHERE id = ${id}`, (err)=> {
    if (err) {
      console.log(err)
    } else {
      console.log('cohort updated');
    }
  })
}else {
  console.log('Input tidak sesuai');
}
}
viewAll(){
  this.connection.all(`SELECT s.id, s.firstname, s.lastname, c.name FROM students s join cohorts c on s.cohort_id = c.id`, (err, result)=> {
      if (err){
        console.log(err)
      } else {
        console.log(result);
      }
  })
}

}

export default DBModel
