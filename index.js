const express= require('express')
const {appSequilize }= require('./src/sequelize');
const bodyParser = require('body-parser');

const { AssureControllers } = require('./src/controllers/assureControlleur');
const { AssuranceControllers } = require('./src/controllers/assuranceControlleur');
const { CliniqueControllers } = require('./src/controllers/cliniqueControlleur');
const { MedecinCliniqueControllers } = require('./src/controllers/medecincliniqueControlleur');
const { PoliceAssuranceControllers } = require('./src/controllers/policeassuranceControlleur');
const { PharmacyControllers } = require('./src/controllers/pharmacyControlleur');
const { LaboControllers } = require('./src/controllers/laboControlleur');
const { AgentAssuranceControllers } = require('./src/controllers/agentassuranceControlleur');
const { MedecinConseilleControllers } = require('./src/controllers/medecinconseilleControlleur');
const { MaladieControllers } = require('./src/controllers/maladieControlleur');
const { AgentCliniqueControllers } = require('./src/controllers/agentcliniqueControlleur');
const { AdminCliniqueControllers } = require('./src/controllers/admincliniqueControlleur');
const { AdminAssuranceControllers } = require('./src/controllers/adminassuranceControllers');


//ms@Off45

const app =express()
const port =5000 ;

app.use(bodyParser.json()) ;

/** assure endpont */
 app.get('/api/v1/assure', (req,res)=> AssureControllers.getAllAssure(req,res));
 app.get('/api/v1/assure/:id',(req,res)=>AssureControllers.getAssureById(req, res));
 app.put('/api/v1/assure/:id',(req,res)=>AssureControllers.updatAssure(req,res));
 app.post('/api/v1/assure',(req,res)=>AssureControllers.createAssure(req,res));
 app.delete('/api/v1/assure/:id',(req,res)=>AssureControllers.deleteAssure(req,res))

 /**assurance endpoind */
 app.get('/api/v1/assurance', (req,res)=> AssuranceControllers.getAllAssurance(req,res));
 app.get('/api/v1/assurance/:id',(req,res)=>AssuranceControllers.getAssuranceById(req, res));
 app.put('/api/v1/assurance/:id',(req,res)=>AssuranceControllers.updatAssurance(req,res));
 app.post('/api/v1/assurance',(req,res)=>AssuranceControllers.createAssurance(req,res));
 app.delete('/api/v1/assurance/:id',(req,res)=>AssuranceControllers.deleteAssurance(req,res)) ;

/**clinique endpoint  */ CliniqueControllers
app.get('/api/v1/clinique', (req,res)=> CliniqueControllers.getAllClinique(req,res));
app.get('/api/v1/clinique/:id',(req,res)=>CliniqueControllers.getCliniqueById(req, res));
app.put('/api/v1/clinique/:id',(req,res)=>CliniqueControllers.updateClinique(req,res));
app.post('/api/v1/clinique',(req,res)=>CliniqueControllers.createClinique(req,res));
app.delete('/api/v1/clinique/:id',(req,res)=>CliniqueControllers.deleteClinique(req,res)) ;

/**MedecinCliniqueControllers */ 

app.get('/api/v1/medecinclinique', (req,res)=> MedecinCliniqueControllers.getAllMedecinClinique(req,res));
app.get('/api/v1/medecinclinique/:id',(req,res)=>MedecinCliniqueControllers.getMedecinCliniqueById(req, res));
app.put('/api/v1/medecinclinique/:id',(req,res)=>MedecinCliniqueControllers.updatMedecinClinique(req,res));
app.post('/api/v1/medecinclinique',(req,res)=>MedecinCliniqueControllers.createMedecinClinique(req,res));
app.delete('/api/v1/medecinclinique/:id',(req,res)=>MedecinCliniqueControllers.deleteMedecinClinique(req,res)) ;

/**PoliceAssuranceControllers */ 
app.get('/api/v1/police', (req,res)=> PoliceAssuranceControllers.getAllPoliceAssurance(req,res));
app.get('/api/v1/police/:id',(req,res)=>PoliceAssuranceControllers.getPoliceAssuranceById(req, res));
app.put('/api/v1/police/:id',(req,res)=>PoliceAssuranceControllers.updatePoliceAssurance(req,res));
app.post('/api/v1/police',(req,res)=>PoliceAssuranceControllers.createPoliceAssurance(req,res));
app.delete('/api/v1/police/:id',(req,res)=>PoliceAssuranceControllers.deletePoliceAssurance(req,res)) ;

/**Pharmacy endpoint*/

app.get('/api/v1/pharmacy', (req,res)=>PharmacyControllers.getAllPharmacy(req,res));
app.get('/api/v1/pharmacy/:id',(req,res)=>PharmacyControllers.getPharmacyById(req, res));
app.put('/api/v1/pharmacy/:id',(req,res)=>PharmacyControllers.updatPharmacy(req,res));
app.post('/api/v1/pharmacy',(req,res)=>PharmacyControllers.createPharmacy(req,res));
app.delete('/api/v1/pharmacy/:id',(req,res)=>PharmacyControllers.deletePharmacypharmacy(req,res)) ;



/**MedecinConseilleControllers */ 
app.get('/api/v1/medecinconseille', (req,res)=> MedecinConseilleControllers.getAllMedecinConseille(req,res));
app.get('/api/v1/medecinconseille/:id',(req,res)=>MedecinConseilleControllers.getMedecinConseilleById(req, res));
app.put('/api/v1/medecinconseille/:id',(req,res)=>MedecinConseilleControllers.updateMedecinConseille(req,res));
app.post('/api/v1/medecinconseille',(req,res)=>MedecinConseilleControllers.createMedecinConseille(req,res));
app.delete('/api/v1/medecinconseille/:id',(req,res)=>MedecinConseilleControllers.deleteMedecinConseille(req,res)) ;




 /**LaboControllers */ 
app.get('/api/v1/labo', (req,res)=> LaboControllers.getAllLabo(req,res));
app.get('/api/v1/labo/:id',(req,res)=>LaboControllers.getLaboById(req, res));
app.put('/api/v1/labo/:id',(req,res)=>LaboControllers.updateLabo(req,res));
app.post('/api/v1/labo',(req,res)=>LaboControllers.createLabo(req,res));
app.delete('/api/v1/labo/:id',(req,res)=>LaboControllers.deleteLabo(req,res)) ;


/**MaladieControllers */
app.get('/api/v1/maladie', (req,res)=> MaladieControllers.getAllMaladie(req,res));
app.get('/api/v1/maladie/:id',(req,res)=>MaladieControllers.getMaladieById(req, res));
app.put('/api/v1/maladie/:id',(req,res)=>MaladieControllers.updateMaladie(req,res));
app.post('/api/v1/maladie',(req,res)=>MaladieControllers.createMaladie(req,res));
app.delete('/api/v1/maladie/:id',(req,res)=>MaladieControllers.deleteMaladie(req,res)) ;


/** endpoint agentclinque  */


/**AdminCliniqueControllers */ 
app.get('/api/v1/adminclinique', (req,res)=> AdminCliniqueControllers.getAllAdminClinique(req,res));
app.get('/api/v1/adminclinique/:id',(req,res)=>AdminCliniqueControllers.getAdminCliniqueById(req, res));
app.put('/api/v1/adminclinique/:id',(req,res)=>AdminCliniqueControllers.updateAdminClinique(req,res));
app.post('/api/v1/adminclinique',(req,res)=>AdminCliniqueControllers.createAdminClinique(req,res));
app.delete('/api/v1/adminclinique/:id',(req,res)=>AdminCliniqueControllers.deleteAdminClinique(req,res)) ;


/**adminassurance*/
app.get('/api/v1/adminassurance', (req,res)=> AdminAssuranceControllers.getAllAdminAssurance(req,res));
app.get('/api/v1/adminassurance/:id',(req,res)=>AdminAssuranceControllers.getAdminAssuranceById(req, res));
app.put('/api/v1/adminassurance/:id',(req,res)=>AdminAssuranceControllers.updatAdminAssurance(req,res));
app.post('/api/v1/adminassurance',(req,res)=>AdminAssuranceControllers.createAdminAssurance(req,res));
app.delete('/api/v1/adminassurance/:id',(req,res)=>AdminAssuranceControllers.deleteAdminAssurance(req,res)) ;


/**AgentAssuranceControllers */ 
app.get('/api/v1/agentassurance', (req,res)=> AgentAssuranceControllers.getAllAgentAssurance(req,res));
app.get('/api/v1/agentassurance/:id',(req,res)=>AgentAssuranceControllers.getAgentAssuranceById(req, res));
app.put('/api/v1/agentassurance/:id',(req,res)=>AgentAssuranceControllers.updateAgentAssurance(req,res));
app.post('/api/v1/agentassurance',(req,res)=>AgentAssuranceControllers.createAgentAssurance(req,res));
app.delete('/api/v1/agentassurance/:id',(req,res)=>AgentAssuranceControllers.deleteAgentAssurance(req,res)) ;



/**agentCliniqueControllers */ 
app.get('/api/v1/agentclinique', (req,res)=> agentCliniqueControllers.getAllagentClinique(req,res));
app.get('/api/v1/agentclinique/:id',(req,res)=>agentCliniqueControllers.getagentCliniqueById(req, res));
app.put('/api/v1/agentclinique/:id',(req,res)=>agentCliniqueControllers.updateagentClinique(req,res));
app.post('/api/v1/agentclinique',(req,res)=>agentCliniqueControllers.createagentClinique(req,res));
app.delete('/api/v1/agentclinique/:id',(req,res)=>agentCliniqueControllers.deleteagentClinique(req,res)) ;
 
app.use((req,res)=>{
    res.status(404).send("ressource not found !")
 })
app.listen(port,()=>{console.log("app is running on port "+port)})  