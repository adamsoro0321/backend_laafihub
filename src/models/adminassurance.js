module.exports.AdminAssuranceModel = (sequelize, DataTypes,Assurance) => {
    return sequelize.define('AdminAssurance', {
        idAdminAssurance: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        idAssurance:{
            type:DataTypes.INTEGER,
            references:{
                model:Assurance,
                key:'idAssurance'
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