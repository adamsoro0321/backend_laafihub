module.exports.AgentCliniqueModel = (sequelize, DataTypes, Clinique) => {
    const AgentClinique = sequelize.define('agent_clinique', {
        /** agent_clinique au lieu AgentClinique parce que la table agent_clinique contient beaucoup de   data */
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idClinique: {
            type: DataTypes.INTEGER,
            references: {
                model: Clinique,
                key: 'id'
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
            unique: true,
          
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: 'agent',
            validate: {
                isIn: [['agent', 'admin']]
            }
        }
    }, {
        timestamps: true
    });

    return AgentClinique;
};
