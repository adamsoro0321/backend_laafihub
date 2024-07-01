module.exports.AgentCliniqueLaboModel = (sequelize, DataTypes, CliniqueLabo) => {
    const AgentCliniqueLabo = sequelize.define('AgentCliniqueLabo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idCliniqueLabo: {
            type: DataTypes.INTEGER,
            references: {
                model: CliniqueLabo,
                key: 'id'
            }
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: 'agent',
            validate: {
                isIn: {
                    args: [['agent', 'admin']],
                    msg: "Le type doit être 'agent' ou 'admin'"
                }
            }
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tel: {
            type: DataTypes.STRING,
            unique: {
                msg: 'Le numéro de téléphone est déjà utilisé'
            },
          
        },
        fullName: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.nom} ${this.prenom}`;
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'L\'email est déjà utilisé'
            },
            validate: {
                isEmail: true
            }
        },
        image: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isMailValid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        emailValideDate: {
            type: DataTypes.DATE
        }
    });

    return AgentCliniqueLabo;
};
