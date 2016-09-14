"use strict"

class Cohort {
  constructor(name) {
    this._name = name;
  }

  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }

  static all(db, callback = null) {
    let stmt = "SELECT * FROM cohorts";
    let data = [];
    db.all(stmt, (err, rows) => {
      rows.forEach(function (row) {
        data.push(new Cohort(row.name));
      });
      if (callback) callback(data, false);
      else console.log(data);
    });
  }

  static create(db, object) {
    if (object instanceof Cohort) {
      let stmt = "INSERT INTO cohorts (name) VALUES(?)";
      db.run(stmt, object.name, (err) => {
        if (err) console.log(err);
      });
    }
  }

  static where(db, selectstmt, wherestmt, filtervalue, callback = null) {
    let stmt = `SELECT ${selectstmt} FROM cohorts WHERE ${wherestmt} = $filtervalue`;
    let data = [];
    db.all(stmt, {
      $filtervalue: filtervalue
    }, (err, rows) => {
      rows.forEach(function (row) {
        data.push(new Cohort(row.name))
      });
      if (callback) callback(data, false);
      else console.log(data);
    });
  }

  static find(db, selectstmt, wherestmt, filtervalue, callback = null) {
    let stmt = `SELECT ${selectstmt} FROM cohorts WHERE ${wherestmt} = $filtervalue`;
    let data = [];
    db.all(stmt, {
      $filtervalue: filtervalue
    }, (err, rows) => {
      rows.forEach(function (row) {
        data.push(new Cohort(row.name))
      });
      if (callback) callback(data, false);
      else console.log(data);
    });
  }

  static update(db, updatestmt, setvalue, wherestmt, filtervalue, callback = null) {
    let stmt = `UPDATE cohorts SET ${updatestmt} = $setvalue WHERE ${wherestmt} = $filtervalue`;
    let data = [];

    db.all(stmt, {
      $setvalue: setvalue,
      $filtervalue: filtervalue
    }, (err, rows) => {
      rows.forEach(function (row) {
        data.push(new Cohort(row.name))
      });
      if (callback) callback(data, false);
      else console.log(data);
    });
  }
}

export default Cohort
