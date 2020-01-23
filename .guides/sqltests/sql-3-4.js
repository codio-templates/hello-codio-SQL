var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Change the name of the name column of the drivers table to driver_name and the specified data type",
    "show columns from EPDriver.drivers where Field = 'driver_name' and Type = 'varchar(125)'"
  ],
  [
    "Add a new driver_age column to the drivers table with the specified data type",
    "show columns from EPDriver.drivers where Field = 'driver_age' and Type = 'tinyint(2) unsigned'"
  ]
];

sqltest.init(tasks, "EPDriver");