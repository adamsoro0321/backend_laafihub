const express= require('express')
const bodyParser = require('body-parser');
const cors =require('cors') ;

//RuMHQhy2sLYbnK4
const { 
    AssureControllers ,
    MedecinCliniqueControllers,
    OperationMedicalControllers ,
    AgentAssuranceControllers,

    MaladieControllers,
    AgentCliniqueControllers ,
    PoliceControllers,
    ReclammationControllers,
    StructureControllers,
    PartenaireControllers, 
    CategoriControllers,
    PrescriptionControllers} = require('./src/controllers');


const AppMulter = require('./src/multer');
const { kafka } = require('./src/kafka/kafka');
const { produitMedicalControllers } = require('./src/controllers/ProduidMedicalController');
const auth = require('./src/middleware/auth/auth');
const { AgentLaboControllers } = require('./src/controllers/agentLaboratoireController');
const { AgentPharmaControllers } = require('./src/controllers/agentPharmacyControlleur');



const app =express();
app.use(bodyParser.json()) ;
app.use(cors())

/** root */
app.get('/',(req,res)=>{
   res.json({message:"BienVenue sur laafiSebe API v1 ! "})
} )

/**1.0 agent assurance */
 app.post('/api/v1/asssurance/agent/login',(req,res)=>AgentAssuranceControllers.login(req,res)) ;
 app.post('api/v1/change-password', (req, res) => AgentAssuranceControllers.changePassword(req, res));
 app.get('/api/v1/asssurance/agents',auth, (req,res)=> AgentAssuranceControllers.getAllAgentAssurance(req,res));
 app.get('/api/v1/asssurance/medecins',auth, (req,res)=> AgentAssuranceControllers.getAllMedecins(req,res));
 app.get('/api/v1/asssurance/admins',auth, (req,res)=> AgentAssuranceControllers.getAllAdmins(req,res));
 
 app.get('/api/v1/asssurance/agent/getmatricule/:codestrucutre',auth, (req,res)=>StructureControllers.getMatricule(req, res));
 app.get('/api/v1/asssurance/agent/:id',auth, (req,res)=>AgentAssuranceControllers.getAgentAssuranceById(req, res));

 app.put('/api/v1/asssurance/agent/:id',auth, (req,res)=>AgentAssuranceControllers.updatAgentAssurance(req,res));
 app.post('/api/v1/asssurance/agent',auth , AppMulter.single('file'),(req,res)=>AgentAssuranceControllers.createAgentAssurance(req,res));
 app.delete('/api/v1/asssurance/agent/:id',auth, (req,res)=>AgentAssuranceControllers.deleteAgentAssurance(req,res))
 app.get('/api/v1/asssurance/agents/type/:type',auth,  (req,res)=>AgentAssuranceControllers.getAllAgentWhere(req,res) )



/**2.0 assure endpont */
 app.get('/api/v1/assures',auth, (req,res)=> AssureControllers.getAllAssure(req,res));
 app.get('/api/v1/assure/:id',auth,(req,res)=>AssureControllers.getAssureById(req, res));
 app.put('/api/v1/assure/:id',auth, (req,res)=>AssureControllers.updatAssure(req,res));
 app.post('/api/v1/assure', AppMulter.single('file'), auth,(req,res)=>AssureControllers.createAssure(req,res));
 app.delete('/api/v1/assure/:id',auth,(req,res)=>AssureControllers.deleteAssure(req,res));

 /*** nomination a revoir */
 app.get('/api/v1/assure/prescriptions/:id',auth ,(req,res)=>AssureControllers.getPrescription(req, res));
 app.get('/api/v1/assure/:id/prescriptions',auth ,(req,res)=>AssureControllers.getPrescription(req, res));


/**4.0 partenaire endpoint  */
app.get('/api/v1/partenaires',auth, (req,res)=> PartenaireControllers.getAllPartenaire(req,res));
app.get('/api/v1/partenaire/getcode',auth, (req,res)=> PartenaireControllers.getCode(req,res));
app.get('/api/v1/partenaires/cliniques',auth, (req,res)=> PartenaireControllers.getAllClinique(req,res));
app.get('/api/v1/partenaires/pharmacies',auth, (req,res)=> PartenaireControllers.getAllPharmacy(req,res));
app.get('/api/v1/partenaires/laboratoires',auth, (req,res)=> PartenaireControllers.getAllLaboratoire(req,res));
app.get('/api/v1/partenaires/cliniquelaboratoires',auth, (req,res)=> PartenaireControllers.getAllCliniqueLaboratoire(req,res));
app.get('/api/v1/partenaire/:id',auth, (req,res)=>PartenaireControllers.getPartenaireById(req, res));
app.put('/api/v1/partenaire/:id',auth, (req,res)=>PartenaireControllers.updatPartenaire(req,res));
app.post('/api/v1/partenaire',auth, AppMulter.single('file'), (req,res)=>PartenaireControllers.createPartenaire(req,res));
app.delete('/api/v1/partenaire/:id',auth, (req,res)=>PartenaireControllers.deletePartenaire(req,res)) ;

/** 5.0 MedecinCliniqueControllers */ 
app.get('/api/v1/medecincliniques', auth, (req,res)=> MedecinCliniqueControllers.getAllMedecinClinique(req,res));
app.get('/api/v1/medecinclinique/:id',auth, (req,res)=>MedecinCliniqueControllers.getMedecinCliniqueById(req, res));
app.put('/api/v1/medecinclinique/:id',auth, (req,res)=>MedecinCliniqueControllers.updatMedecinClinique(req,res));
app.post('/api/v1/medecinclinique',auth, AppMulter.single('file'), (req,res)=>MedecinCliniqueControllers.createMedecinClinique(req,res));
app.delete('/api/v1/medecinclinique/:id',auth, (req,res)=>MedecinCliniqueControllers.deleteMedecinClinique(req,res)) ;

/**6.0   PoliceControllers */ 
app.get('/api/v1/polices', auth,  (req,res)=> PoliceControllers.getAllPolice(req,res));
app.get('/api/v1/police/:id',auth, (req,res)=> PoliceControllers.getPoliceById(req, res));
app.get('/api/v1/police-number',auth,  (req,res)=>PoliceControllers.getNumber(req,res));
app.get('/api/v1/police/:id/details',auth,  (req,res)=>PoliceControllers.getMaladiesOperation(req,res));
app.put('/api/v1/police/:id',auth, (req,res)=> PoliceControllers.updatePolice(req,res));
app.post('/api/v1/police',auth, (req,res)=>  PoliceControllers.createPolice(req,res));
app.delete('/api/v1/police/:id',auth, (req,res)=>  PoliceControllers.deletePolice(req,res)) ;


/**10.0 maladie endpoint */
app.get('/api/v1/maladies',auth,  (req,res)=>MaladieControllers.getAllMaladie(req,res));
app.get('/api/v1/maladie/:id',auth, (req,res)=>MaladieControllers.getMaladieById(req, res));
app.put('/api/v1/maladie/:id',auth, (req,res)=>MaladieControllers.updateMaladie(req,res));
app.post('/api/v1/maladie',auth, AppMulter.single('file'), (req,res)=>MaladieControllers.createMaladie(req,res));
app.delete('/api/v1/maladie/:id',auth, (req,res)=>MaladieControllers.deleteMaladie(req,res)) ;

/**10.0 operation-medicale endpoint */
app.get('/api/v1/operation_medicales',auth,  (req,res)=>OperationMedicalControllers.getAllOperationMedical(req,res));
app.get('/api/v1/operation_medicale/:id',auth, (req,res)=>OperationMedicalControllers.getOperationMedicalById(req, res));
app.put('/api/v1/operation_medicale/:id',auth, (req,res)=>OperationMedicalControllers.updatOperationMedical(req,res));
app.post('/api/v1/operation_medicale',auth, AppMulter.single('file'), (req,res)=>OperationMedicalControllers.createOperationMedical(req,res));
app.delete('/api/v1/operation_medicale/:id',auth, (req,res)=>OperationMedicalControllers.deleteOperationMedical(req,res)) ;

/**15.0 agentCliniqueControllers */ 
app.post('/api/v1/clinique/agent/login',  (req,res)=> AgentCliniqueControllers.login(req,res));
app.get('/api/v1/clinique/agents', auth,  (req,res)=> AgentCliniqueControllers.getAllAgentClinique(req,res));
app.get('/api/v1/clinique/agent/:id', auth, (req,res)=>AgentCliniqueControllers.getAgentCliniqueById(req, res));
app.put('/api/v1/clinique/agent/:id', auth, (req,res)=>AgentCliniqueControllers.updateAgentClinique(req,res));
app.post('/api/v1/clinique/agent', auth, AppMulter.single('file'), (req,res)=>AgentCliniqueControllers.createAgentClinique(req,res));
app.delete('/api/v1/cliniqpharmacyue/agent/:id', auth, (req,res)=>AgentCliniqueControllers.deleteAgentClinique(req,res)) ;

/**16.0 labo && agent pharmacy */
app.post('/api/v1/pharmacy/agent/login', (req,res)=> AgentPharmaControllers.login(req,res));
app.get('/api/v1/pharmacy/agents',auth,  (req,res)=> AgentPharmaControllers.getAllAgentPharma(req,res));
app.get('/api/v1/pharmacy/agent/:id',auth, (req,res)=>AgentPharmaControllers.getAgentPharmaById(req, res));
app.put('/api/v1/pharmacy/agent/:id',auth, (req,res)=>AgentPharmaControllers.updatAgentPharma(req,res));
app.post('/api/v1/pharmacy/agent',auth, AppMulter.single('file'), 
                                     (req,res)=>AgentPharmaControllers.createAgentPharma(req,res));

app.delete('/api/v1/pharmacy/agent/:id',auth, 
                                       (req,res)=>AgentPharmaControllers.deleteAgentPharma(req,res)) ;

/**laboratoire && agent laboratoire */
app.post('/api/v1/laboratoire/agent/login',  (req,res)=> AgentLaboControllers.login(req,res));
app.get('/api/v1/laboratoire/agents',auth,  (req,res)=> AgentLaboControllers.getAllAgentLabo(req,res));
app.get('/api/v1/laboratoire/agent/admins',auth,  (req,res)=> AgentLaboControllers.getAllAdmins(req,res));
app.get('/api/v1/laboratoire/agent/:id',auth, (req,res)=>AgentLaboControllers.getAgentLaboById(req, res));
app.put('/api/v1/laboratoire/agent/:id',auth, (req,res)=>AgentLaboControllers.updatAgentLabo(req,res));
app.post('/api/v1/laboratoire/agent',auth, AppMulter.single('file'), (req,res)=>AgentLaboControllers.createAgentLabo(req,res));
app.delete('/api/v1/laboratoire/agent/:id',auth, (req,res)=>AgentLaboControllers.deleteAgentLabo(req,res)) ;

/**16.0 PrescriptionControllers */ 
app.get('/api/v1/prescriptions', auth,  (req,res)=> PrescriptionControllers.getAllPrescription(req,res));
app.get('/api/v1/prescriptions/medecin/:id', auth,  (req,res)=> PrescriptionControllers.getAllFromMedecin(req,res));

app.get('/api/v1/prescription/:id', auth, (req,res)=>PrescriptionControllers.getPrescriptionById(req, res));
app.put('/api/v1/prescription/:id', auth, (req,res)=>PrescriptionControllers.updatPrescription(req,res));
app.post('/api/v1/prescription', auth, AppMulter.single('file'), (req,res)=>PrescriptionControllers.createPrescription(req,res));
app.delete('/api/v1/prescription/:id', auth, (req,res)=>PrescriptionControllers.deletePrescription(req,res)) ;
 
/**17.0 ReclammationControllers */ 
app.get('/api/v1/reclammation',auth,  (req,res)=> ReclammationControllers.getAllReclammation(req,res));
app.get('/api/v1/reclammation/:id',auth, (req,res)=>ReclammationControllers.getReclammationById(req, res));
app.put('/api/v1/reclammation/:id',auth, (req,res)=>ReclammationControllers.updAteReclammation(req,res));
app.post('/api/v1/reclammation',auth, (req,res)=>ReclammationControllers.createReclammation(req,res));
app.delete('/api/v1/reclammation/:id',auth, (req,res)=>ReclammationControllers.deleteReclammation(req,res)) ;

/**19.0 Structure endpoint */

app.get('/api/v1/structures', auth, (req,res)=>StructureControllers.getAllStructure(req,res) );
app.get('/api/v1/stucture/:id',auth,(req,res)=>StructureControllers.getStructureById(req, res));
app.get('/api/v1/stucture/matricule/:structureId',auth,(req,res)=>StructureControllers.getMatriculeById(req, res));
app.put('/api/v1/structure/:id',auth,(req,res)=>StructureControllers.updatStructure(req,res));
app.post('/api/v1/structure',auth, AppMulter.single('file'),(req,res)=>StructureControllers.createStructure(req,res));
app.delete('/api/v1/structure/:id',auth,(req,res)=>StructureControllers.deleteStructure(req,res)) ;
app.get('/api/v1/stucture_code',auth,(req,res)=>StructureControllers.getStructureCode(req, res));
app.get('/api/v1/structure/:id/details',auth, (req,res)=>StructureControllers.getDetail(req,res) );


/**20.0 offre endpoint */
app.get('/api/v1/offres',auth,  (req,res)=>StructureControllers.getAllStructure(req,res) );
app.get('/api/v1/offre/:id',auth, (req,res)=>StructureControllers.getStructureById(req, res));
app.put('/api/v1/offre/:id',auth, (req,res)=>StructureControllers.updatStructure(req,res));
app.post('/api/v1/offre',auth, (req,res)=>StructureControllers.createStructure(req,res));
app.delete('/api/v1/offre/:id',auth, (req,res)=>StructureControllers.deleteStructure(req,res)) ;

/** categorie */ 
app.get('/api/v1/categories',auth,  (req,res)=>CategoriControllers.getAllCategori(req,res) );
app.get('/api/v1/categorie/:id',auth, (req,res)=>CategoriControllers.getCategoriById(req, res));
app.put('/api/v1/categorie/:id',auth, (req,res)=>CategoriControllers.updatCategori(req,res));
app.post('/api/v1/categorie',auth, (req,res)=>CategoriControllers.createCategori(req,res));
app.delete('/api/v1/categorie/:id',auth, (req,res)=>CategoriControllers.deleteCategori(req,res)) ;

/** produit Medical */
app.get('/api/v1/produit_medicals',auth,  (req,res)=>produitMedicalControllers.getAllproduitMedical(req,res) );
app.get('/api/v1/produit_medical/:id',auth, (req,res)=>produitMedicalControllers.getproduitMedicalById(req,res));
app.put('/api/v1/produit_medical/:id',auth, (req,res)=>produitMedicalControllers.updatproduitMedical(req,res));
app.post('/api/v1/produit_medical',auth, AppMulter.single('file'), (req,res)=>produitMedicalControllers.createproduitMedical(req,res));
app.delete('/api/v1/produit_medical/:id',auth, (req,res)=>produitMedicalControllers.deleteproduitMedical(req,res)) ;

/** upload image with multer */
app.post('/api/v1/image',auth, AppMulter.single('file'),(req,res)=>{
  console.log("body", req.body);
   console.log("file", req.file);
   const image = req.file ? `/files/${req.file.filename}` : null;
   console.log("image",image)
    res.jsonp({message:'succes'})
}) ;


/** auth with rfid: le matricule et le rfid de l'assurer */
app.post('/api/v1/rfid/auth', (req,res)=>{
      const data =req.body ;
      const {matricule,rfid }=req.body ;
      if (matricule) {
        /** update user rfid info */

      }
       console.log(`data from rfid card ${JSON.stringify(data)} `)
       res.status(202).json({message:'Succes'}) ;
} ) ;

/** le numero unique du partenaire ou se trouve l'assurer et son rfid */
app.post('/api/v1/rfid', (req,res)=>{
    const data =req.body ;
    try {
      const {code,rfid }=req.body ;
      if (code && rfid) {
       
        /*const assure=Assure.findOn({where:{rfid:rfid}}) ;
        const _partenaire =Partenaire.findOne({where:{code:code}})
        if (assure && _partenaire) {
               /** traitement  
          res.status(202).json({message:'Succes'}) ;
        }*/
        res.status(202).json({message:'Echec : verifier les information envoyer '}) ;
      }
       res.status(202).json({message:'Veillez fournir le code et le rfid'}) ;
    } catch (error) {
      res.status(400).json({message:'opps !'}) ;
    }
  
} ) ;


app.use((req,res)=>{
    res.status(404).send("ressource not found !")
 })


module.exports=app ;