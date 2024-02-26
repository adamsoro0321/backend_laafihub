
module.exports = (sequelize, DataTypes) => {
    const AssurancePharmacy = sequelize.define('AssurancePharmacy', {
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
                model: 'Pharmacy',
                key: 'idPharmacy'
            }
        }
    });

    return AssurancePharmacy;
};
