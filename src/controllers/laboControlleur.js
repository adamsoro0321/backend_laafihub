const {Labo}=require('../sequelize');

const getAllLabo =async (req,res)=>{
      try {
        const data = await Labo.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getLaboById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Labo.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Labo not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createLabo =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await Labo.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatLabo =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Labo =await Labo.findByPk(id);
      //  console.log('updater' ,id ,_Labo)
        if (_Labo) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Labo.update(req.body) ;
            res.status(202).json(_Labo)
        } else {
            res.status(404).json({ error: 'Labo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteLabo=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _Labo =await Labo.findByPk(id);
        if (_Labo) {
            await _Labo.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Labo not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.LaboControllers={
    getAllLabo,
    getLaboById,
    createLabo,
    updatLabo,
    deleteLabo,
}
// re