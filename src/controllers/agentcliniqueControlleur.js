const private_jwt_key = require('../middleware/auth/private_key');
const bcrypt =require('bcrypt') ;
const jwt =require('jsonwebtoken'); 
const {AgentClinique,Clinique ,Partenaire}=require('../sequelize');
const { LAAFISEEBE_PLATEFORME } = require('../constant/constant');
const { mailToNewAgent } = require('../services/mailer/mailService');
const { passWordGenerated } = require('../utils/utils');

const getAllAgentClinique =async (req,res)=>{
      try {
        const data = await AgentClinique.findAll( {
            include: [
                { model: Clinique},
            ]
        }) ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAgentCliniqueById = async (req, res) => {
    try {
      const id = req.params.id;
      
      // Correction : Utilisation de `where` pour rechercher par id et inclusion du modèle Clinique
      const data = await AgentClinique.findOne({
        where: { id },
        include: [
          { model: Partenaire },
        ],
      });
  
      if (data) {
        res.json({ message: 'succès', data });
      } else {
        res.status(404).json({ error: 'AgentClinique not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  
const createAgentClinique =async (req,res)=>{
  try {

    const { email, tel, password: inputPassword } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Aucun email trouvé' });
    }
    // Vérification si l'email est déjà utilisé
    const emailExists = await AgentClinique.findOne({ where: { email } });
    if (emailExists) {
        return res.status(400).json({ error: 'L\'email est déjà utilisé' });
    }

    // Vérification si le numéro de téléphone est déjà utilisé
    const telExists = await AgentClinique.findOne({ where: { tel } });
    if (telExists) {
        return res.status(400).json({ error: 'Le numéro de téléphone est déjà utilisé' });
    }
    const image = req.file ? `${req.file.filename}`: null;
    // Si aucun mot de passe n'est fourni, définir un mot de passe par défaut
    const password = inputPassword || passWordGenerated();
      // Hash du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10); 

    const data =await AgentClinique.create({
        ...req.body, // Utilisation de la déstructuration pour inclure tous les champs de la requête
        password: hashedPassword,
        image
    });
    const to=email ;
    const url=LAAFISEEBE_PLATEFORME.CLINIQUE ;
    await mailToNewAgent(to ,email,password,url);
    res.status(201).json({ message:'succes create  agent ',data}) ;
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
}
}  

const updatAgentClinique =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _AgentClinique =await AgentClinique.findByPk(id);
      //  console.log('updater' ,id ,_AgentClinique)
        if (_AgentClinique) {
          const {image}= _AgentClinique ;
          const new_image = req.file ? `${req.file.filename}`:image;

          const new_agent ={...req.body,image:new_image } ;
       
            await _AgentClinique.update(new_agent) ;
            res.status(202).json(_AgentClinique)
        } else {
            res.status(404).json({ error: 'AgentClinique not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteAgentClinique=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _AgentClinique = await AgentClinique.findByPk(id);
        if (_AgentClinique) {
            await _AgentClinique.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'AgentClinique not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}
const login =async (req,res)=>{
    try {
        const {email,password} =req.body;

        if (!email || !password) {
            const message="Entrez un email et un mot de passe";
           return  res.status(402).json({message}) ;
        }
       const user= await AgentClinique.findOne({where:{email:email}})
       if (!user) {
        const message=`Cet email n'est pas Enregistrez ${email} `;
          return  res.status(402).json({message}) ;
       }
      bcrypt.compare(password,user.password,(err,result)=>{
        if (result) {
            const token =jwt.sign(
                {userId:user.email},
                private_jwt_key,
                {expiresIn:'24h'}
            )
           
            const message=`L\'utilisateur à été connecté avec succes ` ;
            return   res.status(200).json({message,user,token}) ;
          } else {
           const message=`Mot de passe incorrect `;
          return  res.status(400).json({message}) ;
          }
       } ) ;
      
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


module.exports.AgentCliniqueControllers={
    getAllAgentClinique,
    getAgentCliniqueById,
    createAgentClinique,
    updatAgentClinique,
    deleteAgentClinique,
    login
}
// re