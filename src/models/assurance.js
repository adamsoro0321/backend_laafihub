module.exports.AssuranceModel=(sequelize,DataTypes)=>{

    return sequelize.define('Assurance',
            
         {  
          idAssurance:{
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
            },
            libellee:DataTypes.STRING,
            adresse:DataTypes.STRING, 
            email:DataTypes.STRING,
            tel:DataTypes.STRING,
            siege:DataTypes.STRING,
            
         },
         {}
    )
}