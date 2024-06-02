module.exports.StructureModel = (sequelize, DataTypes) => {
    const Structure = sequelize.define('Structure', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        intitule: {
            type: DataTypes.STRING,
            unique: {
                msg: 'L\'intitulé est déjà utilisé'
            }
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'Le code est déjà utilisé'
            }
        },
        tel: {
            type: DataTypes.STRING,
            unique: {
                msg: 'Le numero est déjà utilisé'
            }
        },
        adresse: {
            type: DataTypes.STRING,
            defaultValue:null,
        },
        email: {
            type: DataTypes.STRING,
            unique: {
                msg: 'Le mail est déjà utilisé'
            },
            validate: {
                isEmail: true,
            }
        },
        image: {
            type: DataTypes.STRING
        },
        isMailValid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        emailValideDate: {
            type: DataTypes.DATE,
         
        },
        type: {
            type: DataTypes.STRING
        }
    });

    return Structure;
};
