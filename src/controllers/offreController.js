const {Offre}=require('../sequelize');

const getAllOffre =async (req,res)=>{
      try {
        const data = await Offre.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getOffreById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Offre.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Offre not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createOffre =async (req,res)=>{
    try {
        
        const form_res=req.body ;
        const data =await Offre.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
} 

const updatOffre =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Offre =await Offre.findByPk(id);
      //  console.log('updater' ,id ,_Offre)
        if (_Offre) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Offre.update(req.body) ;
            res.status(202).json(_Offre)
        } else {
            res.status(404).json({ error: 'Offre not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteOffre=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _Offre =Offre.findByPk(id);
        if (_Offre) {
            await _Offre.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Offre not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.OffreControllers={
    getAllOffre,
    getOffreById,
    createOffre,
    updatOffre,
    deleteOffre
}
