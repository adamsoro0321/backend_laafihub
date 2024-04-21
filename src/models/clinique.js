module.exports.CliniqueModel=(sequelize,DataTypes)=>{

    return sequelize.define('Clinique',           
         {  
          id:{
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
              },

        intitule:{
            type:DataTypes.STRING,
        },
        isLabo:{
            type:DataTypes.BOOLEAN
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
        siege:DataTypes.STRING,
         },
         {}
    )
}