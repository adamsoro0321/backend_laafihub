module.exports.PoliceAssuranceModel = (sequelize, DataTypes) => {
 return sequelize.define('PoliceAssurance', {
        idPoliceAssurance: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        libelle: DataTypes.STRING,
        description:DataTypes.TEXT 
    });


};