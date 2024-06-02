const {AgentPharma,Pharmacy }=require('../sequelize');

const getAllAgentPharma =async (req,res)=>{
      try {
        const data = await AgentPharma.findAll( {
            include: [
                { model: Clinique},
            ]
        }) ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAgentPharmaById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await AgentPharma.findByPk(id,{
        include: [
            { model: Clinique},
        ]
    }) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'AgentPharma not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createAgentPharma =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await AgentPharma.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatAgentPharma =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _AgentPharma =await AgentPharma.findByPk(id);
      //  console.log('updater' ,id ,_AgentPharma)
        if (_AgentPharma) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _AgentPharma.update(req.body) ;
            res.status(202).json(_AgentPharma)
        } else {
            res.status(404).json({ error: 'AgentPharma not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteAgentPharma=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _AgentPharma = await AgentPharma.findByPk(id);
        if (_AgentPharma) {
            await _AgentPharma.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'AgentPharma not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.AgentPharmaControllers={
    getAllAgentPharma,
    getAgentPharmaById,
    createAgentPharma,
    updatAgentPharma,
    deleteAgentPharma,
}
// re