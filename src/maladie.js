
export default(Sequelize, DataTypes)=>{
    const Maladie=sequelize.define( 'Maladie', {
        idMaladie:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        libelle: DataTypes.STRING,
        description:DataTypes.TEXT
    });
    return Maladie;
};