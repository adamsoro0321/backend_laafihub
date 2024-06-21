const DB = process.env.NODE_ENV === 'production' ? {
    password: process.env.PROD_DB_PASSWORD,
    port: process.env.PROD_DB_PORT,
    host: process.env.PROD_DB_HOST,
    username: process.env.PROD_DB_USERNAME,
    database: process.env.PROD_DB_DATABASE,
    dialect: process.env.PROD_DB_DIALECT
} : {
    password: process.env.DEV_DB_PASSWORD,
    port: process.env.DEV_DB_PORT,
    host: process.env.DEV_DB_HOST,
    username: process.env.DEV_DB_USERNAME,
    database: process.env.DEV_DB_DATABASE,
    dialect: process.env.DEV_DB_DIALECT
};


  
module.exports = DB;


/**
 *1.0
 CREATE DATABASE laafisebe;
CREATE ROLE laafisebe WITH LOGIN PASSWORD 'laafisebe@23';
GRANT ALL PRIVILEGES ON DATABASE "laafisebe" TO laafisebe;
 */
/**
 * 
 * 2.0 
 *  CREATE DATABASE laafi;
CREATE ROLE admin WITH LOGIN PASSWORD '123456';
GRANT ALL PRIVILEGES ON DATABASE "laafi" TO admin;

CREATE DATABASE laafi;
CREATE ROLE roland WITH LOGIN PASSWORD '123456';
GRANT ALL PRIVILEGES ON DATABASE "laafi" TO roland;
ERROR:  database "laafi" already exists
 */

/**
 * 
 * aws 
 * ====
 * username: laafisebe
 * password:laafisebe23
 */