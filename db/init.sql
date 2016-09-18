DROP TABLE cohorts;
DROP TABLE students;

CREATE TABLE cohorts (
  cohort_id INTEGER PRIMARY KEY,
  cohort TEXT,
  year INTEGER
);

INSERT INTO cohorts (cohort, year) VALUES ("Math", 2016);

CREATE TABLE students (
  student_id INTEGER PRIMARY KEY,
  firstname TEXT,
  lastname TEXT,
  cohort_id INTEGER
);

INSERT INTO students (firstname, lastname, cohort_id) VALUES ("Rubi", "Henjaya", 1);
INSERT INTO students (firstname, lastname, cohort_id) VALUES ("Riza", "Fahmi", 1);
