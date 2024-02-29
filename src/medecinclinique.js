module.exports.MedecinConseilleModel=(sequelize, DataTypes)=>{
    const MedecinConseille=sequelize.define(
        'MedecinClinique', {
            idMedecinClinique : {
                pritype: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: truemar
            },
            nom:DataTypes.STRING,
            prenom: DataTypes.STRING,
            password : DataTypes.STRING, 
            tel:DataTypes.STRING,
            email:DataTypes.email,
            adresse:DataTypes.STRING,
            idClinique: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            }

        
    });
    return MedecinClinique;
};