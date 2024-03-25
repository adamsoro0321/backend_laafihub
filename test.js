/*require('dotenv').config()
console.log(process.env.PORT) // remove this after you've confirmed it is working*/
/*const  { AdminAssurance,Assurance }  =require('./src/sequelize')                  

const { data } = require('./src/data/data');

data.admin_assurance.map((assurance)=>{AdminAssurance.create(assurance) })*/

/*const bcrypt =require('bcrypt') ;
const pwd="123456"

 const crypt=(plainText,salt)=> {
      bcrypt.hash(plainText,salt,(err,hash)=>{
          console.log(`hash =>${hash} `)
     }) ;
}

const hash =crypt(pwd,10)

const verify =(plainText,hash)=>{
      bcrypt.compare(plainText,hash,(err,result)=>{
             console.log(`result => ${result} `)
      })
}

//verify(pwd,'$2b$05$nc9F69WcsnT3QDitbGMWUuCleGmkzKljLruu.s9qT/txCG/rg3dFq')
*/
const jwt =require('jsonwebtoken'); 
const private_key=require('./src/auth/private_key')

const token =jwt.sign(
     {userId:'email1@example.com'},
     private_key,
     {expiresIn:'24h'}

)


console.log(`token ${token} `)