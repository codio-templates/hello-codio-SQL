USE EPDriver;
UPDATE trips SET trip_total_fare = 25.00 WHERE trip_datetime_end IS NULL;
