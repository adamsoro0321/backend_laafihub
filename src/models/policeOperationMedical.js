module.exports.PoliceOperationMedicalModel =(Sequelize,DataTypes,police,OperationMedical)=>{
    return Sequelize.define('police_operation_medical',{
        idPolice:{
            type:DataTypes.INTEGER,
            references:{
                model:police,
                key:'id'
            }
        },
        idOperation:{
            type:DataTypes.INTEGER,
            references:{
                model:OperationMedical,
                key:'id'
            }
        },
    },{})
}