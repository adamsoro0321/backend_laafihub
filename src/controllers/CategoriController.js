const {Categori}=require('../sequelize');
const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken') ;



const getAllCategori =async (req,res)=>{
      try {
        const data = await Categori.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getCategoriById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Categori.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Categori not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createCategori =async (req,res)=>{
    try {
        
        const form_res=req.body ;
        const data =await Categori.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatCategori =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Categori =await Categori.findByPk(id);
      //  console.log('updater' ,id ,_Categori)
        if (_Categori) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Categori.update(req.body) ;
            res.status(202).json(_Categori)
        } else {
            res.status(404).json({ error: 'Categori not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteCategori=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _Categori =Categori.findByPk(id);
        if (_Categori) {
            await _Categori.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Categori not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.CategoriControllers={
    getAllCategori,
    getCategoriById,
    createCategori,
    updatCategori,
    deleteCategori
}
