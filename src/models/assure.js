

module.exports.AssureModel =(Sequelize,DataTypes,Categorie,Structure)=>{
     return Sequelize.define('Assure',{
                        id:{
                             type:DataTypes.INTEGER,
                             primaryKey:true,
                             autoIncrement:true,
                        },
                        rfid:{
                            /** radio  frequence numer associer a la carte de l'assure */
                            type:DataTypes.STRING,
                            unique:{
                                msg:'Le numero rfid est deja utiliser'
                                  }
                        },
                       
                        nom:{
                              type:  DataTypes.STRING,
                              allowNull:false 
                            } ,

                        prenom:{
                             type:DataTypes.STRING,
                              allowNull:false 
                             },
                        tel: {type:DataTypes.STRING,
                         unique:{
                             msg:'Le numero est deja utiliser'
                               }
                     },
                     adresse: {type:DataTypes.STRING,
                         unique:{
                          msg:'Le numero est deja utiliser'
                               }
                     },
                   
                     email: {
                         type:DataTypes.STRING,
                              unique:{
                                 msg:"Le email est déja utiliser"
                              } ,
                         validate:{
                             isEmail: true, 
                         }
                     },
                     matricule:{
                        type:DataTypes.STRING,
                        unique:{
                            msg:"Le matricule est déja utiliser"
                         } ,
                        
                     },
                     password:{
                         type:DataTypes.STRING,
                         allowNull:false,
                     },
                     cni:{
                        type:DataTypes.STRING 
                    },
                     data_naissance:{
                         type:DataTypes.DATE
                        },
                   
                     idCategorie:{
                         type:DataTypes.INTEGER,
                         references:{
                          model:Categorie ,
                          key:'id'
                      }
                        },
                     matricule_resp:{
                         type:DataTypes.STRING
                     },
                     idStructure:{
                           type:DataTypes.INTEGER,
                           references:{
                            model:Structure ,
                            key:'id'
                        }
                     }                 
                },
                {})
 

}