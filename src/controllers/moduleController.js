const {ModulePolice}=require('../sequelize');

const getAllModulePolice =async (req,res)=>{
      try {
        const data = await ModulePolice.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getModulePoliceById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await ModulePolice.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'ModulePolice not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createModulePolice =async (req,res)=>{
    try {
        const {label,content ,description ,form_res}=req.body ;
        if (!content && !label) {
            res.status(400).json({ error: 'impossible de creer un module vide' });
        }
        const data =await ModulePolice.create(form_res);
        res.status(201).json({ message:'succes create  module',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatModulePolice =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _ModulePolice =await ModulePolice.findByPk(id);
      //  console.log('updater' ,id ,_ModulePolice)
        if (_ModulePolice) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _ModulePolice.update(req.body) ;
            res.status(202).json(_ModulePolice)
        } else {
            res.status(404).json({ error: 'ModulePolice not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteModulePolice=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _ModulePolice =await ModulePolice.findByPk(id);
        if (_ModulePolice) {
            await _ModulePolice.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'ModulePolice not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.ModulePoliceControllers={
    getAllModulePolice,
    getModulePoliceById,
    createModulePolice,
    updatModulePolice,
    deleteModulePolice,
}
// re