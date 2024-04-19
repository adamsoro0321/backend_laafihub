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

const createStructure =async (req,res)=>{
    try {
        
        const form_res=req.body ;
        const data =await Structure.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

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

const deleteStructure=async (req,res)=>{
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
