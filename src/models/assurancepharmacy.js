module.exports.AssurancePharmacyModel= (sequelize, DataTypes,Assurance,Pharmacy) => {
    return sequelize.define('AssurancePharmacy', {
        idAssurance:{
            type:DataTypes.INTEGER,
            references:{
                model:Assurance,
                key:'idAssurance'
            }
    },
    idPharmacy:{
        type:DataTypes.INTEGER,
        references:{
            model:Pharmacy,
            key:'idPharmacy'
        }
}},{})
}