const { Client } = require('pg');
const { DB } = require('../config');

const pgClient = new Client({
    user: DB.username,
    host: DB.host,
    database:DB.database,
    password: DB.password,
  //  port: DB.port
});

const initDB =async()=>{
   // await pgClient.connect()
 
  /*  try {
        const res = await pgClient.query('SELECT $1::text as message', ['Hello world!'])
        console.log(res.rows[0].message) // Hello world!
     } catch (err) {
        console.error(err);
     } finally {
        await pgClient.end()
     }*/
}

initDB()


 module.exports={pgClient };