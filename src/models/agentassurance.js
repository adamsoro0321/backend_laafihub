
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
        type:{
            type:DataTypes.STRING,
            defaultValue:'agent',
            validate:{
                isIn: [['agent','admin', 'medecin','']],
            }
        },
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        tel: {type:DataTypes.STRING,
            unique:{
             msg:'Le numero est deja utiliser'
                  }
        },
        fullName:{
            type:DataTypes.VIRTUAL,
            get() {
                return `${this.nom} ${this.prenom}`;
              },
        },
        email: {
            type:DataTypes.STRING,
                   allowNull:false ,
                 unique:{
                    msg:"Le email est déja utiliser"
                 } ,
            validate:{
                isEmail: true, 
            }
        },
        image:{
            type:DataTypes.STRING,
            
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false ,
        },
    });


    return AgentAssurance;
};

/**
 * 
 *{
    "idAgentAssurance":""
	"idAssurance":
    "password":
    "image":
    "email":
    "nom:"
    "prenom":
    "type":
 }
 */