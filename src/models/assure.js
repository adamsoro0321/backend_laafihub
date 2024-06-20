module.exports.AssureModel = (Sequelize, DataTypes, Police, Structure) => {
    return Sequelize.define('assure', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rfid: {
            type: DataTypes.STRING,
            unique: {
                msg: 'Le numéro rfid est déjà utilisé'
            }
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
            unique: {
                msg: 'Le numéro de téléphone est déjà utilisé'
            },
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
            unique: {
                msg: "L'email est déjà utilisé"
            },
            validate: {
                isEmail: true,
            }
        },
        matricule: {
            type: DataTypes.STRING,
            unique: {
                msg: "Le matricule est déjà utilisé"
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
      /*  image:{
            type: DataTypes.STRING,
        },*/
        cni: {
            type: DataTypes.STRING,
            unique: {
                msg: "Le numéro de CNI est déjà utilisé"
            }
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
            type: DataTypes.STRING,
            references: {
                model: Structure,
                key: 'id'
            }
        }
    }, {});
}
