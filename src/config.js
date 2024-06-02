const DB ={
    password:'123456',
    port:'5050',
    host:'localhost',
    username:'postgres',
    database:'laafisebe',
    dialect:'postgres'
}
module.exports={DB}; 

/**
 *1..0
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