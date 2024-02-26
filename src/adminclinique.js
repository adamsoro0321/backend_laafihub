module.exports.AgentCliniqueModel = (sequelize, DataTypes) => {
    const AgentClinique = sequelize.define('AgentClinique', {
        idAgentClinique: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        password: DataTypes.STRING,
        tel: DataTypes.STRING,
        email: DataTypes.STRING,
        idClinique: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Clinique',
                key: 'idClinique'
            }
        }
    });

    //AgentClinique.belongsTo(models.Clinique, { foreignKey: 'idClinique' });

    return AgentClinique;
};