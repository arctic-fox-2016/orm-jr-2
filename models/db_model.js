"use strict"

class DBModel {
  static connect(sqlite, file) {
    let db = new sqlite.Database(file)
    return db
  }

  static read(db, table) {
    db.all("SELECT * FROM " + table, function(err, data) {
      console.log(data)
    })
  }

  static create(db, obj) {
    if (obj.table == "students") {
      db.run("INSERT INTO students (firstname, lastname, cohort_id) VALUES ($firstname, $lastname, $cohort_id)", {
        $firstname: obj.firstname,
        $lastname: obj.lastname,
        $cohort_id: obj.cohort_id
      }, function(err, data) {
        console.log("Success create new student.")
      })
    } else if (obj.table == "cohorts") {
      db.run("INSERT INTO cohorts (cohort, year) VALUES ($cohort, $year)", {
        $cohort: obj.cohort,
        $year: obj.year
      }, function(err, data) {
        console.log("Success create new cohort.")
      })
    }
  }

  static updateById(db, obj) {
    if (obj.table == "students") {
      db.run("UPDATE students SET firstname = $firstname, lastname = $lastname, cohort_id = $cohort_id WHERE student_id = $student_id;", {
        $student_id: obj.student_id,
        $firstname: obj.firstname,
        $lastname: obj.lastname,
        $cohort_id: obj.cohort_id
      }, function(err, data) {
        console.log("Success update student entry.")
      })
    } else if (obj.table == "cohorts") {
      db.run("UPDATE cohorts SET cohort = $cohort, year = $year WHERE cohort_id = $cohort_id;", {
        $cohort_id: obj.cohort_id,
        $cohort: obj.cohort,
        $year: obj.year
      }, function(err, data) {
        console.log("Success update cohort entry.")
      })
    }
  }

  static deleteById(db, obj) {
    if (obj.table == "students") {
      db.run("DELETE FROM students WHERE student_id = $student_id;", {
        $student_id: obj.student_id
      }, function(err, data) {
        console.log("Success delete students with cohort entry.")
      })
    } else if (obj.table == "cohorts") {
      db.run("DELETE FROM cohorts WHERE cohort_id = $cohort_id;", {
        $cohort_id: obj.cohort_id
      }, function(err, data) {
        console.log("Success delete cohort entry.")
      })
    }
  }
}

export default DBModel
