const {Assurance}=require('../sequelize');

const getAllAssurance =async (req,res)=>{
      try {
        const Assurances = await Assurance.findAll() ;
        res.json(Assurances) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAssuranceById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const r= await Assurance.findByPk(id) ;
    if (r) {
        res.json(r) ;
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
        const newAssurance =await Assurance.create(form_res);
        res.status(201).json({ message:'succes create  Article',data:newArticle}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const updatAssurance =async (req, res)=>{
    try {
        const id =req.params.id ;
        const _Assurance =Assurance.findByPk(id);
        if (_Assurance) {
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
        const _Assurance =Assurance.findByPk(id);
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