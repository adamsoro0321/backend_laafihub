module.exports.PrescriptionProduitRelationModel = (sequelize, DataTypes) => {
    return sequelize.define('prescription_produit_relation', {
         
           montant: {
               type: DataTypes.FLOAT, // Peut être exprimée en jours, mois, années, etc.
           }  
          
       });
   
   
   };