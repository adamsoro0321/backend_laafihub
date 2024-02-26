
module.exports.idAssuranceCliniqueModel = (sequelize, DataTypes) => {
    const AssuranceClinique = sequelize.define('AssuranceClinique', {
        idAssurance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Assurance',
                key: 'idAssurance'
            }
        },
        idClinique: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Clinique',
                key: 'idClinique'
            }
        }
    });

    return AssuranceClinique;
};
