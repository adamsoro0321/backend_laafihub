const {RfidIdentify}=require('../sequelize');


const getAllRfidIdentify =async (req,res)=>{
      try {
        const data = await RfidIdentify.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getByCode =async (req,res)=>{
    /** verifie s'il y'a un code dans le body */
    try {
        const id =req.params.id ;
       const data= await RfidIdentify.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'RfidIdentify not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}
const getByCodeAndRfid =async (req,res)=>{
    /** verififie s'il ya un rfid dans le body: */
    try {
        const id =req.params.id ;
       const data= await RfidIdentify.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'RfidIdentify not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}
const getByRfid =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await RfidIdentify.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'RfidIdentify not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createRfidIdentify = async (req, res) => {
    try {
        const formData = req.body;
        // Vérifier si le code de la RfidIdentify est déjà utilisé
        const existingRfidIdentify = await RfidIdentify.findOne({ where: { code: formData.code } });
        if (existingRfidIdentify) {
            return res.status(400).json({ error: 'Le code de RfidIdentify est déjà utilisé' });
        }
        // Créer une nouvelle RfidIdentify
        const newRfidIdentify = await RfidIdentify.create(formData);
        return res.status(201).json({ message: 'Création de RfidIdentify réussie', data: newRfidIdentify });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Une erreur s\'est produite lors de la création de la RfidIdentify' });
    }
}

const updatRfidIdentify =async ()=>{
    try {
        const id =req.params.id ;
       
        const _RfidIdentify =await RfidIdentify.findByPk(id);
      //  console.log('updater' ,id ,_RfidIdentify)
        if (_RfidIdentify) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _RfidIdentify.update(req.body) ;
            res.status(202).json(_RfidIdentify)
        } else {
            res.status(404).json({ error: 'RfidIdentify not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}


module.exports.RfidIdentifyControllers={
    getAllRfidIdentify,
    getRfidIdentifyById,
    createRfidIdentify,
    updatRfidIdentify
}
