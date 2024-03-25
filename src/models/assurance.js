module.exports.AssuranceModel=(sequelize,DataTypes)=>{

    return sequelize.define('Assurance',
            
         {  
          idAssurance:{
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
            },
            libelle:DataTypes.STRING,
            adresse:DataTypes.STRING, 
            email:{type:DataTypes.STRING,
                   unique:{
                    msg:'L\'email est deja utiliser '
                   }  },
            tel:{type:DataTypes.STRING,
                 unique:{
                    msg:'Ce numero est deja utiliser'
                 } },
            siege:DataTypes.STRING,
            
         },
         {}
    )
}

/**
 
{
    idAssurance:'',
     libelle:'',
      adresse:'',
       tel:'',
       siege:''
}
 */