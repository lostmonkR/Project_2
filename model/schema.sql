-- Drops  --
DROP DATABASE IF EXISTS FoodHub;
-- Creates  --
CREATE DATABASE FoodHub;


USE FoodHub;

-- TODO Create Tables --

CREATE TABLE buyer (
                       bFname VARCHAR(30) NOT NULL,
                       bLname VARCHAR(30) NOT NULL,
                       bPhoneNumber INTEGER(7) NOT NULL,
                       bAddress VARCHAR(200) NOT NULL,
                       bCity VARCHAR(20) NOT NULL,
                       bState VARCHAR(20) NOT NULL,
                       bneedsDelivered BOOLEAN NOT NULL

);

Create TABLE seller(

                       sFname VARCHAR(30) NOT NULL,
                       sLname VARCHAR(30) NOT NULL,
                       sPhoneNumber INTEGER(7) NOT NULL,
                       sAddress VARCHAR(200) NOT NULL,
                       sCity VARCHAR(20) NOT NULL,
                       sState VARCHAR(20) NOT NULL,
                       sCanDeliver BOOLEAN NOT NULL

);

