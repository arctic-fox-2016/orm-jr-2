"use strict"

const sqlite = require('sqlite3').verbose()

class DBModel {
  constructor(tableName){
    this.file = './db/student.db'
    this.connection = new sqlite.Database(this.file)
    this.tableName = tableName
  }

  init(){
    let sqlText = 'create table if not exists students(id integer primary key autoincrement, firstname text, lastname text, cohort_id integer);'
    this.connection.run(sqlText, function(err){
      if (err) {
        console.log(err)
      } else {
        console.log('students table created');
      }
    })

    // create cohorts table
    sqlText = 'create table if not exists cohorts (id integer primary key autoincrement, name text);'
    this.connection.run(sqlText, function(err){
      if (err) {
        console.log(err)
      } else {
        console.log('cohorts table created');
      }
    })
  }

  find(id){
    this.connection.all(`select * from ${this.tableName} where id = ${id}`,function(err,result){
      console.log(result)
    })
  }

  where(where){
    this.connection.all(`select * from ${this.tableName} where ${where}`,function(err,result){
      console.log(result)
    })
  }

  create(data){
    if(this.tableName == "students"){
      let sqlText = `insert into students (firstname, lastname, cohort_id) values ('${data.firstname}', '${data.lastname}', ${data.cohort_id});`
      this.connection.run(sqlText, function(err){
        if (err) {
          console.log(err);
        } else {
          console.log("New student data created");
        }
      })
    }
    else if(this.tableName == "cohorts"){
      let sqlText = `insert into cohorts(name) values ('${data.name}');`
      this.connection.run(sqlText, function(err){
        if (err) {
          console.log(err);
        } else {
          console.log("New cohorts data created");
        }
      })
    }
    else{
      console.log("Input yang dimasukkan salah!")
    }

  }

  //show all data in table students
  list(){
    this.connection.all(`select * from ${this.tableName}`, function(err, result){
      console.log(result)
    })
  }

  delete(id){
    this.connection.run(`delete from ${this.tableName} where id = ${id}`, function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Data Deleted')
      }
    })
  }

  // update from table student. Data is class Student
  update(id, data){
    if (this.tableName == "students"){
      this.connection.run('update students set firstname = $firstname, lastname = $lastname, cohort_id = $cohort_id where id = $d', {$firstname: data.firstname, $lastname: data.lastname, $cohort_id: data.cohort_id, $d:id}, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log('Data updated');
        }
      })
    }
    else if (this.tableName == "cohorts"){
        this.connection.run('update cohorts set name = $a where id = $b', {$a: data.name, $b:id}, function(err) {
          if (err) {
            console.log(err)
          } else {
            console.log('Data updated');
          }
        })
    }
    else{
      console.log("Input yang dimasukkan salah!")
    }
  }

  // view all students with cohort name
  viewAll(){
    this.connection.all('select a.id, a.firstname, a.lastname, b.name from students a join cohorts b on a.cohort_id = b.id', function(err, result) {
        if (err){
          console.log(err)
        } else {
          console.log(result);
        }
    })
  }

}

export default DBModel
