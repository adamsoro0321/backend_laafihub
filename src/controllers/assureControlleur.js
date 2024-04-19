const {Assure}=require('../sequelize');
const bcrypt = require('bcrypt');

const getAllAssure =async (req,res)=>{
      try {
        const data = await Assure.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAssureById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Assure.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Assure not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}



const createAssure = async (req, res) => {
    try {
        // Extraction du mot de passe de la requête
        const { password } = req.body;

        // Hash du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10); // Utilisation de 10 rounds de salage

        // Création de l'assuré avec le mot de passe haché
        const assure = await Assure.create({
            ...req.body, // Utilisation de la déstructuration pour inclure tous les champs de la requête
            password: hashedPassword,
        });

        res.status(201).json({ message: 'Assuré créé avec succès', assure });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la création de l\'assuré' });
    }
};



const updatAssure =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _Assure =await Assure.findByPk(id);
      //  console.log('updater' ,id ,_Assure)
        if (_Assure) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _Assure.update(req.body) ;
            res.status(202).json(_Assure)
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
        const _Assure =await Assure.findByPk(id);
        if (_Assure) {
            await _Assure.destroy() ;
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
// re