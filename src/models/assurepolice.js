module.exports.AssurePoliceModel = (sequelize, DataTypes,Assurance, PoliceAssurance, Assure) => {
    return sequelize.define('AssurePolice', {
        idAssurePolice: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        idAssurance:{
            type:DataTypes.INTEGER,
            references:{
                model:Assurance,
                key:'idAssurance'
            }
        },
        idAssure:{
            type:DataTypes.INTEGER,
            references:{
                model:Assure,
                key:'idAssure'
            }
        },
        idPoliceAssurance:{
            type:DataTypes.INTEGER,
            references:{
                model:PoliceAssurance,
                key:'idPoliceAssurance'
            }
        }
        
    });
};