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
 *
 CREATE DATABASE laafisebe;
CREATE ROLE laafisebe WITH LOGIN PASSWORD 'laafisebe@23';
GRANT ALL PRIVILEGES ON DATABASE "laafisebe" TO laafisebe;
 */