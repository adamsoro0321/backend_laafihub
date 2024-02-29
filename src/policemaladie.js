
module.exports.PoliceMaladieModel = (sequelize, DataTypes) => {
    const PoliceMaladie = sequelize.define('PoliceMaladie', {
        idPoliceAssurance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'PoliceAssurance',
                key: 'idPoliceAssurance'
            }
        },
        idMaladie: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Maladie',
                key: 'idMaladie'
            }
        }
    });

    return PoliceMaladie;
};
