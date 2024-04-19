
module.exports.ReclammationModel = (sequelize, DataTypes, Assure,agentAssurance) => {
    const Reclammation = sequelize.define('Reclammation', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
     
        idAssure:{
            type:DataTypes.INTEGER,
            references:{
                  model:Assure,
                  key:'id'
            }
        },
        idAgentAssurance:{
            /** id de l'agent qui va gerer la reclamation de l'assurer */
            type:DataTypes.INTEGER,
            references:{
                model:agentAssurance,
                key:'id'
             }
        },
        titre:{
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.TEXT
        },
        dateEnvoi:{
            type:DataTypes.DATE
        },
        dateApprobation:{
            type:DataTypes.DATE
        },
        status:{
            type:DataTypes.BOOLEAN
        }

    });


    return Reclammation;
};
