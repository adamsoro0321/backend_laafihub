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
        libelle: DataTypes.STRING,
        description:DataTypes.TEXT ,
        taux_couvrement:{
            type: DataTypes.FLOAT,
        },
        cout_abonnement:{
            type: DataTypes.FLOAT,
        },
        dureeValidite: {
            type: DataTypes.INTEGER, // Peut être exprimée en jours, mois, années, etc.
        }  
      

    });


};