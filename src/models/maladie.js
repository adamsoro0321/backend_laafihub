module.exports.MaladieModel = (sequelize, DataTypes) => {
  return sequelize.define('maladie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label:{
            type: DataTypes.STRING,
            allowNull:false,
          },
        description:DataTypes.TEXT ,
    });
  
};