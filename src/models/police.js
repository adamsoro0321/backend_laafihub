module.exports.PoliceAssuranceModel = (sequelize, DataTypes) => {
 return sequelize.define('Police', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero:{
            type:DataTypes.STRING,
            unique:{
                msg:'Le code est deja utiliser'
                     }
        },
        libelle: DataTypes.STRING,
        description:DataTypes.TEXT ,
        taux_couvrement:{
            type: DataTypes.FLOAT,
        },
        cout_abonnement:{
            type: DataTypes.FLOAT,
        },
        dureeValidite: {
            type: DataTypes.INTEGER, // Peut être exprimée en jours, mois, années, etc.
        }  ,
        maladie: {
            type: DataTypes.ARRAY(DataTypes.STRING), // Liste des maladies couvertes par la police
        },
        operations_medicales: {
            type: DataTypes.ARRAY(DataTypes.STRING), // Liste des opérations médicales couvertes par la police
        } 

    });


};