DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;


CREATE TABLE buyer (
        bFname VARCHAR(30) NOT NULL,
        bLname VARCHAR(30) NOT NULL,
        bPhoneNumber INTEGER(7) NOT NULL,
        bAddress VARCHAR(200) NOT NULL,
        bCity VARCHAR(20) NOT NULL,
        bState VARCHAR(20) NOT NULL,
        bneedsDelivered BOOLEAN NOT NULL,
        PRIMARY KEY (bPhoneNumber)

);

Create TABLE seller(

        sFname VARCHAR(30) NOT NULL,
        sLname VARCHAR(30) NOT NULL,
        sPhoneNumber INTEGER(7) NOT NULL,
        sAddress VARCHAR(200) NOT NULL,
        sCity VARCHAR(20) NOT NULL,
        sState VARCHAR(20) NOT NULL,
        sCanDeliver BOOLEAN NOT NULL,
        PRIMARY KEY (sPhoneNumber)

);