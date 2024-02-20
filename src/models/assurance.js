module.exports.AssuranceModel=(sequelize,DataTypes)=>{

    return sequelize.define('',
            
         {  
          idAssurance:{
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
            },
            libelleAssurance:{
                type: DataTypes.STRING
            },
            adresse:{
                type: DataTypes.STRING
            }, 
            email:{
                type: DataTypes.STRING
            },
            tel:{
                type: DataTypes.STRING
            },
            siege:{
                type: DataTypes.STRING
            }
            
         },
         {}
    )
}