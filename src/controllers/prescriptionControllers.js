const { where, Op } = require('sequelize');
const { Prescription, Assure, AgentAssurance, AgentClinique, AgentLabo, AgentPharma, } = require('../sequelize');

const getAllPrescription = async (req, res) => {
    try {
        const data = await Prescription.findAll();
        res.json({ message: 'Success', data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}
const getAllPrescriptionDatail = async (req, res) => {
    try {
        const data = await Prescription.findAll({
            include: [
                { model: Assure, foreignKey: 'idAssure' },
                { model: AgentClinique, foreignKey: 'idAgentClinique' },
                { model: AgentLabo, foreignKey: 'idAgentLabo' },
                { model: AgentPharma, foreignKey: 'idAgentPharmacy' },
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
        const data = await Prescription.findByPk(id);
        if (data) {
            res.json({ message: 'Success', data });
        } else {
            res.status(404).json({ error: 'Prescription not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const getPrescriptionByIdWithDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Prescription.findByPk(id, {
            include: [
                { model: Assure, foreignKey: 'idAssure' },
                { model: AgentClinique, foreignKey: 'idAgentClinique' },
                { model: AgentLabo, foreignKey: 'idAgentLabo' },
                { model: AgentPharma, foreignKey: 'idAgentPharmacy' },
                { model: AgentAssurance, as: 'MedecinAssurance', foreignKey: 'idMedecinAssurance' },
                { model: AgentAssurance, as: 'AgentAssurance', foreignKey: 'idAgentAssurance' }
            ]
        });
        if (data) {
            res.json({ message: 'Success', data });
        } else {
            res.status(404).json({ error: 'Prescription not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}
const getPrescriptionByAssureMatricule = async (req, res) => {
    try {
        const { matricule } = req.params;
        if (!matricule) {
            return res.status(400).json({ error: 'Veuillez fournir un matricule' });
        }

        const assure = await Assure.findOne({
            where: { matricule }
        });

        if (!assure) {
            return res.status(404).json({ error: "Aucun assuré n'a été trouvé" });
        }

        const { id } = assure;

        const data = await Prescription.findOne({
            where: {
                 idAssure: id
            }
        });

        if (data) {
            return res.status(200).json({ message: 'Success', data });
        } else {
            return res.status(404).json({ error: 'Prescription non trouvée' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
};

const getPrescriptionByAssureMatriculeFromPharma = async (req, res) => {
    try {
        const {matricule_assure:matricule } = req.params;
        if (!matricule) {
            return res.status(400).json({ error: 'Veuillez fournir un matricule' });
        }

        const assure = await Assure.findOne({
            where: { matricule }
        });

        if (!assure) {
            return res.status(404).json({ error: "Aucun assuré n'a été trouvé" });
        }

        const { id } = assure;

        const data = await Prescription.findOne({
            where: {
                 idAssure: id,
                 type:'pharma'
            }
        });

        if (data) {
            return res.status(200).json({ message: 'Success', data });
        } else {
            return res.status(404).json({ error: 'Prescription non trouvée' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
};
const getAllPrescriptionByAssureMatricule = async (req, res) => {
    try {
        const { matricule } = req.params;
        if (!matricule) {
            return res.status(400).json({ error: 'Veuillez fournir un matricule' });
        }

        const assure = await Assure.findOne({
            where: { matricule }
        });

        if (!assure) {
            return res.status(404).json({ error: "Aucun assuré n'a été trouvé" });
        }

        const { id } = assure;

        const data = await Prescription.findAll({
            where: {
                 idAssure:  id 
            }
        });

        if (data) {
            return res.status(200).json({ message: 'Success', data });
        } else {
            return res.status(404).json({ error: 'Prescription non trouvée' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
};

const getPrescriptionByAssureMatriculeFromLabo = async (req, res) => {
    try {
        const { matricule_assure:matricule } = req.params;
        if (!matricule) {
            return res.status(400).json({ error: 'Veuillez fournir un matricule' });
        }

        const assure = await Assure.findOne({
            where: { matricule   }
        });

        if (!assure) {
            return res.status(404).json({ error: "Aucun assuré n'a été trouvé" });
        }

        const { id } = assure;

        const data = await Prescription.findOne({
            where: {
                 idAssure: id,
                  type:'labo'
            }
        });

        if (data) {
            return res.status(200).json({ message: 'Success', data });
        } else {
            return res.status(404).json({ error: 'Prescription non trouvée' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
};

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
    getAllFromMedecin,
    getAllPrescriptionDatail,
    getPrescriptionByIdWithDetail,
    getPrescriptionByAssureMatriculeFromPharma,
    getPrescriptionByAssureMatriculeFromLabo,
    getPrescriptionByAssureMatriculeFromPharma,
    getAllPrescriptionByAssureMatricule
   
}
// re