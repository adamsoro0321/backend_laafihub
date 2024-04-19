const {Sequelize,DataTypes} = require('sequelize');
const {DB} =require('./config');

/*Importation des models*/
const {
  AssuranceModel, CliniqueModel, PharmacyModel, AgentAssuranceModel,
  AgentCliniqueModel, AssureModel, LaboModel, MedecinCliniqueModel,
  MaladieModel, PoliceMaladieModel, PoliceAssuranceModel, ApprobationModel,
  ReclammationModel, CategorieModel, StructureModel, OffreModel,
  OffreCategorieModel, OperationMedicalModel, PoliceOperationMedicalModel
} =require('./models');



const appSequelize = new Sequelize(DB.database, DB.username, DB.password, {
    host: DB.host,
    dialect:  DB.dialect,
   logging: true,
  });

  async function initializeDatabase() {
    try {
      await appSequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  initializeDatabase() ;

const Structure=StructureModel(appSequelize,DataTypes);
const Offre =OffreModel(appSequelize,DataTypes);
const Maladie = MaladieModel(appSequelize,DataTypes)
const OperationMedical =OperationMedicalModel(appSequelize,DataTypes);

const PoliceAssurance =PoliceAssuranceModel(appSequelize,DataTypes)
const Categorie=CategorieModel(appSequelize,DataTypes,PoliceAssurance);
const offreCategorie =OffreCategorieModel(appSequelize,DataTypes,Offre,Categorie) ;

const Assurance =AssuranceModel(appSequelize,DataTypes)
const Assure =AssureModel(appSequelize,DataTypes,Categorie,Structure)

const Clinique =CliniqueModel(appSequelize,DataTypes)
const AgentClinique = AgentCliniqueModel(appSequelize,DataTypes,Clinique)
const AgentAssurance = AgentAssuranceModel(appSequelize,DataTypes)

const Labo = LaboModel(appSequelize,DataTypes)
const Pharmacy = PharmacyModel(appSequelize,DataTypes)
const MedecinClinique =MedecinCliniqueModel(appSequelize,DataTypes,Clinique)


const PoliceMaladie = PoliceMaladieModel(appSequelize,DataTypes,PoliceAssurance, Maladie);
const Approbation = ApprobationModel(appSequelize,DataTypes,MedecinClinique, Assure);

const Reclammation = ReclammationModel(appSequelize,DataTypes,Assure,AgentAssurance) ;

const policeOps= PoliceOperationMedicalModel(appSequelize,DataTypes,PoliceAssurance,OperationMedical)
/** relation assurer- structure 1 à plusiers: un assurer fait partie d"au plus une structure */
 Structure.hasMany(Assure)
 Assure.belongsTo(Structure)


/** relation assurer -categorie 1 à plusieurs :un assurer à au plus une categorie */
Categorie.hasMany(Assure)
Assure.belongsTo(Categorie)

/** assurer-reclamation : un assurer peux avoir plusieurs reclamations */

Reclammation.belongsTo(Assure);
Assure.hasMany(Reclammation);

/** reclamtion - agent assurer*/
Reclammation.belongsTo(AgentAssurance);
AgentAssurance.hasMany(Reclammation);

/** policeassurance-maladi */
PoliceAssurance.belongsToMany(Maladie,{through: PoliceMaladie   })
Maladie.belongsToMany(PoliceAssurance,{through:PoliceMaladie })

/** offre -categori assurance */ 

Offre.belongsToMany(Categorie,{through:offreCategorie}) 
Categorie.belongsToMany(Offre,{through:offreCategorie})

/** relation entre un medecinClinique et un clinique */

Clinique.hasMany(MedecinClinique)
MedecinClinique.belongsTo(Clinique)



/** relation police-maladie */
PoliceAssurance.belongsToMany(Maladie,{through:PoliceMaladie }) ;
Maladie.belongsToMany(PoliceAssurance,{through:PoliceMaladie}) ;

/** relation police-maladie */
PoliceAssurance.belongsToMany(OperationMedical,{through:policeOps }) ;
OperationMedical.belongsToMany(PoliceAssurance,{through:policeOps}) ;


/** relation  categorie-police on-to-many */
Categorie.hasMany(PoliceAssurance);
PoliceAssurance.belongsTo(Categorie)


appSequelize.sync({alter:true}).then(_=>console.log("sync succes"))
                                .catch((e)=>{
                                  console.log('error',"===>", e)
                                }) ;
                       
                             

module.exports ={
appSequelize,
Assurance,
Assure,
AgentAssurance,
Clinique,
AgentClinique,
Labo,
Pharmacy,
MedecinClinique,
Maladie,
PoliceAssurance,
PoliceMaladie,
Approbation,
Reclammation,
Offre,
Categorie,
Structure,
OperationMedical
}                             