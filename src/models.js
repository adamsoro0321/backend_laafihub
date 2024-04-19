const {AssuranceModel} =require('./models/assurance')
const {CliniqueModel} =require('./models/clinique')
const {PharmacyModel} =require('./models/pharmacy')


const {AgentAssuranceModel} =require('./models/agentassurance')
const {AgentCliniqueModel} =require('./models/agentclinique')

const {AssureModel} =require('./models/assure')
const {LaboModel} =require('./models/labo')

const {MedecinCliniqueModel} =require('./models/medecinclinique')
const {MaladieModel} =require('./models/maladie')
const {PoliceMaladieModel} =require('./models/policemaladie')
const {PoliceAssuranceModel} =require('./models/police');
const { ApprobationModel } = require('./models/approbation');
const { ReclammationModel } = require('./models/reclammation');

/** v2 introduction de la structure */
const { CategorieModel } = require('./models/Categorie');
const { StructureModel } = require('./models/Structure');
const { OffreModel } = require('./models/Offre');
const { OffreCategorieModel } = require('./models/OffreCategorie');
const { OperationMedicalModel } = require('./models/OperationMedicales');
const { PoliceOperationMedicalModel } = require('./models/policeOperationMedical');

module.exports={
    AssuranceModel,
CliniqueModel,
PharmacyModel,
AgentAssuranceModel,
AgentCliniqueModel,
AssureModel,
LaboModel,
MedecinCliniqueModel,
MaladieModel,
PoliceMaladieModel,
PoliceAssuranceModel,
ApprobationModel,
 ReclammationModel,
 CategorieModel,
StructureModel ,
OffreModel,
OffreCategorieModel ,
 OperationMedicalModel ,
PoliceOperationMedicalModel
}