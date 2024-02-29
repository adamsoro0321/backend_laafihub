module.exports.PoliceMaladieModel =(Sequelize,DataTypes,police,maladie)=>{
    return Sequelize.define('policeMaladie',{
        idPolice:{
            type:DataTypes.INTEGER,
            references:{
                model:police,
                key:'idPoliceAssurance'
            }
        },
        idMaladie:{
            type:DataTypes.INTEGER,
            references:{
                model:maladie,
                key:'idMaladie'
            }
        },
    },{})
}