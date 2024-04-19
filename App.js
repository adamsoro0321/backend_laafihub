const app = require("./index");
const { pgClient } = require("./src/db/db");
require('dotenv').config()

const port =5000 ;//process.env.PORT ;

/** listen event on database from psql 
pgClient.query('LISTEN  ')

pgClient.on('notif',async(data)=>{
    const payload =data.payload ;


} )*/

app.listen(port,()=>{console.log("app is running on port "+port)})  