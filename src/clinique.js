module.exports = (sequelize, DataTypes) => {
    const Clinique = sequelize.define('Clinique', {
        idClinique: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        libelle: DataTypes.STRING,
        adresse: DataTypes.STRING,
        email: DataTypes.STRING,
        tel: DataTypes.STRING,
        siege: DataTypes.STRING
    });

    return Clinique;
};