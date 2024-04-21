
module.exports.PartenaireModel = (sequelize, DataTypes) => {
    const Structure= sequelize.define('Partenaire', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
      
        intitule:{
            type:DataTypes.STRING,
        },
        code: {
            type:DataTypes.STRING,
            unique:{
             msg:'Le code est deja utiliser'
                  }
        },
        tel: {
            type:DataTypes.STRING
        },
        adresse: {
            type:DataTypes.STRING,
          
             }, 
        email: {
            type:DataTypes.STRING,            
            validate:{
                isEmail: true, 
            }
        },
        image:{
            type:DataTypes.STRING,
        },
        isMailValid: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
        ,
        emailValideDate:{
            type:DataTypes.DATE,
        },
        type:{
            type:DataTypes.STRING,
            defaultValue:'clinique',
            validate:{
                isIn: ['clinique','pharmacy','laboratoire','clinique_laboratoire'],
            }
        }
    });


    return Structure;
};

/**
 * 
 *{
    "id":""
	"intitule":
    "code":
    "password":
    "image":
    "email":
    "type":
 }
 */