const express= require('express')
const {appSequilize }= require('./src/sequelize');
const bodyParser = require('body-parser');
const bcrypt =require('bcrypt');
const cors =require('cors') ;
const { AssureControllers ,
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
    StructureControllers } = require('./src/controllers');


const AppMulter = require('./src/multer');
const auth = require('./src/auth/auth');

const app =express()
app.use(bodyParser.json()) ;
app.use(cors())

/** root */
app.get('/',(req,res)=>{
   res.json({message:"BienVenue sur laafiSeeb API :  "})
} )

/**1.0 agent assurance */
app.post('/api/v1/asssurance/agent/login',(req,res)=>AgentAssuranceControllers.login(req,res) ) ;
app.get('/api/v1/asssurance/agent', (req,res)=> AgentAssuranceControllers.getAllAgentAssurance(req,res));
 app.get('/api/v1/asssurance/agent/:id',(req,res)=>AgentAssuranceControllers.getAgentAssuranceById(req, res));
 app.put('/api/v1/asssurance/agent/:id',(req,res)=>AgentAssuranceControllers.updatAgentAssurance(req,res));
 app.post('/api/v1/asssurance/agent',(req,res)=>AgentAssuranceControllers.createAgentAssurance(req,res));
 app.delete('/api/v1/asssurance/agent/:id',(req,res)=>AgentAssuranceControllers.deleteAgentAssurance(req,res))

/**2.0 assure endpont */
 app.get('/api/v1/assure', (req,res)=> AssureControllers.getAllAssure(req,res));
 app.get('/api/v1/assure/:id',(req,res)=>AssureControllers.getAssureById(req, res));
 app.put('/api/v1/assure/:id',(req,res)=>AssureControllers.updatAssure(req,res));
 app.post('/api/v1/assure',(req,res)=>AssureControllers.createAssure(req,res));
 app.delete('/api/v1/assure/:id',(req,res)=>AssureControllers.deleteAssure(req,res))

 /**3.0 assurance endpoint */
 app.get('/api/v1/assurance',(req,res,next)=>auth(req,res,next),(req,res)=> AssuranceControllers.getAllAssurance(req,res));
 app.get('/api/v1/assurance/:id',(req,res,next)=>auth(req,res,next),(req,res)=>AssuranceControllers.getAssuranceById(req, res));
 app.put('/api/v1/assurance/:id',(req,res,next)=>auth(req,res,next),(req,res)=>AssuranceControllers.updatAssurance(req,res));
 app.post('/api/v1/assurance',(req,res,next)=>auth(req,res,next),(req,res)=>AssuranceControllers.createAssurance(req,res));
 app.delete('/api/v1/assurance/:id',(req,res,next)=>auth(req,res,next),(req,res)=>AssuranceControllers.deleteAssurance(req,res)) ;

/**4.0 clinique endpoint  */
app.get('/api/v1/clinique', (req,res)=> CliniqueControllers.getAllClinique(req,res));
app.get('/api/v1/clinique/:id',(req,res)=>CliniqueControllers.getCliniqueById(req, res));
app.put('/api/v1/clinique/:id',(req,res)=>CliniqueControllers.updateClinique(req,res));
app.post('/api/v1/clinique',(req,res)=>CliniqueControllers.createClinique(req,res));
app.delete('/api/v1/clinique/:id',(req,res)=>CliniqueControllers.deleteClinique(req,res)) ;

/** 5.0 MedecinCliniqueControllers */ 
app.get('/api/v1/medecinclinique', (req,res)=> MedecinCliniqueControllers.getAllMedecinClinique(req,res));
app.get('/api/v1/medecinclinique/:id',(req,res)=>MedecinCliniqueControllers.getMedecinCliniqueById(req, res));
app.put('/api/v1/medecinclinique/:id',(req,res)=>MedecinCliniqueControllers.updatMedecinClinique(req,res));
app.post('/api/v1/medecinclinique',(req,res)=>MedecinCliniqueControllers.createMedecinClinique(req,res));
app.delete('/api/v1/medecinclinique/:id',(req,res)=>MedecinCliniqueControllers.deleteMedecinClinique(req,res)) ;

/**6.0 PoliceAssuranceControllers */ 
app.get('/api/v1/police', (req,res)=> PoliceAssuranceControllers.getAllPoliceAssurance(req,res));
app.get('/api/v1/police/:id',(req,res)=>PoliceAssuranceControllers.getPoliceAssuranceById(req, res));
app.put('/api/v1/police/:id',(req,res)=>PoliceAssuranceControllers.updatePoliceAssurance(req,res));
app.post('/api/v1/police',(req,res)=>PoliceAssuranceControllers.createPoliceAssurance(req,res));
app.delete('/api/v1/police/:id',(req,res)=>PoliceAssuranceControllers.deletePoliceAssurance(req,res)) ;

/**7.0 Pharmacy endpoint*/

app.get('/api/v1/pharmacy', (req,res)=>PharmacyControllers.getAllPharmacy(req,res));
app.get('/api/v1/pharmacy/:id',(req,res)=>PharmacyControllers.getPharmacyById(req, res));
app.put('/api/v1/pharmacy/:id',(req,res)=>PharmacyControllers.updatPharmacy(req,res));
app.post('/api/v1/pharmacy',(req,res)=>PharmacyControllers.createPharmacy(req,res));
app.delete('/api/v1/pharmacy/:id',(req,res)=>PharmacyControllers.deletePharmacypharmacy(req,res)) ;



/**8.0 MedecinConseilleControllers */ 
app.get('/api/v1/medecinconseille', (req,res)=> MedecinConseilleControllers.getAllMedecinConseille(req,res));
app.get('/api/v1/medecinconseille/:id',(req,res)=>MedecinConseilleControllers.getMedecinConseilleById(req, res));
app.put('/api/v1/medecinconseille/:id',(req,res)=>MedecinConseilleControllers.updateMedecinConseille(req,res));
app.post('/api/v1/medecinconseille',(req,res)=>MedecinConseilleControllers.createMedecinConseille(req,res));
app.delete('/api/v1/medecinconseille/:id',(req,res)=>MedecinConseilleControllers.deleteMedecinConseille(req,res)) ;




 /**9.0  LaboControllers */ 
app.get('/api/v1/labo', (req,res)=> LaboControllers.getAllLabo(req,res));
app.get('/api/v1/labo/:id',(req,res)=>LaboControllers.getLaboById(req, res));
app.put('/api/v1/labo/:id',(req,res)=>LaboControllers.updateLabo(req,res));
app.post('/api/v1/labo',(req,res)=>LaboControllers.createLabo(req,res));
app.delete('/api/v1/labo/:id',(req,res)=>LaboControllers.deleteLabo(req,res)) ;


/**10.0 MaladieControllers */
app.get('/api/v1/maladie', (req,res)=> MaladieControllers.getAllMaladie(req,res));
app.get('/api/v1/maladie/:id',(req,res)=>MaladieControllers.getMaladieById(req, res));
app.put('/api/v1/maladie/:id',(req,res)=>MaladieControllers.updateMaladie(req,res));
app.post('/api/v1/maladie',(req,res)=>MaladieControllers.createMaladie(req,res));
app.delete('/api/v1/maladie/:id',(req,res)=>MaladieControllers.deleteMaladie(req,res)) ;


/**11.0 endpoint agentclinque  */


/**12.0 AdminClinique */ 
app.get('/api/v1/adminclinique', (req,res)=> AdminCliniqueControllers.getAllAdminClinique(req,res));
app.get('/api/v1/adminclinique/:id',(req,res)=>AdminCliniqueControllers.getAdminCliniqueById(req, res));
app.put('/api/v1/adminclinique/:id',(req,res)=>AdminCliniqueControllers.updateAdminClinique(req,res));
app.post('/api/v1/adminclinique',(req,res)=>AdminCliniqueControllers.createAdminClinique(req,res));
app.delete('/api/v1/adminclinique/:id',(req,res)=>AdminCliniqueControllers.deleteAdminClinique(req,res)) ;


/**13.0 adminassurance*/
app.get('/api/v1/adminassurance', (req,res)=> AdminAssuranceControllers.getAllAdminAssurance(req,res));
app.get('/api/v1/adminassurance/:id',(req,res)=>AdminAssuranceControllers.getAdminAssuranceById(req, res));
app.put('/api/v1/adminassurance/:id',(req,res)=>AdminAssuranceControllers.updatAdminAssurance(req,res));
app.post('/api/v1/adminassurance',(req,res)=>AdminAssuranceControllers.createAdminAssurance(req,res));
app.delete('/api/v1/adminassurance/:id',(req,res)=>AdminAssuranceControllers.deleteAdminAssurance(req,res)) ;


/**14.0 AgentAssuranceControllers */ 
app.get('/api/v1/agentassurance', (req,res)=> AgentAssuranceControllers.getAllAgentAssurance(req,res));
app.get('/api/v1/agentassurance/:id',(req,res)=>AgentAssuranceControllers.getAgentAssuranceById(req, res));
app.put('/api/v1/agentassurance/:id',(req,res)=>AgentAssuranceControllers.updateAgentAssurance(req,res));
app.post('/api/v1/agentassurance',(req,res)=>AgentAssuranceControllers.createAgentAssurance(req,res));
app.delete('/api/v1/agentassurance/:id',(req,res)=>AgentAssuranceControllers.deleteAgentAssurance(req,res)) ;



/**15.0 agentCliniqueControllers */ 
app.get('/api/v1/agentclinique', (req,res)=> AgentCliniqueControllers.getAllAgentClinique(req,res));
app.get('/api/v1/agentclinique/:id',(req,res)=>AgentCliniqueControllers.getAgentCliniqueById(req, res));
app.put('/api/v1/agentclinique/:id',(req,res)=>AgentCliniqueControllers.updateAgentClinique(req,res));
app.post('/api/v1/agentclinique',(req,res)=>AgentCliniqueControllers.createAgentClinique(req,res));
app.delete('/api/v1/agentclinique/:id',(req,res)=>AgentCliniqueControllers.deleteAgentClinique(req,res)) ;
 

/**16.0 approbationControllers */ 
app.get('/api/v1/approbation', (req,res)=> ApprobationControllers.getAllApprobation(req,res));
app.get('/api/v1/approbation/:id',(req,res)=>ApprobationControllers.getApprobationById(req, res));
app.put('/api/v1/approbation/:id',(req,res)=>ApprobationControllers.updAteapprobation(req,res));
app.post('/api/v1/approbation',(req,res)=>ApprobationControllers.createApprobation(req,res));
app.delete('/api/v1/approbation/:id',(req,res)=>ApprobationControllers.deleteApprobation(req,res)) ;
 
/**17.0 ReclammationControllers */ 
app.get('/api/v1/reclammation', (req,res)=> ReclammationControllers.getAllReclammation(req,res));
app.get('/api/v1/reclammation/:id',(req,res)=>ReclammationControllers.getReclammationById(req, res));
app.put('/api/v1/reclammation/:id',(req,res)=>ReclammationControllers.updAteReclammation(req,res));
app.post('/api/v1/reclammation',(req,res)=>ReclammationControllers.createReclammation(req,res));
app.delete('/api/v1/reclammation/:id',(req,res)=>ReclammationControllers.deleteReclammation(req,res)) ;
 

/**18.0 AssurePoliceControllers */ 
app.get('/api/v1/assurepolice', (req,res)=> AssurePoliceControllers.getAllAssurePolice(req,res));
app.get('/api/v1/assurepolice/:id',(req,res)=>AssurePoliceControllers.getAssurePoliceById(req, res));
app.put('/api/v1/assurepolice/:id',(req,res)=>AssurePoliceControllers.updAteAssurePolice(req,res));
app.post('/api/v1/assurepolice',(req,res)=>AssurePoliceControllers.createAssurePolice(req,res));
app.delete('/api/v1/assurepolice/:id',(req,res)=>AssurePoliceControllers.deleteAssurePolice(req,res)) ;

/**19.0 Structure endpoint */

app.get('/api/v1/structures', (req,res)=>StructureControllers.getAllStructure(req,res) );
app.get('/api/v1/stucture/:id',(req,res)=>StructureControllers.getStructureById(req, res));
app.put('/api/v1/structure/:id',(req,res)=>StructureControllers.updatStructure(req,res));
app.post('/api/v1/structure',(req,res)=>StructureControllers.createStructure(req,res));
app.delete('/api/v1/structure/:id',(req,res)=>StructureControllers.deleteStructure(req,res)) ;

/**20.0 offre endpoint */
app.get('/api/v1/offres', (req,res)=>StructureControllers.getAllStructure(req,res) );
app.get('/api/v1/offre/:id',(req,res)=>StructureControllers.getStructureById(req, res));
app.put('/api/v1/offre/:id',(req,res)=>StructureControllers.updatStructure(req,res));
app.post('/api/v1/offre',(req,res)=>StructureControllers.createStructure(req,res));
app.delete('/api/v1/offre/:id',(req,res)=>StructureControllers.deleteStructure(req,res)) ;



/** upload image with multer */

app.post('/api/v1/image', AppMulter.single('file'),(req,res)=>{
    res.jsonp({message:'succes'})
}) ;

/** RFID  http://192.168.1.81:5000/api/v1/rfid */

/** auth with rfid */
app.post('/api/v1/rfid/auth', (req,res)=>{
      const data =req.body ;
      const {matricule,rfid }=req.body ;
      if (matricule) {
        /** update user rfid info */


      }
       console.log(`data from rfid card ${JSON.stringify(data)} `)
       res.status(202).json({message:'Succes'}) ;

} ) ;
/** share location by rfid */
app.post('/api/v1/rfid/location', (req,res)=>{
    const data =req.body ;
    const {cliniqueCode,rfid }=req.body ;
    if (cliniqueCode) {
      /**  */
      

    }
     console.log(`data from rfid card ${JSON.stringify(data)} `)
     res.status(202).json({message:'Succes'}) ;

} ) ;
/***  */

app.use((req,res)=>{
    res.status(404).send("ressource not found !")
 })


module.exports=app ;