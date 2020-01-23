----------

|||info

### Reset database
If you make a mistake while editing the EPCars database or just want to reset the database back to its original state, click the “Reset EPDriver Database” button below.

{Reset EPDriver Database}(node .guides/sqltests/fw-sql-reset-epdriver.js) 

|||


### Introducing the `UPDATE` SQL keyword

The `UPDATE` SQL keyword lets us __update the records from existing database tables__.

Let's inspect the data from the `trips` table.

First, do a `USE EPDriver;` to _use_ the appropiate database and then:

```
mysql> SELECT * FROM trips;
```

You should see this output:

```
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

We'll keep an eye on the `id`'s where the user hasn't finished the trip yet. 
Can you guess which `id`'s these are?

## Updating Data

Let's take a closer look at the `trips` table `id`'s where the user hasn't finished the trip yet:

Execute the `SELECT * FROM trips WHERE trip_datetime_end IS NULL;` statement to accomplish this:

```
+----+---------------------+---------------------+-----------------+
| id | trip_datetime_start | trip_datetime_end   | trip_total_fare |
+----+---------------------+---------------------+-----------------+
|  4 | 2015-09-15 22:56:33 | NULL                |            0.00 |
|  7 | 2015-09-15 15:48:41 | NULL                |            0.00 |
|  9 | 2015-09-15 10:00:08 | NULL                |            0.00 |
+----+---------------------+---------------------+-----------------+
3 rows in set (0.00 sec)
```

|||info
### Selecting `NULL` values:

We learned that the `WHERE` clause let us create conditional statements using _SQL query operators_. 

However, __when looking specifically for `NULL` values__, the `SELECT column_names FROM WHERE column_name IS NULL` statement  applies. 

In conclusion, the `IS` operator is designed specifically for matching `NULL` values because they are not strings nor other data types but `NULL`.

|||

We know that the `trips` table `id`'s that are missing the `trip_datetime_end` and `total_fare` values are `4`, `7` and `9`.

In the `mysql>` prompt, execute an `UPDATE` SQL statement to mark the trip `7` as finished with a _datetime_ format. This time, let's do a __multi-line query__ (press enter after each line and end the statement with a semicolon):

```
mysql> UPDATE trips 
    -> SET trip_datetime_end = '2015-09-15 23:15:33' 
    -> WHERE id = 7;
```

And you should see this:

```
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```

Let's understand each of the `UPDATE` statement parts:

1. `UPDATE trips`
Begin the SQL update statement specifying the table name
2. `SET trip_datetime_end = '2015-09-15 23:15:33'`
The `SET` keyword gives the instruction for _setting_ new values to rows. In this case, the values are a `DATETIME` data type with the format: 'YYYY-MM-DD 00:00:00'. _Single or double quotes are required_.
3. `WHERE id = 7;`
Finally, the `WHERE` clause specifies the specific row to be updated. In this case, where the `id` column equals 7

|||info
### Notice the `WHERE` clause in the SQL `UPDATE` statement
The `WHERE` clause specifies the records that should be updated. 

__By omitting the `WHERE` clause, all records will be updated.__
|||


<details><summary>**SQL Statements Reminder**</summary><ul><li>`SHOW DATABASES;`</li><li>`USE name;`</li><li>`SHOW TABLES;`</li><li>`source file-name.sql`</li><li>`SELECT * FROM table WHERE column = 'value';`</li></ul></details>


{Check It!|assessment}(parsons-puzzle-2650837085)
