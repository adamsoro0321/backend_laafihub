const {Sequelize,DataTypes} = require('sequelize');
const {DB} =require('./config')
const {AssuranceModel} =require('./models/assurance')

const appSequelize = new Sequelize(DB.database, DB.username, DB.password, {
    host: DB.host,
    dialect:  DB.dialect,
    logging: false,
  });


  (async()=>{
    try {
        await appSequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})() 


const Assurance =AssuranceModel(appSequelize,DataTypes)


 appSequelize.sync({alter:true}).then(_=>console.log("sync succes"))
                                .catch((e)=>{
                                  console.log(error,"===>", e)
                                }) ;
                       
                                

module.exports ={
  appSequelize
}                                