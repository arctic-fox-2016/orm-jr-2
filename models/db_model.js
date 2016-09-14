"use strict"

const sqlite = require("sqlite3").verbose();

class DBModel {
  constructor(db_file) {
    this._connection = new sqlite.Database(db_file);
    DBModel.start(this._connection);
  }

  get connection() {
    return this._connection;
  }

  static start(db) {
    const fs = require("fs");
    const spawn = require("child_process").spawn;
    const child = spawn("sqlite3", ["student.db"]);
    let QUERY = fs.createReadStream("db/init.sql").pipe(child.stdin);
    return false;
  }
}

export default DBModel
