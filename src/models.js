const {AssuranceModel} =require('./models/assurance')
const {CliniqueModel} =require('./models/clinique')
const {PharmacyModel} =require('./models/pharmacy')




const {AssureModel} =require('./models/assure')
const {LaboModel} =require('./models/labo')

const {MaladieModel} =require('./models/maladie')
const {PoliceMaladieModel} =require('./models/policemaladie')
const {PoliceModel} =require('./models/police');

const { ReclammationModel } = require('./models/reclammation');

/** v2 introduction de la structure */
const { CategorieModel } = require('./models/Categorie');
const { StructureModel } = require('./models/Structure');
const { OffreModel } = require('./models/Offre');
const { OffreCategorieModel } = require('./models/OffreCategorie');
const { OperationMedicalModel } = require('./models/OperationMedicales');
const { PoliceOperationMedicalModel } = require('./models/policeOperationMedical');
const { PartenaireModel } = require('./models/Partenaire')
const { RfidIdentifyModel } = require('./models/rfidIdentifyModel')

const {AgentAssuranceModel} =require('./models/agentassurance')
const {AgentCliniqueModel} =require('./models/agentclinique')
const { AgentPharmacyceModel } = require('./models/agentPharmacy');
const { AgentCliniqueLaboModel } = require('./models/agentCliniqueLabo');
const { AgentLaboModel } = require('./models/agentlabo')
const { PrescriptionModel } = require('./models/Prescription')


module.exports={
AssuranceModel,
CliniqueModel,
PharmacyModel,
AgentAssuranceModel,
AgentCliniqueModel,
AssureModel,
LaboModel,

MaladieModel,
PoliceMaladieModel,
PoliceModel,
PrescriptionModel,
ReclammationModel,
CategorieModel,
StructureModel ,
OffreModel,
OffreCategorieModel ,
OperationMedicalModel ,
PoliceOperationMedicalModel,
PartenaireModel,
RfidIdentifyModel,
AgentCliniqueLaboModel,
AgentLaboModel,
AgentPharmacyceModel
}