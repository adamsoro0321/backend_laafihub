const express= require('express')
let assurances= require('./data')
const { Sequelize}=require('sequelize')
const  psConfig = require('./config')

//ms@Off45

const app =express()
const port =3000

const sequelize = new Sequelize(psConfig.db, psConfig.username, psConfig.password, {
    host: psConfig.host,
    dialect: 'postgres',
  });

const test_connection =async()=>{
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
   } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
}
test_connection()


/*app.get('/',(req,res)=>{ return res.send("hi you 1")})
 
app.get('/api/assurances',(req,res)=> (res.send(assurances)))
app.get('/api/assurances/:id',(req,res)=>(
            res.send("hi you 1")))

             
            
app.listen(port,()=>{console.log("app is running on port "+port)})*/
