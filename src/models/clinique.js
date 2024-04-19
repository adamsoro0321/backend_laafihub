module.exports.CliniqueModel=(sequelize,DataTypes)=>{

    return sequelize.define('Clinique',           
         {  
          id:{
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
              },
        libelle:DataTypes.STRING,
        adresse:DataTypes.STRING ,
        email:DataTypes.STRING,
        tel:DataTypes.STRING , 
        siege:DataTypes.STRING,
         },
         {}
    )
}