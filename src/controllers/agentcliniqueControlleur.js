const {AgentClinique}=require('../sequelize');

const getAllAgentClinique =async (req,res)=>{
      try {
        const data = await AgentClinique.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAgentCliniqueById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await AgentClinique.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'AgentClinique not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createAgentClinique =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await AgentClinique.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatAgentClinique =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _AgentClinique =await AgentClinique.findByPk(id);
      //  console.log('updater' ,id ,_AgentClinique)
        if (_AgentClinique) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _AgentClinique.update(req.body) ;
            res.status(202).json(_AgentClinique)
        } else {
            res.status(404).json({ error: 'AgentClinique not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteAgentClinique=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _AgentClinique = await AgentClinique.findByPk(id);
        if (_AgentClinique) {
            await _AgentClinique.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'AgentClinique not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.AgentCliniqueControllers={
    getAllAgentClinique,
    getAgentCliniqueById,
    createAgentClinique,
    updatAgentClinique,
    deleteAgentClinique,
}
// re