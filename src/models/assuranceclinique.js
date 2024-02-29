module.exports.AssuranceCliniqueModel= (sequelize, DataTypes,Assurance,Clinique) => {
    return sequelize.define('AssuranceClinique', {
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
                 model:Clinique,
                 key:'idPharmacy'
        }
    }},{})
}