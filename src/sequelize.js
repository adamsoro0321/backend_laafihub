const {Sequelize,DataTypes} = require('sequelize');


/*Importation des models*/
const {
  AssuranceModel, AgentAssuranceModel,
  AgentCliniqueModel, AssureModel, 
  MaladieModel, PoliceMaladieModel, PoliceModel, 
  ReclammationModel, CategorieModel, StructureModel, OffreModel,
  OperationMedicalModel, PoliceOperationMedicalModel,
  PartenaireModel,RfidIdentifyModel,AgentCliniqueLaboModel,
  AgentLaboModel,AgentPharmacyceModel,
  PrescriptionModel,
  ProduidMedicalModel
} =require('./models');
const DB = require('./config');

const appSequelize=(process.env.NODE_ENV==="production")?new Sequelize(process.env.DATABASE_URL,{
  dialectOptions:{
    ssl:{
      require:true,
      rejectUnauthorized: false,
    }
  }
})
:new Sequelize(DB.database, DB.username, DB.password, {
  host: DB.host,
  dialect: 'postgres',
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

const Maladie = MaladieModel(appSequelize,DataTypes)
const OperationMedical =OperationMedicalModel(appSequelize,DataTypes);

const Partenaire=PartenaireModel(appSequelize,DataTypes);
const RfidIdentify=RfidIdentifyModel(appSequelize,DataTypes);

const Police =PoliceModel(appSequelize,DataTypes)


const Assurance =AssuranceModel(appSequelize,DataTypes)
const Assure =AssureModel(appSequelize,DataTypes,Police,Structure)


const Clinique =PartenaireModel(appSequelize,DataTypes)
const Labo =PartenaireModel(appSequelize,DataTypes,'laboratoire')
const Pharmacy =PartenaireModel(appSequelize,DataTypes,'pharmacy')
const CliniqueLabo =PartenaireModel(appSequelize,DataTypes,'clinique_laboratoire')

const AgentClinique = AgentCliniqueModel(appSequelize,DataTypes,Clinique)
const AgentAssurance = AgentAssuranceModel(appSequelize,DataTypes)
const AgentLabo =AgentLaboModel(appSequelize,DataTypes,Labo) ;
const AgentPharma = AgentPharmacyceModel(appSequelize,DataTypes,Pharmacy);
const AgentCliniqueLabo =AgentCliniqueLaboModel(appSequelize,DataTypes,CliniqueLabo);

const MedecinConseille=AgentAssuranceModel(appSequelize,DataTypes,'medecin')


const PoliceMaladie = PoliceMaladieModel(appSequelize);
const Prescription = PrescriptionModel(appSequelize,DataTypes, Assure,AgentClinique,AgentAssurance);

const Reclammation = ReclammationModel(appSequelize,DataTypes,Assure,AgentAssurance) ;

const policeOps= PoliceOperationMedicalModel(appSequelize)


const produitMedical= ProduidMedicalModel(appSequelize,DataTypes);
/** relation assurer- structure 1 à plusiers: un assurer fait partie d"au plus une structure */
 Structure.hasMany(Assure)
 Assure.belongsTo(Structure)


/** relation assurer -categorie 1 à plusieurs :un assurer à au plus une categorie */
Police.hasMany(Assure,{
  foreignKey: 'idPolice',
  as: 'Assures'
})
Assure.belongsTo(Police,{
  foreignKey: {
     name: 'idPolice',
     as: 'Police' 
  },
 })

/** assurer-reclamation : un assurer peux avoir plusieurs reclamations */

Reclammation.belongsTo(Assure);
Assure.hasMany(Reclammation);

/** reclamtion - agent assurer*/
Reclammation.belongsTo(AgentAssurance);
AgentAssurance.hasMany(Reclammation);

/** policeassurance-maladi */
Police.belongsToMany(Maladie,{through: PoliceMaladie   }) ;
Maladie.belongsToMany(Police,{through:PoliceMaladie }) ;

/** police operation */



/** Strucuterure police  */
Structure.belongsToMany(Police,{through:'structure_police'}) ;
Police.belongsToMany(Structure,{through:'structure_police'});

/** structure -assurer */

Structure.hasMany(Assure,{
  foreignKey: {
    name: 'idStructure',
  },
});
Assure.belongsTo(Structure,{
  foreignKey: {
    name: 'idStructure',
  },
});

/** relation entre un medecinClinique et un clinique */
Clinique.hasMany(AgentClinique);
AgentClinique.belongsTo(Clinique);

Labo.hasMany(AgentLabo)
AgentLabo.belongsTo(Labo)

Pharmacy.hasMany(AgentPharma)
AgentPharma.belongsTo(Pharmacy)

CliniqueLabo.hasMany(AgentCliniqueLabo)
AgentCliniqueLabo.belongsTo(CliniqueLabo)


/** relation police-maladie */
Police.belongsToMany(Maladie,{through:PoliceMaladie }) ;
Maladie.belongsToMany(Police,{through:PoliceMaladie}) ;

/** relation police-maladie */
Police.belongsToMany(OperationMedical,{through:policeOps }) ;
OperationMedical.belongsToMany(Police,{through:policeOps}) ;


/** presciption */
// Relations Assure -> Prescription
Assure.hasMany(Prescription, { foreignKey: 'idAssure' });
Prescription.belongsTo(Assure, { foreignKey: 'idAssure' });

// Relations AgentClinique -> Prescription
AgentClinique.hasMany(Prescription, { foreignKey: 'idAgentClinique' });
Prescription.belongsTo(AgentClinique, { foreignKey: 'idAgentClinique' });

// Relations AgentAssurance (Medecin) -> Prescription
AgentAssurance.hasMany(Prescription, { as: 'MedecinAssurance', foreignKey: 'idMedecinAssurance' });
Prescription.belongsTo(AgentAssurance, { as: 'MedecinAssurance', foreignKey: 'idMedecinAssurance' });

// Relations AgentAssurance (Validation) -> Prescription
AgentAssurance.hasMany(Prescription, { as: 'AgentAssurance', foreignKey: 'idAgentAssurance' });
Prescription.belongsTo(AgentAssurance, { as: 'AgentAssurance', foreignKey: 'idAgentAssurance' });


 (async()=>{
      try {
        if (process.env.NODE_ENV==='production') {
          await appSequelize.sync({alter:false}) ;
        } else {
          await appSequelize.sync({alter:true}) ;
        }
        console.log("sync succes") ;
      } catch (error) {
        console.log('error',"===>", error)
      }
 })()                            

module.exports ={
appSequelize,
MedecinConseille,
PoliceMaladie,
Prescription,
Reclammation,
OperationMedical,
RfidIdentify,

/** assurance elements */
Assurance,
Maladie,
Police,
policeOps,

/** structure */
Structure,
Assure,


/** partenaires */
Partenaire,
Clinique,
Labo,
Pharmacy,
CliniqueLabo ,

/** agent */
AgentAssurance,
AgentPharma,
AgentClinique,
AgentCliniqueLabo,
AgentLabo,
produitMedical
}                             