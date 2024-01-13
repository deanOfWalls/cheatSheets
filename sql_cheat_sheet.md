
# Comprehensive Guide to Useful SQL Commands

SQL (Structured Query Language) is a powerful tool for managing and manipulating relational databases. Here's a guide to some of the most useful SQL commands that you'll likely need for everyday work.

## Basics

### SELECT
Retrieve data from one or more tables.
```sql
SELECT column1, column2 FROM table_name;
```

### INSERT INTO
Insert new data into a table.
```sql
INSERT INTO table_name (column1, column2) VALUES (value1, value2);
```

### UPDATE
Update existing data within a table.
```sql
UPDATE table_name SET column1 = value1 WHERE condition;
```

### DELETE
Remove data from a table.
```sql
DELETE FROM table_name WHERE condition;
```

## Table Management

### CREATE TABLE
Create a new table.
```sql
CREATE TABLE table_name (
    column1 datatype CONSTRAINT,
    column2 datatype CONSTRAINT,
    ...
);
```

### ALTER TABLE
Modify an existing table (add, delete, or modify columns).
```sql
ALTER TABLE table_name ADD column_name datatype;
```

### DROP TABLE
Delete a table and its data.
```sql
DROP TABLE table_name;
```

## Advanced Data Manipulation

### JOIN
Combine rows from two or more tables based on a related column.
```sql
SELECT * FROM table1
JOIN table2 ON table1.column_name = table2.column_name;
```

### GROUP BY
Group rows that have the same values in specified columns into summary rows.
```sql
SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name;
```

### ORDER BY
Sort the result set of a query by specified column(s).
```sql
SELECT column1, column2 FROM table_name ORDER BY column1 ASC|DESC;
```

### DISTINCT
Return only distinct (unique) values.
```sql
SELECT DISTINCT column1 FROM table_name;
```

## Database Management

### CREATE DATABASE
Create a new database.
```sql
CREATE DATABASE database_name;
```

### DROP DATABASE
Delete a database.
```sql
DROP DATABASE database_name;
```

### USE
Select a database to use with the subsequent commands.
```sql
USE database_name;
```

## Indexes and Keys

### CREATE INDEX
Create an index on a table (to improve query performance).
```sql
CREATE INDEX index_name ON table_name (column1, column2);
```

### PRIMARY KEY
Set a primary key (unique identifier for rows in a table).
```sql
ALTER TABLE table_name ADD PRIMARY KEY (column);
```

### FOREIGN KEY
Set a foreign key (a key used to link two tables together).
```sql
ALTER TABLE table_name ADD CONSTRAINT fk_name FOREIGN KEY (column) REFERENCES other_table(column);
```

## Constraints

### NOT NULL
Ensure that a column cannot have NULL values.
```sql
ALTER TABLE table_name MODIFY column_name datatype NOT NULL;
```

### UNIQUE
Ensure that all values in a column are unique.
```sql
ALTER TABLE table_name ADD UNIQUE (column_name);
```

### CHECK
Ensure that all values in a column satisfy a specific condition.
```sql
ALTER TABLE table_name ADD CHECK (condition);
```

## Transactions

### BEGIN TRANSACTION
Start a new transaction.
```sql
BEGIN TRANSACTION;
```

### COMMIT
Commit the current transaction.
```sql
COMMIT;
```

### ROLLBACK
Roll back the current transaction.
```sql
ROLLBACK;
```

Remember, before performing operations that modify data or structure, it's good practice to back up your database. Additionally, always test your commands in a development environment before executing them in production.
