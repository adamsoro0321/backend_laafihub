
module.exports.AgentCliniqueModel = (sequelize, DataTypes,Clinique) => {
    const AgentClinique = sequelize.define('AgentClinique', {
        idAgentClinique:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idClinique:{
                type:DataTypes.INTEGER,
                references:{
                      model:Clinique ,
                      key:'idClinique'
                }
        },
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        tel: DataTypes.STRING,
        email: DataTypes.STRING,
        password:DataTypes.STRING,
    });


    return AgentClinique;
};
