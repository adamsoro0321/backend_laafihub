module.export.PharmacyModel = (sequelize, DataTypes) => {
    const Pharmacy = sequelize.define('Pharmacy', {
        idPharmacy: {
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

    return Pharmacy;
};
