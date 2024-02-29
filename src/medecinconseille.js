module.exports.MedecinConseille=(sequelize, DataTypes)=>{
    const MedecinConseille=sequelize.define(
        'MedecinConseille', {
            idMedecinConseille : {
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
    return MedecinConseille;
};