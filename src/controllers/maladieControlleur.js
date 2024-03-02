const {Maladie}=require('../sequelize');

const getAllMaladie =async (req,res)=>{
      try {
        const data = await Maladie.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getMaladieById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Maladie.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Maladie not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createMaladie =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await Maladie.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatMaladie =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Maladie =await Maladie.findByPk(id);
      //  console.log('updater' ,id ,_Maladie)
        if (_Maladie) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Maladie.update(req.body) ;
            res.status(202).json(_Maladie)
        } else {
            res.status(404).json({ error: 'Maladie not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteMaladie=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _Maladie =await Maladie.findByPk(id);
        if (_Maladie) {
            await _Maladie.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'Maladie not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports.MaladieControllers={
    getAllMaladie,
    getMaladieById,
    createMaladie,
    updatMaladie,
    deleteMaladie,
}
// re