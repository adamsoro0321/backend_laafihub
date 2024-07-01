module.exports.createAgentModel = (sequelize, DataTypes, modelName, partenaireModel) => {
    const AgentModel = sequelize.define(modelName, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
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
                isIn: [['agent', 'admin']],
            }
        },
        isMailValid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        emailValideDate: {
            type: DataTypes.DATE,
        }
    });

    if (partenaireModel) {
        AgentModel.belongsTo(partenaireModel, { foreignKey: 'partenaireId' });
        partenaireModel.hasMany(AgentModel, { foreignKey: 'partenaireId' });
    }

    return AgentModel;
};
