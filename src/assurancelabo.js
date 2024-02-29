
    const AssuranceLabo = sequelize.define('AssurancAssuranceLaboeClinique', {
module.exports.AssuranceLaboModel = (sequelize, DataTypes) => {
    const AssuranceLabo = sequelize.define('AssurancAssuranceLaboeClinique', {
        idAssurance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Assurance',
                key: 'idAssurance'
            }
        },
        idLabo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Labo',
                key: 'idLabo'
            }
        }
    });

    return AssuranceLabo;
};
