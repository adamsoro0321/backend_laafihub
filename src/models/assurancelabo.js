module.exports.AssuranceLaboModel = (sequelize, DataTypes,Assurance,Labo) => {
    return sequelize.define('AssuranceLabo', {
        idAssurance:{
            type:DataTypes.INTEGER,
            references:{
                model:Assurance,
                key:'idAssurance'
            }
    },
    idLabo:{
        type:DataTypes.INTEGER,
        references:{
            model:Labo,
            key:'idLabo'
        }
}},{})
}