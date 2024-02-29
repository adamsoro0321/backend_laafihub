// models/AgentAssurance.js
module.exports = (sequelize, DataTypes) => {
    const AgentAssurance = sequelize.define('AgentAssurance', {
        idAgentAssurance: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        tel: DataTypes.STRING,
        idAssurance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Assurance',
                key: 'idAssurance'
            }
        }
    });

    //AgentAssurance.belongsTo(models.Assurance, { foreignKey: 'idAssurance' });

    return AgentAssurance;
};
