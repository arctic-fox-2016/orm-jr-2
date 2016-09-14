"use strict"

class Student {
  constructor(property = {}) {
    this._firstname = property["firstname"];
    this._lastname = property["lastname"];
    this._cohort_id = property["cohort_id"];
  }

  set firstname(value) {
    this._firstname = value;
  }
  get firstname() {
    return this._firstname;
  }
  set lastname(value) {
    this._lastname = value;
  }
  get lastname() {
    return this._lastname;
  }
  set cohort_id(value) {
    this._cohort_id = value;
  }
  get cohort_id() {
    return this._cohort_id;
  }

  static all(db, callback = null) {
    let stmt = "SELECT * FROM students";
    let data = [];
    db.all(stmt, (err, rows) => {
      rows.forEach(function (row) {
        data.push(new Student({
          "firstname": row.firstname,
          "lastname": row.lastname,
          "cohort_id": row.cohort_id
        }))
      });
      if (callback) callback(data, false);
      else console.log(data);
    });
  }

  static create(db, object) {
    if (object instanceof Student) {
      let stmt = "INSERT INTO students (firstname, lastname, cohort_id) VALUES(?, ?, ?)";
      db.run(stmt, [object.firstname, object.lastname, object.cohort_id], (err) => {
        if (err) console.log(err);
      });
    }
  }

  static where(db, selectstmt, wherestmt, filtervalue, callback = null) {
    let stmt = `SELECT ${selectstmt} FROM students WHERE ${wherestmt} = $filtervalue`;
    let data = [];
    db.all(stmt, {
      $filtervalue: filtervalue
    }, (err, rows) => {
      rows.forEach(function (row) {
        data.push(new Student({
          firstname: row.firstname,
          lastname: row.lastname,
          cohort_id: row.cohort_id
        }))
      });
      if (callback) callback(data, false);
      else console.log(data);
    });
  }

  static find(db, selectstmt, wherestmt, filtervalue, callback = null) {
    let stmt = `SELECT ${selectstmt} FROM students WHERE ${wherestmt} = $filtervalue`;
    let data = [];
    db.all(stmt, {
      $filtervalue: filtervalue
    }, (err, rows) => {
      console.log(stmt)
      rows.forEach(function (row) {
        data.push(new Student({
          firstname: row.firstname,
          lastname: row.lastname,
          cohort_id: row.cohort_id
        }))
      });
      if (callback) callback(data, false);
      else console.log(data);
    });
  }

  static update(db, updatestmt, setvalue, wherestmt, filtervalue, callback = null) {
    let stmt = `UPDATE students SET ${updatestmt} = $setvalue WHERE ${wherestmt} = $filtervalue`;
    let data = [];

    db.run(stmt, {
      $setvalue: setvalue,
      $filtervalue: filtervalue
    });
  }

}

export default Student
