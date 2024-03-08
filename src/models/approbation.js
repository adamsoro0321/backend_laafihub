
module.exports.ApprobationModel = (sequelize, DataTypes, MedecinClinique, Assure) => {
    const Approbation = sequelize.define('Approbation', {
        idApprobation:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idMedecinClinique:{
                type:DataTypes.INTEGER,
                references:{
                      model:MedecinClinique,
                      key:'idMedecinClinique'
                }
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
        dateApprotionMedecinConseille:{
            type:DataTypes.DATE
        },
        dateApprobationAgentAssurance:{
            type:DataTypes.DATE
        },
        statusMedecinConseille:{
            type:DataTypes.BOOLEAN
        },
        statusAgentAssurance:{
            type:DataTypes.BOOLEAN
        }

    });


    return Approbation;
};
