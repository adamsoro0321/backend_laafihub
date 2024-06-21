const DB =()=> {
   
    if (process.env.NODE_ENV === 'production') {
        return {
            password:'pd3bcf4e787c6a9543d2619eb4958498a67dad0d40c67d48ea3b95150a1ce2aee',
            port:'5432',
            host:'cd1goc44htrmfn.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
            username:'uf77pse47kvi3v',
            database:'d35m3fasn63jlm',
            dialect:'postgres'
        }
    }

    return {
        password:'123456',
        port:'5050',
        host:'localhost',
        username:'postgres',
        database:'laafisebe',
        dialect:'postgres'
    }
}
module.exports={DB}; 

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