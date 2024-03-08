const {Reclammation}=require('../sequelize');

const getAllReclammation =async (req,res)=>{
      try {
        const data = await Reclammation.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getReclammationById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Reclammation.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Reclammation not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createReclammation =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await Reclammation.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updateReclammation =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Reclammation =await Reclammation.findByPk(id);
      //  console.log('updater' ,id ,_Reclammation)
        if (_Reclammation) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Reclammation.update(req.body) ;
            res.status(202).json(_Reclammation)
        } else {
            res.status(404).json({ error: 'Reclammation not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteReclammation=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _Reclammation =await Reclammation.findByPk(id);
        if (_Reclammation) {
            await _Reclammation.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Reclammation not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.ReclammationControllers={
    getAllReclammation,
    getReclammationById,
    createReclammation,
    updateReclammation,
    deleteReclammation,
}
// re