module.exports.StructureModel = (sequelize, DataTypes) => {
    const Structure = sequelize.define('Structure', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        intitule: {
            type: DataTypes.STRING,
            unique:true
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        tel: {
            type: DataTypes.STRING,
            unique: true
        },
        adresse: {
            type: DataTypes.STRING,
            defaultValue:null,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        image: {
            type: DataTypes.STRING
        },
        isMailValid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        emailValideDate: {
            type: DataTypes.DATE,
         
        },
        type: {
            type: DataTypes.STRING
        }
    });

    return Structure;
};
