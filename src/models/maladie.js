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
            unique:{
              msg: "Label deja existant"
            }
          },
        description:DataTypes.TEXT ,
    });
  
};