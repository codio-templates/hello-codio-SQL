var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Update the trip_total_fare column of the trips table with the specified values",
    "SELECT trip_total_fare FROM EPDriver.trips WHERE trip_total_fare = 25.00"
  ]
];

sqltest.init(tasks, "EPDriver");