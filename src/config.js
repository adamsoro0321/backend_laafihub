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


