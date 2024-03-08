
module.exports.ReclammationModel = (sequelize, DataTypes, Assure) => {
    const Reclammation = sequelize.define('Reclammation', {
        idReclammation:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
     
        idAssure:{
            type:DataTypes.INTEGER,
            references:{
                  model:Assure,
                  key:'idAssure'
            }
        },
        idAgentAssurence:{
            type:DataTypes.INTEGER
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
