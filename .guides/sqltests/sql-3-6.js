var sqltest = require('./fw-sqltests.js');

var tasks = [
	[
		"Insert into the App.settings table the specified values",
		"SELECT * FROM App.settings WHERE user_id = 99 AND email_frequency = 15 AND layout = 'horizontal' AND updated_at = '2015-09-15 04:01:04'"
	]
];

sqltest.init(tasks, "App");