
module.exports.AdminAsuranceModel = (sequelize, DataTypes) => {
    const AdminAsurance = sequelize.define('AdminAsurance', {
        idAdminAsurance: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        password: DataTypes.STRING,
        tel: DataTypes.STRING,
        email: DataTypes.STRING,
        idAssurance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Assurance',
                key: 'idAssurance'
            }
        }
    });

    //AgentClinique.belongsTo(models.Clinique, { foreignKey: 'idClinique' });

    return AdminAssurance;
};