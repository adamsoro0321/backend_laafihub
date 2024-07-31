const {Sequelize,DataTypes} = require('sequelize');


/*Importation des models*/
const {
  AssuranceModel, 
  AgentAssuranceModel,
  AgentCliniqueModel,
  AssureModel, 
  MaladieModel, 
  PoliceModel, 
  ReclammationModel, 
  StructureModel,
  PartenaireModel,
  RfidIdentifyModel,
  AgentCliniqueLaboModel,
  AgentLaboModel,
  AgentPharmacyceModel,
  PrescriptionModel,
  ProduidMedicalModel,
  ModulePoliceModel,
  ModulePoliceRelationModel,
  PrescriptionProduitRelationModel,
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

const Maladie = MaladieModel(appSequelize,DataTypes);

const Partenaire=PartenaireModel(appSequelize,DataTypes);
const RfidIdentify=RfidIdentifyModel(appSequelize,DataTypes);

const Police =PoliceModel(appSequelize,DataTypes)
const ModulePolice=ModulePoliceModel(appSequelize,DataTypes)

const Assurance =AssuranceModel(appSequelize,DataTypes)
const Assure =AssureModel(appSequelize,DataTypes,Police,Structure)

const createPartenaireType = (type) => PartenaireModel(appSequelize, DataTypes).scope({ where: { type } });

const Clinique = createPartenaireType('clinique');
const Labo = createPartenaireType('laboratoire');
const Pharmacy = createPartenaireType('pharmacy');
const CliniqueLabo = createPartenaireType('clinique_laboratoire');

/*
const AgentAssurance = AgentAssuranceModel(appSequelize,DataTypes)
const AgentClinique = createAgentModel(appSequelize, DataTypes, 'AgentClinique', Clinique);
const AgentLabo = createAgentModel(appSequelize, DataTypes, 'AgentLabo', Labo);
const AgentPharma = createAgentModel(appSequelize,  DataTypes, 'AgentCliniqueLabo', CliniqueLabo);
*/

const AgentClinique = AgentCliniqueModel(appSequelize,DataTypes,Clinique)
const AgentAssurance = AgentAssuranceModel(appSequelize,DataTypes)
const AgentLabo =AgentLaboModel(appSequelize,DataTypes,Labo) ;
const AgentPharma = AgentPharmacyceModel(appSequelize,DataTypes,Pharmacy);
const AgentCliniqueLabo =AgentCliniqueLaboModel(appSequelize,DataTypes,CliniqueLabo);

const Prescription = PrescriptionModel(appSequelize,DataTypes, Assure,AgentClinique,AgentAssurance,AgentPharma,AgentLabo);

const Reclammation = ReclammationModel(appSequelize,DataTypes,Assure,AgentAssurance) ;




const produitMedical= ProduidMedicalModel(appSequelize,DataTypes);
const ModulePoliceRelation =ModulePoliceRelationModel(appSequelize,DataTypes) ;


const PrescriptionProduitRelation = PrescriptionProduitRelationModel(appSequelize,DataTypes) ;

/** ====================realtion entre les different entité ==========*/


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



/** police ->policeModule */
Police.belongsToMany(ModulePolice,{
     through: ModulePoliceRelation
    }) ;
ModulePolice.belongsToMany(Police,{
   through: ModulePoliceRelation
  }) ;

/** prescription-> produiit */

Prescription.belongsToMany(produitMedical,{
   through:PrescriptionProduitRelation
} )
produitMedical.belongsToMany(Prescription,{
   through:PrescriptionProduitRelation
})


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
 // Associations for Clinique and AgentClinique
 Clinique.hasMany(AgentClinique, {
  foreignKey: 'idClinique',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
AgentClinique.belongsTo(Clinique, {
  foreignKey: 'idClinique',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// Associations for Labo and AgentLabo
Labo.hasMany(AgentLabo, {
  foreignKey: 'idLabo',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
AgentLabo.belongsTo(Labo, {
  foreignKey: 'idLabo',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// Associations for Pharmacy and AgentPharma
Pharmacy.hasMany(AgentPharma, {
  foreignKey: 'idPharmacy',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
AgentPharma.belongsTo(Pharmacy, {
  foreignKey: 'idPharmacy',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// Associations for CliniqueLabo and AgentCliniqueLabo
CliniqueLabo.hasMany(AgentCliniqueLabo, {
  foreignKey: 'idCliniqueLabo',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
AgentCliniqueLabo.belongsTo(CliniqueLabo, {
  foreignKey: 'idCliniqueLabo',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});





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

// Relations agentPharmacy (Validation) -> Prescription
AgentPharma.hasMany(Prescription, { as: 'AgentPharmacy', foreignKey: 'idAgentPharmacy' });
Prescription.belongsTo(AgentPharma, { as: 'AgentParmacy', foreignKey: 'idAgentPharmacy' });

// Relations agentPharmacy (Validation) -> Prescription
AgentLabo.hasMany(Prescription, { as: 'AgentLabo', foreignKey: 'idAgentLabo' });
Prescription.belongsTo(AgentLabo, { as: 'AgentLabo', foreignKey: 'idAgentLabo' });

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

Prescription,
Reclammation,
RfidIdentify,

/** assurance elements */
Assurance,
Maladie,
Police,

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
produitMedical,
ModulePolice,

}                             