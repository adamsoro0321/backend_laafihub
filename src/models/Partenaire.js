module.exports.PartenaireModel = (sequelize, DataTypes) => {
    const Structure = sequelize.define('Partenaire', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        intitule: {
            type: DataTypes.STRING,
        },
        code: {
            type: DataTypes.STRING,
            unique: true,
        },
        tel: {
            type: DataTypes.STRING
        },
        adresse: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            }
        },
        image: {
            type: DataTypes.STRING,
        },
        isMailValid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        emailValideDate: {
            type: DataTypes.DATE,
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: 'clinique', // Default type if not provided
            validate: {
                isIn: [['clinique', 'pharmacy', 'laboratoire', 'clinique_laboratoire']],
            }
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ['email', 'code'],
            }
        ]
    });

    return Structure;
};
