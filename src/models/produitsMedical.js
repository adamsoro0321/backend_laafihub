
module.exports.ProduidMedicalModel = (sequelize, DataTypes) => {
    const ProduidMedical = sequelize.define('produitMedical', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
     
        label:{
            type:DataTypes.TEXT,    
        },
        description:{
            /** id de l'agent qui va gerer la reclamation de l'assurer */
            type:DataTypes.TEXT,   
        }
    });


    return ProduidMedical ;
};
