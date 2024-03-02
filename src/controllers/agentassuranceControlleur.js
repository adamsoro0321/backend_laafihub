const {AgentAssurance}=require('../sequelize');

const getAllAgentAssurance =async (req,res)=>{
      try {
        const data = await AgentAssurance.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAgentAssuranceById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await AgentAssurance.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'AgentAssurance not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createAgentAssurance =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await AgentAssurance.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatAgentAssurance =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _AgentAssurance =await AgentAssurance.findByPk(id);
      //  console.log('updater' ,id ,_AgentAssurance)
        if (_AgentAssurance) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _AgentAssurance.update(req.body) ;
            res.status(202).json(_AgentAssurance)
        } else {
            res.status(404).json({ error: 'AgentAssurance not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteAgentAssurance=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _AgentAssurance =AgentAssurance.findByPk(id);
        if (_AgentAssurance) {
            await _AgentAssurance.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'AgentAssurance not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.AgentAssuranceControllers={
    getAllAgentAssurance,
    getAgentAssuranceById,
    createAgentAssurance,
    updatAgentAssurance,
    deleteAgentAssurance,
}
// re