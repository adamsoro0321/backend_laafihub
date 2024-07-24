const { where } = require('sequelize');
const { Prescription, Assure, AgentAssurance, AgentClinique, } = require('../sequelize');

const getAllPrescription = async (req, res) => {
    try {
        const data = await Prescription.findAll({
            include: [
                { model: Assure, foreignKey: 'idAssure' },
                { model: AgentClinique, foreignKey: 'idAgentClinique' },
                { model: AgentAssurance, as: 'MedecinAssurance', foreignKey: 'idMedecinAssurance' },
                { model: AgentAssurance, as: 'AgentAssurance', foreignKey: 'idAgentAssurance' }
            ]
        });
        res.json({ message: 'Success', data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const getPrescriptionById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Prescription.findByPk(id, {
            include: [
                { model: Assure, foreignKey: 'idAssure' },
                { model: AgentClinique, foreignKey: 'idAgentClinique' },
                { model: AgentAssurance, as: 'MedecinAssurance', foreignKey: 'idMedecinAssurance' },
                { model: AgentAssurance, as: 'AgentAssurance', foreignKey: 'idAgentAssurance' }
            ]
        });
        if (data) {
           /* const {
                assure,
                agent_clinique,
                MedecinAssurance,
                AgentAssurance,
                
            } =data ;*/
            res.json({ message: 'Success', data });
        } else {
            res.status(404).json({ error: 'Prescription not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createPrescription =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await Prescription.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatPrescription =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Prescription =await Prescription.findByPk(id);
      //  console.log('updater' ,id ,_Prescription)
        if (_Prescription) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Prescription.update(data) ;
            res.status(202).json(_Prescription)
        } else {
            res.status(404).json({ error: 'Prescription not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
       
    }
}

const deletePrescription=async (req,res)=>{
    try {
        const id =req.params.id ;
        if (!id) {
            res.status(404).json({error:'Prescription not found'});
        }
        const _Prescription = await Prescription.findByPk(id);
        if (_Prescription) {
            await _Prescription.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Prescription not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
       
    }
}

const getAllFromMedecin =async (req,res)=>{
      const {id}=req.params ;
     try {
        if (!id) {
            res.status(404).json({error:'impossible d\identifier le medecin '});
          }
         const pres=await Prescription.findAll({
            where:{idAgentClinique:id },
            order: ['createdAt'],
          });
      
            res.status(201).json({message:'succes',precriptions:pres});
       
     } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
     }
}

module.exports. PrescriptionControllers={
    getAllPrescription,
    getPrescriptionById,
    createPrescription,
    updatPrescription,
    deletePrescription,
    getAllFromMedecin
}
// re