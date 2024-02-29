module.exports.AdminCliniqueModel = (sequelize, DataTypes,Clinique) => {
    return sequelize.define('AdminClinique', {
        idAdminClinique: {
            type: DataTypes.INTEGER,
            primaryKey: true
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
        adresse: DataTypes.STRING,
        password:DataTypes.STRING,
    });

};