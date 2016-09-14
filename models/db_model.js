"use strict"

class DBModel {
  static Cohortssave(db, object){
    //If the id does not exist, create new row, If it already exists, update the row
    db.run("INSERT INTO cohorts (cohortname) VALUES ($cohortname);", {$cohortname: object.cohortname}, function(err){
      if(err){
        console.log(err)
      } else {
        console.log("INSERT IS SUCCESSFUL")
      }
    })
  }

  static Cohortsupdate(db, id, cohortname){
    db.run("UPDATE cohorts SET cohortname = $cohortname WHERE id = $id", {$cohortname: cohortname, $id: id}, function(err){
      if(err){
        console.log(err)
      } else {
        console.log("UPDATE IS SUCESSFUL")
      }
    })
  }

  static Cohortsdelete(db, id){
    db.run("DELETE FROM cohorts WHERE id = $id", {$id: id}, function(err){
      if(err){
        console.log(err)
      }
    })
  }

  static CohortsisIdExist(db, id, callback){
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

  static CohortsreadTable(db){
    db.all("SELECT * FROM cohorts", function (err, data){
      if(err){
        console.log(err)
      } else {
        console.log(data)
      }
    })
  }

  static Studentssave(db, object){
    //If the id does not exist, create new row, If it already exists, update the row
    db.run("INSERT INTO students (firstname, lastname, cohort_id) VALUES ($firstname, $lastname, $cohort_id);", {$firstname: object.firstname, $lastname: object.lastname, $cohort_id: object.cohort_id}, function(err){
      if(err){
        console.log(err)
      } else {
        console.log("INSERT IS SUCCESSFUL")
      }
    })
  }

  static Studentsupdate(db, id, firstname, lastname, cohort_id){
    db.run("UPDATE students SET firstname = $firstname, lastname = $lastname, cohort_id = $cohort_id WHERE id = $id", {$firstname: firstname, $lastname: lastname, $cohort_id: cohort_id, $id: id}, function(err){
      if(err){
        console.log(err)
      } else {
        console.log("UPDATE IS SUCESSFUL")
      }
    })
  }

  static Studentsdelete(db, id){
    db.run("DELETE FROM students WHERE id = $id", {$id: id}, function(err){
      if(err){
        console.log(err)
      }
    })
  }

  static StudentsisIdExist(db, id, callback){
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

  static StudentsreadTable(db){
    db.all("SELECT students.id, students.firstname, students.lastname, cohorts.cohortname FROM students INNER JOIN cohorts WHERE cohorts.id = students.cohort_id", function (err, data){
      if(err){
        console.log(err)
      } else {
        console.log(data)
      }
    })
  }
}

export default DBModel
