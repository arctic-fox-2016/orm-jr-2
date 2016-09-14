"use strict"

class Cohorts {
  constructor(cohortname){
    this.cohortname = cohortname
  }

  static save(db, object){
    //If the id does not exist, create new row, If it already exists, update the row
    db.run("INSERT INTO cohorts (cohortname) VALUES ($cohortname);", {$cohortname: object.cohortname}, function(err){
      if(err){
        console.log(err)
      } else {
        console.log("INSERT IS SUCCESSFUL")
      }
    })
  }

  static update(db, id, cohortname){
    db.run("UPDATE cohorts SET cohortname = $cohortname WHERE id = $id", {$cohortname: cohortname, $id: id}, function(err){
      if(err){
        console.log(err)
      } else {
        console.log("UPDATE IS SUCESSFUL")
      }
    })
  }

  static delete(db, id){
    db.run("DELETE FROM cohorts WHERE id = $id", {$id: id}, function(err){
      if(err){
        console.log(err)
      }
    })
  }

  static isIdExist(db, id, callback){
    db.all("SELECT id FROM students WHERE id = $id;",{$id: id}, function(err, data){
      if(err){
        console.log(err)
      } else {
        if (data.length == 0){
          callback(false)
        } else {
          console.log("000")
          callback(true)
        }
      }
    })
  }

  static readTable(db){
    db.all("SELECT * FROM cohorts", function (err, data){
      if(err){
        console.log(err)
      } else {
        console.log(data)
      }
    })
  }
}

export default Cohorts
