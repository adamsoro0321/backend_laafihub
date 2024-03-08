module.exports.MedecinCliniqueModel = (sequelize, DataTypes,Clinique) => {
    const MedecinClinique = sequelize.define('MedecinClinique', {
        idMedecinClinique: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        idClinique:{
            type:DataTypes.INTEGER,
            references:{
                model:Clinique,
                key:'idClinique'
            }
        },
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        tel: DataTypes.STRING,
        email: DataTypes.STRING,
        adresse: DataTypes.STRING
    });


    return MedecinClinique;
};