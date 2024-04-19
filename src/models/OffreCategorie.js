module.exports.OffreCategorieModel = (sequelize, DataTypes,Offre,Categorie) => {
    return sequelize.define('offrecategorie', {
          idOffre:{
            type:DataTypes.INTEGER,
            references:{
                model:Offre,
                key:'id'
            }
          },
          idCategorie:{
            type:DataTypes.INTEGER,
            references:{
                model:Categorie,
                key:'id'
            }
          }
       });
   
   
   };