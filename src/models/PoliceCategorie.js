module.exports.PoliceCategorieModel = (sequelize, DataTypes,police,Categorie) => {
    return sequelize.define('policecategorie', {
          idpolice:{
            type:DataTypes.INTEGER,
            references:{
                model:police,
                key:'id'
            }
          },
          idcategorie:{
            type:DataTypes.INTEGER,
            references:{
                model:Categorie,
                key:'id'
            }
          }
       });
   
   
   };