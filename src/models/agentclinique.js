
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
                      key:'id'
                }
        },
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        tel: DataTypes.STRING,
        email: DataTypes.STRING,
        password:DataTypes.STRING,
        type:{
            type:DataTypes.STRING,
            defaultValue:'agent',
            validate:{
                isIn: [['agent','admin']],
            }
        },
    });


    return AgentClinique;
};
