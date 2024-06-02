const { AssureControllers } = require('./controllers/assureControlleur');
const { AssuranceControllers } = require('./controllers/assuranceControlleur');
const { CliniqueControllers } = require('./controllers/cliniqueControlleur');

const {  PoliceControllers } = require('./controllers/policeControlleur');
const { PharmacyControllers } = require('./controllers/pharmacyControlleur');
const { LaboControllers } = require('./controllers/laboControlleur');

const { MedecinConseilleControllers } = require('./controllers/medecinconseilleControlleur');
const { MaladieControllers } = require('./controllers/maladieControlleur');
const { AgentCliniqueControllers } = require('./controllers/agentcliniqueControlleur');
const { AgentAssuranceControllers } = require('./controllers/agentAsuranceControllers');
const { PrescriptionControllers } = require('./controllers/prescriptionControllers');
const { ReclammationControllers } = require('./controllers/reclammationControllers');


const { PartenaireControllers } = require('./controllers/partenaireController');
const { StructureControllers } = require('./controllers/structureController');
const { CategoriControllers } = require('./controllers/CategoriController');
const { OperationMedicalControllers } = require('./controllers/operationMedicalControlleur');


module.exports={
    AssureControllers ,
    AssuranceControllers,
    CliniqueControllers,
  
    PoliceControllers,
     PharmacyControllers,
     LaboControllers,
    AgentAssuranceControllers,
    MedecinConseilleControllers,
    MaladieControllers,
    AgentCliniqueControllers ,

    ReclammationControllers,
    StructureControllers,
    PartenaireControllers,
    PrescriptionControllers,
    CategoriControllers,
    OperationMedicalControllers    
}