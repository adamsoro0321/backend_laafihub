
module.exports.AgentCliniqueModel = (sequelize, DataTypes,Clinique) => {
    const AgentClinique = sequelize.define('agent_clinique', {
        id:{
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
        nom: {
            type:DataTypes.STRING,
            allowNull:false
        },
        prenom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        tel:  {type:DataTypes.STRING,
            unique:{
             msg:'Le numero est deja utiliser'
                  }
        },
        email: {type:DataTypes.STRING,
            unique:{
                msg:'Le mail est deja utiliser'
            }
        },
        password:{
            type:DataTypes.STRING,},
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
