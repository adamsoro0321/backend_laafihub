const {PoliceAssurance}=require('../sequelize');

const getAllPoliceAssurance =async (req,res)=>{
      try {
        const data = await PoliceAssurance.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getPoliceAssuranceById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await PoliceAssurance.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'PoliceAssurance not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createPoliceAssurance =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await PoliceAssurance.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatePoliceAssurance =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _PoliceAssurance =await PoliceAssurance.findByPk(id);
      //  console.log('updater' ,id ,_PoliceAssurance)
        if (_PoliceAssurance) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _PoliceAssurance.update(req.body) ;
            res.status(202).json(_PoliceAssurance)
        } else {
            res.status(404).json({ error: 'PoliceAssurance not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deletePoliceAssurance=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _PoliceAssurance =await PoliceAssurance.findByPk(id);
        if (_PoliceAssurance) {
            await _PoliceAssurance.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'PoliceAssurance not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.PoliceAssuranceControllers={
    getAllPoliceAssurance,
    getPoliceAssuranceById,
    createPoliceAssurance,
    updatePoliceAssurance,
    deletePoliceAssurance,
}
// re