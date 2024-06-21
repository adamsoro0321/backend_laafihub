const express= require('express')
const bodyParser = require('body-parser');
const cors =require('cors') ;


const { AssureControllers ,

    MedecinCliniqueControllers,

     OperationMedicalControllers ,
    AgentAssuranceControllers,
    MedecinConseilleControllers,
    MaladieControllers,
    AgentCliniqueControllers ,
    PoliceControllers,
    ReclammationControllers,
    StructureControllers,
    PartenaireControllers, 
    CategoriControllers,
    PrescriptionControllers} = require('./src/controllers');


const AppMulter = require('./src/multer');
const auth = require('./src/auth/auth');

const { kafka } = require('./src/kafka/kafka');
const { produitMedicalControllers } = require('./src/controllers/ProduidMedicalController');



const app =express();
app.use(bodyParser.json()) ;
app.use(cors())

/** root */
app.get('/',(req,res)=>{
   res.json({message:"BienVenue sur laafiSebe API v1 ! "})
} )

/**1.0 agent assurance */
 app.post('/api/v1/asssurance/agent/login',(req,res)=>AgentAssuranceControllers.login(req,res) ) ;
 app.get('/api/v1/asssurance/agents', (req,res)=> AgentAssuranceControllers.getAllAgentAssurance(req,res));
 app.get('/api/v1/asssurance/medecins', (req,res)=> AgentAssuranceControllers.getAllMedecins(req,res));
 app.get('/api/v1/asssurance/admins', (req,res)=> AgentAssuranceControllers.getAllAdmins(req,res));
 app.get('/api/v1/asssurance/agent/:id',(req,res)=>AgentAssuranceControllers.getAgentAssuranceById(req, res));
 app.put('/api/v1/asssurance/agent/:id',(req,res)=>AgentAssuranceControllers.updatAgentAssurance(req,res));
 app.post('/api/v1/asssurance/agent',(req,res)=>AgentAssuranceControllers.createAgentAssurance(req,res));
 app.delete('/api/v1/asssurance/agent/:id',(req,res)=>AgentAssuranceControllers.deleteAgentAssurance(req,res))
 app.get('/api/v1/asssurance/agents/type/:type',(req,res)=>AgentAssuranceControllers.getAllAgentWhere(req,res) )

/**8.0 MedecinConseilleControllers */ 
app.get('/api/v1/medecinconseille', (req,res)=> MedecinConseilleControllers.getAllMedecinConseille(req,res));
app.get('/api/v1/medecinconseille/:id',(req,res)=>MedecinConseilleControllers.getMedecinConseilleById(req, res));
app.put('/api/v1/medecinconseille/:id',(req,res)=>MedecinConseilleControllers.updateMedecinConseille(req,res));
app.post('/api/v1/medecinconseille',(req,res)=>MedecinConseilleControllers.createMedecinConseille(req,res));
app.delete('/api/v1/medecinconseille/:id',(req,res)=>MedecinConseilleControllers.deleteMedecinConseille(req,res)) ;

/**2.0 assure endpont */
 app.get('/api/v1/assures', (req,res)=> AssureControllers.getAllAssure(req,res));
 app.get('/api/v1/assure/:id',(req,res)=>AssureControllers.getAssureById(req, res));
 app.put('/api/v1/assure/:id',(req,res)=>AssureControllers.updatAssure(req,res));
 app.post('/api/v1/assure',(req,res)=>AssureControllers.createAssure(req,res));
 app.delete('/api/v1/assure/:id',(req,res)=>AssureControllers.deleteAssure(req,res))
 app.get('/api/v1/assure/prescriptions/:id',(req,res)=>AssureControllers.getPrescription(req, res));


/**4.0 partenaire endpoint  */
app.get('/api/v1/partenaires', (req,res)=> PartenaireControllers.getAllPartenaire(req,res));
app.get('/api/v1/partenaires/cliniques', (req,res)=> PartenaireControllers.getAllClinique(req,res));
app.get('/api/v1/partenaires/pharmacies', (req,res)=> PartenaireControllers.getAllPharmacy(req,res));
app.get('/api/v1/partenaires/laboratoires', (req,res)=> PartenaireControllers.getAllLaboratoire(req,res));
app.get('/api/v1/partenaires/cliniquelaboratoires', (req,res)=> PartenaireControllers.getAllCliniqueLaboratoire(req,res));
app.get('/api/v1/partenaire/:id',(req,res)=>PartenaireControllers.getPartenaireById(req, res));
app.put('/api/v1/partenaire/:id',(req,res)=>PartenaireControllers.updatPartenaire(req,res));
app.post('/api/v1/partenaire',(req,res)=>PartenaireControllers.createPartenaire(req,res));
app.delete('/api/v1/partenaire/:id',(req,res)=>PartenaireControllers.deletePartenaire(req,res)) ;

/** 5.0 MedecinCliniqueControllers */ 
app.get('/api/v1/medecincliniques', (req,res)=> MedecinCliniqueControllers.getAllMedecinClinique(req,res));
app.get('/api/v1/medecinclinique/:id',(req,res)=>MedecinCliniqueControllers.getMedecinCliniqueById(req, res));
app.put('/api/v1/medecinclinique/:id',(req,res)=>MedecinCliniqueControllers.updatMedecinClinique(req,res));
app.post('/api/v1/medecinclinique',(req,res)=>MedecinCliniqueControllers.createMedecinClinique(req,res));
app.delete('/api/v1/medecinclinique/:id',(req,res)=>MedecinCliniqueControllers.deleteMedecinClinique(req,res)) ;

/**6.0   PoliceControllers */ 
app.get('/api/v1/polices', (req,res)=> PoliceControllers.getAllPolice(req,res));
app.get('/api/v1/police/:id',(req,res)=> PoliceControllers.getPoliceById(req, res));
app.get('/api/v1/police-number', (req,res)=>PoliceControllers.getNumber(req,res));
app.get('/api/v1/police/:id/details', (req,res)=>PoliceControllers.getMaladiesOperation(req,res));
app.put('/api/v1/police/:id',(req,res)=> PoliceControllers.updatePolice(req,res));
app.post('/api/v1/police',(req,res)=>  PoliceControllers.createPolice(req,res));
app.delete('/api/v1/police/:id',(req,res)=>  PoliceControllers.deletePolice(req,res)) ;


/**10.0 maladie endpoint */
app.get('/api/v1/maladies', (req,res)=>MaladieControllers.getAllMaladie(req,res));
app.get('/api/v1/maladie/:id',(req,res)=>MaladieControllers.getMaladieById(req, res));
app.put('/api/v1/maladie/:id',(req,res)=>MaladieControllers.updateMaladie(req,res));
app.post('/api/v1/maladie',(req,res)=>MaladieControllers.createMaladie(req,res));
app.delete('/api/v1/maladie/:id',(req,res)=>MaladieControllers.deleteMaladie(req,res)) ;
/**10.0 operation-medicale endpoint */
app.get('/api/v1/operation_medicales', (req,res)=>OperationMedicalControllers.getAllOperationMedical(req,res));
app.get('/api/v1/operation_medicale/:id',(req,res)=>OperationMedicalControllers.getOperationMedicalById(req, res));
app.put('/api/v1/operation_medicale/:id',(req,res)=>OperationMedicalControllers.updatOperationMedical(req,res));
app.post('/api/v1/operation_medicale',(req,res)=>OperationMedicalControllers.createOperationMedical(req,res));
app.delete('/api/v1/operation_medicale/:id',(req,res)=>OperationMedicalControllers.deleteOperationMedical(req,res)) ;


/**15.0 agentCliniqueControllers */ 
app.get('/api/v1/clinique/agents', (req,res)=> AgentCliniqueControllers.getAllAgentClinique(req,res));
app.get('/api/v1/clinique/agent/:id',(req,res)=>AgentCliniqueControllers.getAgentCliniqueById(req, res));
app.put('/api/v1/clinique/agent/:id',(req,res)=>AgentCliniqueControllers.updateAgentClinique(req,res));
app.post('/api/v1/clinique/agent',(req,res)=>AgentCliniqueControllers.createAgentClinique(req,res));
app.delete('/api/v1/cliniqpharmacyue/agent/:id',(req,res)=>AgentCliniqueControllers.deleteAgentClinique(req,res)) ;

/**16.0 labo && agent pharmacy */
app.get('/api/v1/pharmacy/agents', (req,res)=> AgentCliniqueControllers.getAllAgentClinique(req,res));
app.get('/api/v1/pharmacy/agent/:id',(req,res)=>AgentCliniqueControllers.getAgentCliniqueById(req, res));
app.put('/api/v1/pharmacy/agent/:id',(req,res)=>AgentCliniqueControllers.updateAgentClinique(req,res));
app.post('/api/v1/pharmacy/agent',(req,res)=>AgentCliniqueControllers.createAgentClinique(req,res));
app.delete('/api/v1/pharmacy/agent/:id',(req,res)=>AgentCliniqueControllers.deleteAgentClinique(req,res)) ;

/**laboratoire && agent laboratoire */
app.get('/api/v1/laboratoire/agents', (req,res)=> AgentCliniqueControllers.getAllAgentClinique(req,res));
app.get('/api/v1/laboratoire/agent/:id',(req,res)=>AgentCliniqueControllers.getAgentCliniqueById(req, res));
app.put('/api/v1/laboratoire/agent/:id',(req,res)=>AgentCliniqueControllers.updateAgentClinique(req,res));
app.post('/api/v1/laboratoire/agent',(req,res)=>AgentCliniqueControllers.createAgentClinique(req,res));
app.delete('/api/v1/laboratoire/agent/:id',(req,res)=>AgentCliniqueControllers.deleteAgentClinique(req,res)) ;

/**16.0 PrescriptionControllers */ 
app.get('/api/v1/prescriptions', (req,res)=> PrescriptionControllers.getAllPrescription(req,res));
app.get('/api/v1/prescription/:id',(req,res)=>PrescriptionControllers.getPrescriptionById(req, res));
app.put('/api/v1/prescription/:id',(req,res)=>PrescriptionControllers.updatPrescription(req,res));
app.post('/api/v1/prescription',(req,res)=>PrescriptionControllers.createPrescription(req,res));
app.delete('/api/v1/prescription/:id',(req,res)=>PrescriptionControllers.deletePrescription(req,res)) ;
 
/**17.0 ReclammationControllers */ 
app.get('/api/v1/reclammation', (req,res)=> ReclammationControllers.getAllReclammation(req,res));
app.get('/api/v1/reclammation/:id',(req,res)=>ReclammationControllers.getReclammationById(req, res));
app.put('/api/v1/reclammation/:id',(req,res)=>ReclammationControllers.updAteReclammation(req,res));
app.post('/api/v1/reclammation',(req,res)=>ReclammationControllers.createReclammation(req,res));
app.delete('/api/v1/reclammation/:id',(req,res)=>ReclammationControllers.deleteReclammation(req,res)) ;
 

/**19.0 Structure endpoint */

app.get('/api/v1/structures', (req,res)=>StructureControllers.getAllStructure(req,res) );
app.get('/api/v1/stucture/:id',(req,res)=>StructureControllers.getStructureById(req, res));
app.get('/api/v1/stucture/matricule/:structureId',(req,res)=>StructureControllers.getMatriculeById(req, res));
app.put('/api/v1/structure/:id',(req,res)=>StructureControllers.updatStructure(req,res));
app.post('/api/v1/structure',(req,res)=>StructureControllers.createStructure(req,res));
app.delete('/api/v1/structure/:id',(req,res)=>StructureControllers.deleteStructure(req,res)) ;
app.get('/api/v1/stucture_code',(req,res)=>StructureControllers.getStructureCode(req, res));
app.get('/api/v1/structure/:id/details', (req,res)=>StructureControllers.getDetail(req,res) );

/**20.0 offre endpoint */
app.get('/api/v1/offres', (req,res)=>StructureControllers.getAllStructure(req,res) );
app.get('/api/v1/offre/:id',(req,res)=>StructureControllers.getStructureById(req, res));
app.put('/api/v1/offre/:id',(req,res)=>StructureControllers.updatStructure(req,res));
app.post('/api/v1/offre',(req,res)=>StructureControllers.createStructure(req,res));
app.delete('/api/v1/offre/:id',(req,res)=>StructureControllers.deleteStructure(req,res)) ;

/** categorie */ 
app.get('/api/v1/categories', (req,res)=>CategoriControllers.getAllCategori(req,res) );
app.get('/api/v1/categorie/:id',(req,res)=>CategoriControllers.getCategoriById(req, res));
app.put('/api/v1/categorie/:id',(req,res)=>CategoriControllers.updatCategori(req,res));
app.post('/api/v1/categorie',(req,res)=>CategoriControllers.createCategori(req,res));
app.delete('/api/v1/categorie/:id',(req,res)=>CategoriControllers.deleteCategori(req,res)) ;

/** produit Medical */
app.get('/api/v1/produit_medicals', (req,res)=>produitMedicalControllers.getAllproduitMedical(req,res) );
app.get('/api/v1/produit_medical/:id',(req,res)=>produitMedicalControllers.getproduitMedicalById(req,res));
app.put('/api/v1/produit_medical/:id',(req,res)=>produitMedicalControllers.updatproduitMedical(req,res));
app.post('/api/v1/produit_medical',(req,res)=>produitMedicalControllers.createproduitMedical(req,res));
app.delete('/api/v1/produit_medical/:id',(req,res)=>produitMedicalControllers.deleteproduitMedical(req,res)) ;

/** upload image with multer */

app.post('/api/v1/image', AppMulter.single('file'),(req,res)=>{
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