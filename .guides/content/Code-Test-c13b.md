----------

## Code Test
{Check It!|assessment}(test-1780171264)

|||guidance

Correct answers:
`USE EPDriver;`

Single line statement:

`UPDATE trips SET trip_total_fare = 25.00 WHERE trip_datetime_end IS NULL;`

Multi-line statement:
```
mysql> UPDATE trips 
    -> SET trip_total_fare = 25.00 
    -> WHERE trip_datetime_end IS NULL;
```

|||


## Setting up mySQL Code Tests

This example used a short JavaScript file to specify the SQL commands that should be able to run without error if the student did the task correctly.

This file uses a more generic testing script `fw-sqltests.js` (which you are free to copy and use for your assignments).