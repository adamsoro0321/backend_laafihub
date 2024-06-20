const { produitMedical } = require("../sequelize");



const getAllproduitMedical =async (req,res)=>{
      try {
        const data = await produitMedical.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getproduitMedicalById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await produitMedical.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'produitMedical not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createproduitMedical =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await produitMedical.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatproduitMedical =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _produitMedical =await produitMedical.findByPk(id);
      //  console.log('updater' ,id ,_produitMedical)
        if (_produitMedical) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _produitMedical.update(req.body) ;
            res.status(202).json(_produitMedical)
        } else {
            res.status(404).json({ error: 'produitMedical not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteproduitMedical=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _produitMedical =await produitMedical.findByPk(id);
        if (_produitMedical) {
            await _produitMedical.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'produitMedical not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.produitMedicalControllers={
    getAllproduitMedical,
    getproduitMedicalById,
    createproduitMedical,
    updatproduitMedical,
    deleteproduitMedical,
}
// re