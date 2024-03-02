const express= require('express')
const {appSequilize }= require('./src/sequelize');
const { AssureControllers } = require('./src/controllers/assureControlleur');
const bodyParser = require('body-parser');

//ms@Off45


const app =express()
const port =5000

app.use(bodyParser.json()) ;

 app.get('/api/v1/assure', (req,res)=> AssureControllers.getAllAssure(req,res));
 app.get('/api/v1/assure:id',(req,res)=>AssureControllers.getAssureById(req, res));
 app.put('/api/v1/assure:id',(req,res)=>AssureControllers.updatAssure(req,res));
 app.post('/api/v1/assure',(req,res)=>AssureControllers.createAssure(req,res));
 //           
app.listen(port,()=>{console.log("app is running on port "+port)})