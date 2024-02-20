module.exports.cliniqueModel=(sequelize,DataTypes)=>{

    return sequelize.define('',
            
         {  
          ididClinique:{
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
              },
          libelleClinique:{

          },
         adresse:{

         },
         email:{

         },
        tel:{

        }, 
        siege:{

        }
            
         },
         {}
    )
}