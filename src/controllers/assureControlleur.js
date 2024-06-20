const {Assure,Prescription}=require('../sequelize');
const bcrypt = require('bcrypt');
const {Police,Structure } = require('../sequelize');
const getAllAssure =async (req,res)=>{
      try {
        const data = await Assure.findAll(
            {
                include: [
                    { model: Structure },
                    { model:Police 
                      
                    },
                ]
            }
        ) ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAssureById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Assure.findByPk(id,
        {
            include: [
                { model: Structure },
                { model: Police },
            ]
        }
       ) ;
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

const getPrescription =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await Prescription.findAll({
        where: {
            idAssure: id,
          },
       }) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'Prescription not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createAssure = async (req, res) => {
    try {
        // Extraction du mot de passe de la requête
        const { email, tel, password: inputPassword } = req.body;
         // Vérification si l'email est déjà utilisé
         const emailExists = await Assure.findOne({ where: { email } });
         if (emailExists) {
             return res.status(400).json({ error: 'L\'email est déjà utilisé' });
         }
 
         // Vérification si le numéro de téléphone est déjà utilisé
         const telExists = await Assure.findOne({ where: { tel } });
         if (telExists) {
             return res.status(400).json({ error: 'Le numéro de téléphone est déjà utilisé' });
         }
 
         // Si aucun mot de passe n'est fourni, définir un mot de passe par défaut
         const password = inputPassword || '12345678';
 
        // Hash du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10); // Utilisation de 10 rounds de salage

        // Création de l'assuré avec le mot de passe haché
        const assure = await Assure.create({
            ...req.body, // Utilisation de la déstructuration pour inclure tous les champs de la requête
            password: hashedPassword,
        });

        res.status(201).json({ message: 'Assuré créé avec succès' });
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
    getPrescription
}
// re