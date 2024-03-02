const {Assurance}=require('../sequelize');

const getAllAssurance =async (req,res)=>{
      try {
        const data = await Assurance.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAssuranceById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Assurance.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Assurance not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createAssurance =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await Assurance.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatAssurance =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Assurance =await Assurance.findByPk(id);
      //  console.log('updater' ,id ,_Assurance)
        if (_Assurance) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Assurance.update(req.body) ;
            res.status(202).json(_Assurance)
        } else {
            res.status(404).json({ error: 'Assurance not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteAssurance=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _Assurance = await Assurance.findByPk(id);
        if (_Assurance) {
            await _Assurance.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Assurance not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.AssuranceControllers={
    getAllAssurance,
    getAssuranceById,
    createAssurance,
    updatAssurance,
    deleteAssurance,
}
// re