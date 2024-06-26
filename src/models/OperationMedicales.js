module.exports.OperationMedicalModel = (sequelize, DataTypes) => {
    return sequelize.define('operation_medical', {
          id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
          },
          label:{
              type: DataTypes.STRING,
              allowNull:false,
              unique:{
                msg:'Ce label existe deja'
              }
            },
          description:DataTypes.TEXT ,
      });
    
  };