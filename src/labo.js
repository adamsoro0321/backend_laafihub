module.exports.LaboModel = (sequelize, DataTypes) => {
    const Labo = sequelize.define('Labo', {
        idLabo: {
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

    return Labo;
};