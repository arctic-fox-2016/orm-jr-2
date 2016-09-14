"use strict"


//write your code here


class DBModel {
  constructor(sqlite,file){
    
    this.connection = new sqlite.Database(file);
  }

  static init (connection){

    let CREATE_TABLE_COHORT = "CREATE TABLE IF NOT EXISTS cohorts (id INTEGER PRIMARY KEY AUTOINCREMENT,cohorts_name VARCHAR(100));"

    let CREATE_TABLE_STUDENTS = "CREATE TABLE IF NOT EXISTS students ( id INTEGER PRIMARY KEY AUTOINCREMENT, first_name VARCHAR(100),last_name VARCHAR(100),cohorts_id INTEGER, FOREIGN KEY (cohorts_id) REFERENCES cohorts(id) );"


    connection.run (CREATE_TABLE_COHORT, function(err){
      if (err){
        console.log(err);
      } else {
        console.log('CREATE TABLE COHORT');
      }
    })

    connection.run (CREATE_TABLE_STUDENTS, function(err){
      if (err){
        console.log(err);
      } else {
        console.log('CREATE TABLE STUDENTS');
      }
    })
  }

  static all(connection,namatable) {
    //console.log(object);
    let SELECT_ALL = `SELECT * FROM ${namatable}`

      connection.all(SELECT_ALL,function(err,result){
        if (err){
          console.log(err);
        } else {
          console.log("=============== List Cohort Name ===================");
          for (var i = 0; i < result.length; i++) {
            console.log(`No. ${i+1} || ${result[i].cohorts_name} || ID Cohort : ${result[i].id}`);
          }

        }
      });
    }

    static create(connection,object,namatable) {

      //console.log(object);
      let INSERT_TABLE =`INSERT INTO ${namatable} (cohorts_name) VALUES(${object.cohorts_name})`

        connection.run(INSERT_TABLE, {
        //  $cohorts_name:object.cohorts_name,
        },function(err,result){
          if (err){
            console.log(err);
          } else {
            console.log(result);
          }
        });
    }

  static update(connection,where,changeto,namatable) {
    //console.log(object);
    // let UPDATE = 'UPDATE COHORTS SET cohorts_name = $changeto WHERE $where'
    let UPDATE = `UPDATE ${namatable} SET cohorts_name = '${changeto}' WHERE ID=${where}`;


    console.log(UPDATE);
      connection.run(UPDATE,function(err,result){
        if (err){
          console.log(err);
        } else {
          console.log("File Updated");
        }
      });
    }



   static delete(connection,where,namatable) {
    //console.log(object);
    let DELETE = `DELETE FROM ${namatable} WHERE ID=${where}`
    console.log(DELETE)
      connection.run(DELETE,{},function(err,result){
        if (err){
          console.log(err);
        } else {
          console.log("File  DELeTE");
        }
      });
    }


  static connection(){
    return this.connection
  }

}

export default DBModel
