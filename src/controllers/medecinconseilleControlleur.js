const {MedecinConseille}=require('../sequelize');

const getAllMedecinConseille =async (req,res)=>{
      try {
        const data = await MedecinConseille.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getMedecinConseilleById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await MedecinConseille.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'MedecinConseille not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createMedecinConseille =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await MedecinConseille.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatMedecinConseille =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _MedecinConseille =await MedecinConseille.findByPk(id);
      //  console.log('updater' ,id ,_MedecinConseille)
        if (_MedecinConseille) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _MedecinConseille.update(req.body) ;
            res.status(202).json(_MedecinConseille)
        } else {
            res.status(404).json({ error: 'MedecinConseille not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteMedecinConseille=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _MedecinConseille =await MedecinConseille.findByPk(id);
        if (_MedecinConseille) {
            await _MedecinConseille.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'MedecinConseille not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.MedecinConseilleControllers={
    getAllMedecinConseille,
    getMedecinConseilleById,
    createMedecinConseille,
    updatMedecinConseille,
    deleteMedecinConseille,
}
// re