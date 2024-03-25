const app = require("./index");
require('dotenv').config()

const port =process.env.PORT ;

app.listen(port,()=>{console.log("app is running on port "+port)})  