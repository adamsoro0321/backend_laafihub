module.exports.AssureModel = (Sequelize, DataTypes, Police, Structure) => {
    return Sequelize.define('assure', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rfid: {
            type: DataTypes.STRING,
            unique: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tel: {
            type: DataTypes.STRING,
            unique:true,
            validate: {
                isNumeric: true,
            }
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        matricule: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
        },
        cni: {
            type: DataTypes.STRING,
            unique: true
        },
        date_naissance: {
            type: DataTypes.DATE
        },
        idPolice: {
            type: DataTypes.INTEGER,
            references: {
                model: Police,
                key: 'id'
            }
        },
        matricule_resp: {
            type: DataTypes.STRING
        },
        idStructure: {
            type: DataTypes.INTEGER,
            references: {
                model: Structure,
                key: 'id'
            }
        }
    }, {});
}
