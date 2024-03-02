const {Pharmacy}=require('../sequelize');

const getAllPharmacy =async (req,res)=>{
      try {
        const data = await Pharmacy.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getPharmacyById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Pharmacy.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Pharmacy not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createPharmacy =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await Pharmacy.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatPharmacy =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Pharmacy =await Pharmacy.findByPk(id);
      //  console.log('updater' ,id ,_Pharmacy)
        if (_Pharmacy) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Pharmacy.update(req.body) ;
            res.status(202).json(_Pharmacy)
        } else {
            res.status(404).json({ error: 'Pharmacy not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deletePharmacy=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _Pharmacy =await Pharmacy.findByPk(id);
        if (_Pharmacy) {
            await _Pharmacy.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Pharmacy not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.PharmacyControllers={
    getAllPharmacy,
    getPharmacyById,
    createPharmacy,
    updatPharmacy,
    deletePharmacy,
}
// re