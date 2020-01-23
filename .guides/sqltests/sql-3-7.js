var sqltest = require('./fw-sqltests.js');

var tasks = [
	[
		"Rename the settings table to be: user_settings",
		"SHOW COLUMNS FROM App.user_settings"
	]
];

sqltest.init(tasks, "App");