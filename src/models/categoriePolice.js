module.exports.AssurePoliceModel = (sequelize, DataTypes,categorie, Police) => {
    return sequelize.define('CategoriePolice', {
     
        idcategorie:{
            type:DataTypes.INTEGER,
            references:{
                model:categorie,
                key:'id'
            }
        },
        idPoliceA:{
            type:DataTypes.INTEGER,
            references:{
                model:Police,
                key:'id'
            }
        }
        
    });
};