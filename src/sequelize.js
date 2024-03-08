const {Sequelize,DataTypes} = require('sequelize');
const {DB} =require('./config')
/*Importation des models*/
const {AssuranceModel} =require('./models/assurance')
const {CliniqueModel} =require('./models/clinique')
const {PharmacyModel} =require('./models/pharmacy')

const {AdminAssuranceModel} =require('./models/adminassurance')
const {AdminCliniqueModel} =require('./models/adminclinique')
const {AgentAssuranceModel} =require('./models/agentassurance')
const {AgentCliniqueModel} =require('./models/agentclinique')
const {AssuranceCliniqueModel} =require('./models/assuranceclinique')
const {AssuranceLaboModel} =require('./models/assurancelabo')
const {AssurancePharmacyModel} =require('./models/assurancepharmacy')
const {AssureModel} =require('./models/assure')
const {LaboModel} =require('./models/labo')
const {MedecinConseilleModel} =require('./models/medecinconseille')
const {MedecinCliniqueModel} =require('./models/medecinclinique')
const {MaladieModel} =require('./models/maladie')
const {PoliceMaladieModel} =require('./models/policemaladie')
const {PoliceAssuranceModel} =require('./models/policeassurance');
const { ApprobationModel } = require('./models/approbation');
const { ReclammationModel } = require('./models/reclammation');
const { AssurePoliceModel } = require('./models/assurepolice');

const appSequelize = new Sequelize(DB.database, DB.username, DB.password, {
    host: DB.host,
    dialect:  DB.dialect,
   logging: true,
  });

  (async()=>{
    try {
        await appSequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})() 


const Assurance =AssuranceModel(appSequelize,DataTypes)
const Assure =AssureModel(appSequelize,DataTypes,Assurance)
const AdminAssurance =AdminAssuranceModel(appSequelize,DataTypes,Assurance)
const Clinique =CliniqueModel(appSequelize,DataTypes)
const AgentClinique = AgentCliniqueModel(appSequelize,DataTypes,Clinique)
const AgentAssurance = AgentAssuranceModel(appSequelize,DataTypes,Assurance)

const AdminClinique = AdminCliniqueModel(appSequelize,DataTypes,Clinique)
const Labo =LaboModel(appSequelize,DataTypes)
const Pharmacy =PharmacyModel(appSequelize,DataTypes)
const MedecinConseille =MedecinConseilleModel(appSequelize,DataTypes,Assurance)
const MedecinClinique =MedecinCliniqueModel(appSequelize,DataTypes,Clinique)

const Maladie =MaladieModel(appSequelize,DataTypes)
const PoliceAssurance =PoliceAssuranceModel(appSequelize,DataTypes)
const AssurancePharmacy =AssurancePharmacyModel(appSequelize,DataTypes,Assurance, Pharmacy)
const AssuranceClinique =AssuranceCliniqueModel(appSequelize,DataTypes,Assurance,Clinique)

const AssuranceLabo =AssuranceLaboModel(appSequelize,DataTypes,Assurance, Labo)

const PoliceMaladie = PoliceMaladieModel(appSequelize,DataTypes,PoliceAssurance, Maladie)
const Approbation = ApprobationModel(appSequelize,DataTypes,MedecinClinique, Assure)

const Reclammation = ReclammationModel(appSequelize,DataTypes, Assure)
const AssurePolice = AssurePoliceModel(appSequelize,DataTypes, Assurance, PoliceAssurance, Assure)

appSequelize.sync({alter:true}).then(_=>console.log("sync succes"))
                                .catch((e)=>{
                                  console.log('error',"===>", e)
                                }) ;
                       
                                

module.exports ={
  appSequelize,
  Assurance,
Assure,
AdminAssurance,
Clinique,
AgentClinique,
AdminClinique,
Labo,
Pharmacy,
MedecinConseille,
MedecinClinique,
Maladie,
PoliceAssurance,
AssurancePharmacy,
AssuranceClinique,
AssuranceLabo,
PoliceMaladie,
Approbation,
Reclammation,
AssurePolice
}                                