
module.exports.AgentAssuranceModel = (sequelize, DataTypes) => {
    const AgentAssurance = sequelize.define('AgentAssurance', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        type:{
            type:DataTypes.STRING,
            defaultValue:'agent',
            validate:{
                isIn: [['agent','admin']],
            }
        },
        nom: {
            type:DataTypes.STRING,
            allowNull:false
        },
        prenom:{type: DataTypes.STRING,
                allowNull:false },
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
        isMailValid: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
        ,
        emailValideDate:{
            type:DataTypes.DATE,
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