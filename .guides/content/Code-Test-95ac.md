----------



## Exercise 1: 

|||info
### Reset database
Reset the database back to its original state before executing the code test below, click the “Reset EPDriver Database” button below.

  {Reset EPDriver Database}(sh .guides/restart.sh) 

|||

Using the `EPDriver` database, update the `trip_total_fare` column of the `trips` table with a value of 25.00 where the `trip_datetime_end` is `NULL`


<table><tbody ><tr><td><details><summary>
	<strong>Solution</strong>
</summary>

Correct answer:

```
USE EPDriver;
UPDATE trips SET trip_total_fare = 25.00 WHERE trip_datetime_end IS NULL;
```
	
</details></td></tr></tbody>
</table>

Click the **Try It** button below to run your file with mysql.

{Try it  | terminal}(mysql EPDriver < /home/codio/workspace/codetest.sql --table)

## Setting up mySQL Code Tests

There are two ways you can write code tests for this activity.

1. The first way is to ask the students to add a `SELECT` statement that will output the newly updated table:

- Add this statement below your solution to output the newly created table: `SELECT * FROM trips;`





{Check It!|assessment}(code-output-compare-1875561210)


2. If you prefer not to have your students write a query to create output, we have provided a way to query the database directly to check for changes. The stack this Starter Pack is using already has those utilities installed but if you are using a different stack, you can install them using Tools->Install Software. More information can be found in the SQL section of [this document](https://docs.codio.com/instructors/authoring/assessments/standard-code-test.html)

{Check It!|assessment}(code-output-compare-2478681867)

3. You can also put the query in the command line on the execute tab as in the example below.

![.guides/img/sqlcommand](.guides/img/sqlcommand.png)

{Check It!|assessment}(code-output-compare-2921911000)
