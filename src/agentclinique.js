// models/Assure.js
module.exports = (sequelize, DataTypes) => {
    const AgentClinique = sequelize.define('AgentClinique', {
        idAgentClinique: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomAgentClinique: DataTypes.STRING,
        prenomAgentClinique: DataTypes.STRING,
        tel: DataTypes.STRING,
        email: DataTypes.STRING
    });

    AgentClinique.belongsTo(models.Clinique, { foreignKey: 'idClinique' });

    return AgentClinique;
};
