const {AssurePolice}=require('../sequelize');

const getAllAssurePolice =async (req,res)=>{
      try {
        const data = await AssurePolice.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAssurePoliceById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await AssurePolice.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'AssurePolice not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createAssurePolice =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await AssurePolice.create(form_res);
        res.status(201).json({ message:'succes create  AssurePolicer',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatAssurePolice =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _AssurePolice =await AssurePolice.findByPk(id);
      //  console.log('updater' ,id ,_AssurePolice)
        if (_AssurePolice) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _AssurePolice.update(req.body) ;
            res.status(202).json(_AssurePolice)
        } else {
            res.status(404).json({ error: 'AssurePolice not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteAssurePolice=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _AssurePolice =await AssurePolice.findByPk(id);
        if (_AssurePolice) {
            await _AssurePolice.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'AssurePolice not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.AssurePoliceControllers={
    getAllAssurePolice,
    getAssurePoliceById,
    createAssurePolice,
    updatAssurePolice,
    deleteAssurePolice,
}
// re