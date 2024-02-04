### Numeric Types
- **TINYINT**: -128 to 127 (signed), 0 to 255 (unsigned)
- **SMALLINT**: -32,768 to 32,767 (signed), 0 to 65,535 (unsigned)
- **MEDIUMINT**: -8,388,608 to 8,388,607 (signed), 0 to 16,777,215 (unsigned)
- **INT/INTEGER**: -2,147,483,648 to 2,147,483,647 (signed), 0 to 4,294,967,295 (unsigned)
- **BIGINT**: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (signed), 0 to 18,446,744,073,709,551,615 (unsigned)
- **DECIMAL(M, D)/NUMERIC(M, D)**: Fixed-point number (M is the maximum number of digits, D is the number of digits after the decimal point)
- **FLOAT(M, D)**: Single-precision floating-point number
- **DOUBLE(M, D)**: Double-precision floating-point number
- **BIT(M)**: Bit field (M ranges from 1 to 64)

### Date and Time Types
- **DATE**: '1000-01-01' to '9999-12-31'
- **TIME**: '-838:59:59' to '838:59:59'
- **DATETIME**: '1000-01-01 00:00:00' to '9999-12-31 23:59:59'
- **TIMESTAMP**: '1970-01-01 00:00:01' UTC to '2038-01-19 03:14:07' UTC
- **YEAR**: 1901 to 2155

### String Types
- **CHAR(M)**: Fixed-length string (M ranges from 0 to 255)
- **VARCHAR(M)**: Variable-length string (M ranges from 0 to 65,535)
- **TINYTEXT**: Max length 255 characters
- **TEXT**: Max length 65,535 characters
- **MEDIUMTEXT**: Max length 16,777,215 characters
- **LONGTEXT**: Max length 4,294,967,295 characters
- **BINARY(M)**: Binary byte string (fixed length)
- **VARBINARY(M)**: Binary byte string (variable length)
- **TINYBLOB**: Max length 255 bytes
- **BLOB**: Max length 65,535 bytes
- **MEDIUMBLOB**: Max length 16,777,215 bytes
- **LONGBLOB**: Max length 4,294,967,295 bytes

### JSON Type
- **JSON**: Stores an exact copy of the input text, which must be a valid JSON document.

### Spatial Data Types
- Spatial types such as **GEOMETRY**, **POINT**, **LINESTRING**, **POLYGON**, etc., for storing geographical data.
