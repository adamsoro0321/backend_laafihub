
module.exports.AgentAssuranceModel = (sequelize, DataTypes,Assurance) => {
    const AgentAssurance = sequelize.define('AgentAssurance', {
        idAgentAssurance:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idAssurance:{
                type:DataTypes.INTEGER,
                references:{
                      model:Assurance ,
                      key:'idAssurance'
                }
        },
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        tel: DataTypes.STRING,
        email: DataTypes.STRING,
        password:DataTypes.STRING,
    });


    return AgentAssurance;
};
