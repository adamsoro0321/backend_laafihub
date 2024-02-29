module.exports.MedecinConseilleModel = (sequelize, DataTypes,Assurance) => {
    const MedecinConseille = sequelize.define('MedecinConseille', {
        idMedecinConseille:{
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
        adresse: DataTypes.STRING
    });


    return MedecinConseille;
};