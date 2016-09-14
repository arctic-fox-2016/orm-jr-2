"use strict"


class Student {
  constructor(component){
    this.first_name=component['first_name'],
    this.last_name=component['last_name'],
    this.cohorts_id=component['cohorts_id']
  }
  static create(connection,object) {

    //console.log(object);
    let INSERT_TABLE = 'INSERT INTO students (first_name,last_name,cohorts_id) VALUES ($first_name,$last_name,$cohorts_id)'
      connection.run(INSERT_TABLE, {
        $first_name:object.first_name,
        $last_name:object.last_name,
        $cohorts_id:object.cohorts_id
      });

  }


  static all(connection) {
    //console.log(object);
    let SELECT_ALL = 'SELECT * FROM STUDENTS INNER JOIN COHORTS ON STUDENTS.cohorts_id = COHORTS.id '
      connection.all(SELECT_ALL,function(err,result){
        if (err){
          console.log(err);
        } else {
          console.log("=============== List Student Name ===================");
          for (var i = 0; i < result.length; i++) {
            console.log(`No. ${i+1} || ${result[i].first_name} ${result[i].last_name} ||  Cohort : ${result[i].cohorts_name}`);
          }

        }
      });
    }

    static update(connection,where,changeto) {
      //console.log(object);
      let UPDATE = 'UPDATE STUDENTS SET cohorts_id = $changeto WHERE $where'
        connection.all(UPDATE,{
          $where:where,
          $changeto:changeto
        },function(err,result){
          if (err){
            console.log(err);
          } else {
            console.log("File Updated");

          }
        });
      }

      static delete(connection,where) {
        //console.log(object);
        let DELETE = 'DELETE FROM STUDENTS WHERE ID=$where '
          connection.all(DELETE,{
            $where:where
          },function(err,result){
            if (err){
              console.log(err);
            } else {
              console.log("File Updated DELeTE");
            }
          });
        }

}

export default Student
