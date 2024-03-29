----------

|||info

### Reset database
If you make a mistake while editing the EPDriver database or just want to reset the database back to its original state, click the “Reset EPDriver Database” button below.

  {Reset EPDriver Database}(sh .guides/restart.sh) 

|||



## Introducing the `UPDATE` SQL keyword

The `UPDATE` SQL keyword lets us update the records from existing database tables.

Let's inspect the data from the `trips` table.

In the code window on the upper left, enter the following commands:

```markdown
USE EPDriver;
SELECT * FROM trips;
```
Click the **Try It** button below to run your file with mysql.

{Try it  | terminal}(mysql EPDriver < /home/codio/workspace/sample.sql --table)

You should see this output:

```markdown
+----+---------------------+---------------------+-----------------+
| id | trip_datetime_start | trip_datetime_end   | trip_total_fare |
+----+---------------------+---------------------+-----------------+
|  1 | 2015-09-15 03:20:59 | 2015-09-15 03:54:08 |           79.40 |
|  2 | 2015-09-15 20:44:17 | 2015-09-15 21:18:58 |           91.79 |
|  3 | 2015-09-15 04:01:04 | 2015-09-15 04:20:18 |           17.67 |
|  4 | 2015-09-15 22:56:33 | NULL                |            0.00 |
|  5 | 2015-09-15 21:12:33 | 2015-09-15 22:00:00 |           92.33 |
|  6 | 2015-09-15 07:14:59 | 2015-09-15 08:24:19 |           85.38 |
|  7 | 2015-09-15 15:48:41 | NULL                |            0.00 |
|  8 | 2015-09-15 09:40:55 | 2015-09-15 10:05:32 |           43.73 |
|  9 | 2015-09-15 10:00:08 | NULL                |            0.00 |
| 10 | 2015-09-15 14:57:24 | 2015-09-15 15:11:26 |            4.50 |
+----+---------------------+---------------------+-----------------+
10 rows in set (0.00 sec)
```

## Updating Data

Let's take a closer look at the `trips` table `id`'s where the user hasn't finished the trip yet:

Replace the `SELECT` statement in the code window with this `SELECT * FROM trips WHERE trip_datetime_end IS NULL;` statement to accomplish this.

{Try it  | terminal}(mysql EPDriver < /home/codio/workspace/sample.sql --table)

```markdown
+----+---------------------+---------------------+-----------------+
| id | trip_datetime_start | trip_datetime_end   | trip_total_fare |
+----+---------------------+---------------------+-----------------+
|  4 | 2015-09-15 22:56:33 | NULL                |            0.00 |
|  7 | 2015-09-15 15:48:41 | NULL                |            0.00 |
|  9 | 2015-09-15 10:00:08 | NULL                |            0.00 |
+----+---------------------+---------------------+-----------------+
3 rows in set (0.00 sec)
```


<details>
  
  <summary>Selecting <code>NULL</code> values</summary>

  We learned that the `WHERE` clause let us create conditional statements using _SQL query operators_. <br><br>However, __when looking specifically for `NULL` values__, the `SELECT column_names FROM trips WHERE column_name IS NULL` statement  applies. <br><br>In conclusion, the `IS` operator is designed specifically for matching `NULL` values because they are not strings nor other data types but `NULL`.

</details>


We know that the `trips` table `id`'s that are missing the `trip_datetime_end` and `total_fare` values are `4`, `7` and `9`.

Enter the code below in your code file, use the **TRY IT** button to execute the `UPDATE` SQL statement below to mark the trip `7` as finished with a _datetime_ format. This time, it is a __multi-line query__ which terminates with the semi-colon.

```markdown
UPDATE trips 
SET trip_datetime_end = '2015-09-15 23:15:33' 
WHERE id = 7;
SELECT * FROM trips;
```

{Try it  | terminal}(mysql EPDriver < /home/codio/workspace/sample.sql --table)

And you should see this:

```markdown
+----+---------------------+---------------------+-----------------+
| id | trip_datetime_start | trip_datetime_end   | trip_total_fare |
+----+---------------------+---------------------+-----------------+
|  1 | 2015-09-15 03:20:59 | 2015-09-15 03:54:08 |           79.40 |
|  2 | 2015-09-15 20:44:17 | 2015-09-15 21:18:58 |           91.79 |
|  3 | 2015-09-15 04:01:04 | 2015-09-15 04:20:18 |           17.67 |
|  4 | 2015-09-15 22:56:33 | NULL                |            0.00 |
|  5 | 2015-09-15 21:12:33 | 2015-09-15 22:00:00 |           92.33 |
|  6 | 2015-09-15 07:14:59 | 2015-09-15 08:24:19 |           85.38 |
|  7 | 2015-09-15 15:48:41 | 2015-09-15 23:15:33 |            0.00 |
|  8 | 2015-09-15 09:40:55 | 2015-09-15 10:05:32 |           43.73 |
|  9 | 2015-09-15 10:00:08 | NULL                |            0.00 |
| 10 | 2015-09-15 14:57:24 | 2015-09-15 15:11:26 |            4.50 |
+----+---------------------+---------------------+-----------------+
```

Let's understand each of the `UPDATE` statement parts:

1. `UPDATE trips`
Begin the SQL update statement specifying the table name
2. `SET trip_datetime_end = '2015-09-15 23:15:33'`
The `SET` keyword gives the instruction for _setting_ new values to rows. In this case, the values are a `DATETIME` data type with the format: 'YYYY-MM-DD 00:00:00'. _Single or double quotes are required_.
3. `WHERE id = 7;`
Finally, the `WHERE` clause specifies the specific row to be updated. In this case, where the `id` column equals 7
4. `SELECT * FROM trips;`
This will show you the updated table, note that the end time for row 7 has changed.

|||info
### Notice the `WHERE` clause in the SQL `UPDATE` statement
The `WHERE` clause specifies the records that should be updated. 

__By omitting the `WHERE` clause, all records will be updated.__
|||



{Check It!|assessment}(parsons-puzzle-2650837085)
