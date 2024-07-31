const app = require("./index");

const sendAppStart = require("./src/services/mailer/startEmail");


const port =process.env.PORT || 5000 ;
const HOST='127.0.0.1' ;

/** send email  */
const url=process.env.NODE_ENV='production'?process.env.APP_HOST:`http://${HOST}:${port}/` ;

(
    async()=>{
     /**creer un admin assurance tenvoie un email */
     
     // await sendAppStart(url)  ;
    }
)()





app.listen(port,()=>{console.log(`${url}`)})  