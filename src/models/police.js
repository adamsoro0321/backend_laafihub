module.exports.PoliceModel = (sequelize, DataTypes) => {
 return sequelize.define('Police', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero:{
            type:DataTypes.STRING,
            allawNull:false,
            unique: true,
        },
        label: DataTypes.STRING,
        description:DataTypes.TEXT ,
      
        dureeValidite: {
            type: DataTypes.INTEGER, // Peut être exprimée en jours, mois, années, etc.
        }  
      

    });


};