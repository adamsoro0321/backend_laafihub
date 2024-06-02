const {Partenaire}=require('../sequelize');
const { where } = require('sequelize');



const getAllPartenaire =async (req,res)=>{
      try {
        const data = await Partenaire.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAllClinique =async (req,res)=>{
    try {
      const data = await Partenaire.findAll({where:{type:'clinique'}}) ;
      res.json({message:'succes ',data}) ;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
}
const getAllPharmacy =async (req,res)=>{
    try {
      const data = await Partenaire.findAll({where:{type:'pharmacy'}}) ;
      res.json({message:'succes ',data}) ;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
}
const getAllLaboratoire =async (req,res)=>{
    try {
      const data = await Partenaire.findAll({where:{type:'laboratoire'}}) ;
      res.json({message:'succes ',data}) ;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
}
const getAllCliniqueLaboratoire =async (req,res)=>{
    try {
      const data = await Partenaire.findAll({where:{type:'clinique_laboratoire'}}) ;
      res.json({message:'succes ',data}) ;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
}

const getPartenaireById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Partenaire.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Partenaire not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createPartenaire =async (req,res)=>{
    try {
        
        const form_res=req.body ;
        const data =await Partenaire.create(form_res);
        res.status(201).json({ message:'succes create  partenaire',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatPartenaire =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Partenaire =await Partenaire.findByPk(id);
      //  console.log('updater' ,id ,_Partenaire)
        if (_Partenaire) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Partenaire.update(req.body) ;
            res.status(202).json(_Partenaire)
        } else {
            res.status(404).json({ error: 'Partenaire not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deletePartenaire=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _Partenaire =Partenaire.findByPk(id);
        if (_Partenaire) {
            await _Partenaire.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Partenaire not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.PartenaireControllers={
    getAllPartenaire,
    getPartenaireById,
    createPartenaire,
    updatPartenaire,
    deletePartenaire,
    getAllClinique,
    getAllCliniqueLaboratoire,
    getAllLaboratoire,
    getAllPharmacy
}
