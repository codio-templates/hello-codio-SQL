var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Set all the records from the trip_datetime_start column of the trips table to the specified values",
    "select * from EPDriver.trips where trip_datetime_start = '2015-09-14 00:00:00' and id < 5"
  ]
];

sqltest.init(tasks, "EPDriver");