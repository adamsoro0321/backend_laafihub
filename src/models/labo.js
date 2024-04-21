module.exports.LaboModel = (sequelize, DataTypes) => {
    const Labo = sequelize.define('Labo', {
        id: {
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
    });

    return Labo;
};