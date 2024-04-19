

module.exports.OffreModel =(Sequelize,DataTypes)=>{
    return Sequelize.define('Offre',{
                       id:{
                            type:DataTypes.INTEGER,
                            primaryKey:true,
                            autoIncrement:true,
                       }, 
                       code:{
                         type:DataTypes.INTEGER,
                         unique:{
                              msg:'Le code est deja utiliser'
                                   }
                       },                   
                       intitule:{
                             type:DataTypes.STRING  },
                       description:{
                            type:DataTypes.STRING  },
                       cout:{
                         /** le cout de l'offre est egale a la somme des cout_d'abonnement des polices de tout les employer des different categorie */
                         type:DataTypes.FLOAT
                       } ,
                       dureeValidite: {
                         type: DataTypes.INTEGER, // Peut être exprimée en jours, mois, années, etc.
                     }    
               
               },
               {})


}