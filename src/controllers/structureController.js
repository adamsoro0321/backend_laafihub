const {Structure}=require('../sequelize');
const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken') ;



const getAllStructure =async (req,res)=>{
      try {
        const data = await Structure.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getStructureById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Structure.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Structure not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createStructure = async (req, res) => {
    try {
        const formData = req.body;
        // Vérifier si le code de la structure est déjà utilisé
        const existingStructure = await Structure.findOne({ where: { code: formData.code } });
        if (existingStructure) {
            return res.status(400).json({ error: 'Le code de structure est déjà utilisé' });
        }
        // Créer une nouvelle structure
        const newStructure = await Structure.create(formData);
        return res.status(201).json({ message: 'Création de structure réussie', data: newStructure });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Une erreur s\'est produite lors de la création de la structure' });
    }
}

const updatStructure =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Structure =await Structure.findByPk(id);
      //  console.log('updater' ,id ,_Structure)
        if (_Structure) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Structure.update(req.body) ;
            res.status(202).json(_Structure)
        } else {
            res.status(404).json({ error: 'Structure not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteStructure=async(req,res)=>{
    try {
        const id =req.params.id ;
        const _Structure =Structure.findByPk(id);
        if (_Structure) {
            await _Structure.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Structure not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.StructureControllers={
    getAllStructure,
    getStructureById,
    createStructure,
    updatStructure,
    deleteStructure
}
