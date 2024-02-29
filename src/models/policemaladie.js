module.exports.PolicemaladieModel =(Sequelize,DataTypes,police,maladie)=>{
    return Sequelize.define('policeMaladie',{
        idPolice:{
            type:DataTypes.INTEGER,
            references:{
                model:police,
                key:' idPoliceAssurance'
            }
        },
        idMaladi:{
            type:DataTypes.INTEGER,
            references:{
                model:maladie,
                key:'idMaladie'
            }
        },
    },{})
}