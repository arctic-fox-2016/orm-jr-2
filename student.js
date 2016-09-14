"use strict"

class Students {
  constructor(firstname, lastname, cohort_id){
    this.firstname = firstname
    this.lastname = lastname
    this.cohort_id = cohort_id
  }

  static save(db, object){
    //If the id does not exist, create new row, If it already exists, update the row
    db.run("INSERT INTO students (firstname, lastname, cohort_id) VALUES ($firstname, $lastname, $cohort_id);", {$firstname: object.firstname, $lastname: object.lastname, $cohort_id: object.cohort_id}, function(err){
      if(err){
        console.log(err)
      } else {
        console.log("INSERT IS SUCCESSFUL")
      }
    })
  }

  static.update(db, id, firstname, lastname, cohort_id){
    db.run("UPDATE students SET firstname = $firstname, lastname = $lastname, cohort_id = $cohort_id WHERE id = $id", {$firstname: firstname, $lastname: lastname, $cohort_id: cohort_id, $id: id}, function(err){
      if(err){
        console.log(err)
      } else {
        console.log("UPDATE IS SUCESSFUL")
      }
    })
  }

  static delete(db, id){
    db.run("DELETE FROM students WHERE id = $id", {$id: id}, function(err){
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
          callback(true)
        }
      }
    })
  }

  static readTable(db){
    db.all("SELECT students.id, students.firstname, students.lastname, cohorts.cohortname FROM students INNER JOIN cohorts WHERE cohorts.id = students.cohort_id", function (err, data){
      if(err){
        console.log(err)
      } else {
        console.log(data)
      }
    })
  }
}


export default Students
