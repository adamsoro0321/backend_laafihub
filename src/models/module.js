module.exports.ModulePoliceModel = (sequelize, DataTypes) => {
    /** une police contient de module qui a son tour contient des element ou groupe d'element. enregistrer sous forme json */
    const ModulePolice= sequelize.define('module_police', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull:false
        },
        description: {
            type: DataTypes.TEXT
          
        },
       content: {
            type: DataTypes.JSON,
        },
      
    }, {
        timestamps: true
    });

    return ModulePolice;
};
