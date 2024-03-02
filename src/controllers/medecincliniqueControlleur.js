const {MedecinClinique}=require('../sequelize');

const getAllMedecinClinique =async (req,res)=>{
      try {
        const data = await MedecinClinique.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getMedecinCliniqueById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await MedecinClinique.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'MedecinClinique not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createMedecinClinique =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await MedecinClinique.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatMedecinClinique =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _MedecinClinique =await MedecinClinique.findByPk(id);
      //  console.log('updater' ,id ,_MedecinClinique)
        if (_MedecinClinique) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _MedecinClinique.update(req.body) ;
            res.status(202).json(_MedecinClinique)
        } else {
            res.status(404).json({ error: 'MedecinClinique not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteMedecinClinique=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _MedecinClinique =await MedecinClinique.findByPk(id);
        if (_MedecinClinique) {
            await _MedecinClinique.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'MedecinClinique not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.MedecinCliniqueControllers={
    getAllMedecinClinique,
    getMedecinCliniqueById,
    createMedecinClinique,
    updatMedecinClinique,
    deleteMedecinClinique,
}
// re