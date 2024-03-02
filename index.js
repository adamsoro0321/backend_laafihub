const express= require('express')
const {appSequilize }= require('./src/sequelize');
const { AssuranceControllers } = require('./src/controllers/assuranceControlleur');
const bodyParser = require('body-parser');

//ms@Off45


const app =express()
const port =5000

app.use(bodyParser.json()) ;

app.get('/', function(req,res){
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Bonjour</h1>')
 });

 app.get('/api/v1/assurance', (req,res)=> AssuranceControllers.getAllAssurance(req,res));
 app.get('/api/v1/assurance:id',(req,res)=>AssuranceControllers.getAssuranceById(req, res));
 app.put('/api/v1/assurance:id',(req,res)=>AssuranceControllers.updatAssurance(req,res));
 app.post('/api/v1/assurance',(req,res)=>AssuranceControllers.createAssurance(req,res));
 //           
app.listen(port,()=>{console.log("app is running on port "+port)})