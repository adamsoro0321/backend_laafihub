const {Assure}=require('../sequelize');

const getAllAssure =async (req,res)=>{
      try {
        const Assures = await Assure.findAll() ;
        res.json(Assures) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAssureById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const r= await Assure.findByPk(id) ;
    if (r) {
        res.json(r) ;
         }else{
        res.status(404).json({error:'Assure not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createAssure =async (req,res)=>{
    try {
        const form_res=req.body ;
        const newAssure =await Assure.create(form_res);
        res.status(201).json({ message:'succes create  Article',data:newArticle}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const updatAssure =async (req, res)=>{
    try {
        const id =req.params.id ;
        const _assure =Assure.findByPk(id);
        if (_assure) {
            await _assure.update(req.body) ;
            res.status(202).json(_assure)
        } else {
            res.status(404).json({ error: 'Assure not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteAssure=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _assure =Assure.findByPk(id);
        if (_assure) {
            await _assure.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Assure not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.AssureControllers={
    getAllAssure,
    getAssureById,
    createAssure,
    updatAssure,
    deleteAssure,
}