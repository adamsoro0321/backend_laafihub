const {OperationMedical}=require('../sequelize');

const getAllOperationMedical =async (req,res)=>{
      try {
        const data = await OperationMedical.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getOperationMedicalById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await OperationMedical.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'OperationMedical not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createOperationMedical =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await OperationMedical.create(form_res);
        res.status(201).json({ message:'succes create operation medicale',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatOperationMedical =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _OperationMedical =await OperationMedical.findByPk(id);
      //  console.log('updater' ,id ,_OperationMedical)52583430
        if (_OperationMedical) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _OperationMedical.update(req.body) ;
            res.status(202).json(_OperationMedical)
        } else {
            res.status(404).json({ error: 'OperationMedical not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteOperationMedical=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _OperationMedical =await OperationMedical.findByPk(id);
        if (_OperationMedical) {
            await _OperationMedical.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'OperationMedical not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.OperationMedicalControllers={
    getAllOperationMedical,
    getOperationMedicalById,
    createOperationMedical,
    updatOperationMedical,
    deleteOperationMedical,
}
// re