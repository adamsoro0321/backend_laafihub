
module.exports.AgentAssuranceModel = (sequelize, DataTypes,type='agent') => {
    const AgentAssurance = sequelize.define('AgentAssurance', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        type:{
            type:DataTypes.STRING,
            defaultValue:type,
            validate:{
                isIn: [['agent','admin','medecin']],
            }
        },
        nom: {
            type:DataTypes.STRING,
            allowNull:false
        },
        prenom:{type: DataTypes.STRING,
                allowNull:false 
            },

        tel: {type:DataTypes.STRING,
            unique:true
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
                 unique:true,
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

