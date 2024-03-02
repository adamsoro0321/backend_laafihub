const {Clinique}=require('../sequelize');

const getAllClinique =async (req,res)=>{
      try {
        const data = await Clinique.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getCliniqueById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Clinique.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Clinique not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createClinique =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await Clinique.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updateClinique =async (req, res)=>{
    try {
        const id =req.params.id ;
        const _Clinique =await Clinique.findByPk(id);
      //  console.log('updater' ,id ,_Clinique)
        if (_Clinique) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Clinique.update(req.body) ;
            res.status(202).json(_Clinique)
        } else {
            res.status(404).json({ error: 'Clinique not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteClinique=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _Clinique =await Clinique.findByPk(id);
        if (_Clinique) {
            await _Clinique.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Clinique not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.CliniqueControllers={
    getAllClinique,
    getCliniqueById,
    createClinique,
    updateClinique,
    deleteClinique,
}
// re