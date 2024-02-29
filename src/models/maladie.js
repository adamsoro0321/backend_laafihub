module.exports.MaladieModel = (sequelize, DataTypes) => {
  return sequelize.define('Maladie', {
        idMaladie: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        libelle:{
            type: DataTypes.STRING,
            allowNull:false,
          },
        description:DataTypes.TEXT ,
    });
  
};