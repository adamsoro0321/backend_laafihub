module.exports.AgentAssuranceModel = (sequelize, DataTypes, type = 'agent') => {
    const ModulePolice= sequelize.define('module_police', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: DataTypes.STRING,
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
