

module.exports.CategorieModel =(Sequelize,DataTypes,police)=>{
     return Sequelize.define('Categorie',{
                        id:{
                             type:DataTypes.INTEGER,
                             primaryKey:true,
                             autoIncrement:true,
                        },  
                        idPolice:{
                         type:DataTypes.INTEGER,
                         references:{
                              model:police ,
                              key:'id'
                          }
                        },                  
                        cout:{
                                type:DataTypes.STRING,
                                 allowNull:false } ,
                        description:{
                                 type:DataTypes.STRING  
                              },
                       numero:{
                                  type:DataTypes.STRING,
                                  allowNull:false,
                                  unique:{
                                         msg:'Le numero est deja utiliser'
                                        }                     
                      }
                   
                },
                {})
 

}