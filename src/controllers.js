const { AssureControllers } = require('./controllers/assureControlleur');
const { AssuranceControllers } = require('./controllers/assuranceControlleur');
const { CliniqueControllers } = require('./controllers/cliniqueControlleur');
const { MedecinCliniqueControllers } = require('./controllers/medecincliniqueControlleur');
const { PoliceAssuranceControllers } = require('./controllers/policeassuranceControlleur');
const { PharmacyControllers } = require('./controllers/pharmacyControlleur');
const { LaboControllers } = require('./controllers/laboControlleur');
const { AgentAssuranceControllers } = require('./controllers/agentassuranceControlleur');
const { MedecinConseilleControllers } = require('./controllers/medecinconseilleControlleur');
const { MaladieControllers } = require('./controllers/maladieControlleur');
const { AgentCliniqueControllers } = require('./controllers/agentcliniqueControlleur');
const { AdminCliniqueControllers } = require('./controllers/admincliniqueControlleur');
const { AdminAssuranceControllers } = require('./controllers/adminassuranceControllers');
const { ApprobationControllers } = require('./controllers/approbationControllers');
const { ReclammationControllers } = require('./controllers/reclammationControllers');
const { StructureControllers } = require('./controllers/structureController');
const { AssurePoliceControllers } = require('./controllers/assurepoliceControllers');

module.exports={
    AssurePoliceControllers,
    AssureControllers ,
    AssuranceControllers,
     CliniqueControllers,
    MedecinCliniqueControllers,
    PoliceAssuranceControllers,
     PharmacyControllers,
     LaboControllers,
    AgentAssuranceControllers,
    MedecinConseilleControllers,
    MaladieControllers,
    AgentCliniqueControllers ,
    AdminCliniqueControllers ,
    AdminAssuranceControllers,
    ApprobationControllers ,
    ReclammationControllers,
    StructureControllers
        
}