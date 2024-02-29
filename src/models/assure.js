

module.exports.AssureModel =(Sequelize,DataTypes,Assurance)=>{
     return Sequelize.define('Assure',{
                        idAssure:{
                             type:DataTypes.INTEGER,
                             primaryKey:true,
                             autoIncrement:true,
                        },
                        idAssurance:{
                             type:DataTypes.INTEGER ,
                             references:{
                                  model:Assurance,
                                  key:'idAssurance'
                             }
                        },
                        nom:DataTypes.STRING  ,
                        prenom:DataTypes.STRING,
                        tel:DataTypes.STRING,
                        email:DataTypes.STRING ,
                        adresse:DataTypes.STRING,

                },
                {})
 

}