const {AdminClinique}=require('../sequelize');

const getAllAdminClinique =async (req,res)=>{
      try {
        const data = await AdminClinique.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAdminCliniqueById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await AdminClinique.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'AdminClinique not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createAdminClinique =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await AdminClinique.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatAdminClinique =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _AdminClinique =await AdminClinique.findByPk(id);
      //  console.log('updater' ,id ,_AdminClinique)
        if (_AdminClinique) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _AdminClinique.update(req.body) ;
            res.status(202).json(_AdminClinique)
        } else {
            res.status(404).json({ error: 'AdminClinique not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteAdminClinique=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _AdminClinique =await AdminClinique.findByPk(id);
        if (_AdminClinique) {
            await _AdminClinique.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'AdminClinique not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.AdminCliniqueControllers={
    getAllAdminClinique,
    getAdminCliniqueById,
    createAdminClinique,
    updatAdminClinique,
    deleteAdminClinique,
}
// re