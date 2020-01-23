var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Set the name column from the users table to John Doe, omit the WHERE clause",
    "select * from EPDriver.users where name = 'John Doe' and id = 7"
  ]
];

sqltest.init(tasks, "EPDriver");