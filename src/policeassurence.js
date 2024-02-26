module.exports.PoliceAssuranceModel = (sequelize, DataTypes) => {
    const PoliceAssurance = sequelize.define('PoliceAssurance', {
        idPoliceAssurance: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        libelle: DataTypes.STRING,
        description: DataTypes.STRING
    });

    return PoliceAssurance;
}