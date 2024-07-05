const {AgentAssurance}=require('../sequelize');
const bcrypt =require('bcrypt') ;
const jwt =require('jsonwebtoken'); 
const private_jwt_key = require('../middleware/auth/private_key');
const { mailToNewAgent } = require('../services/mailer/mailService');
const { LAAFISEEBE_PLATEFORME } = require('../constant/constant');
const { passWordGenerated } = require('../utils/utils');


const getAllAgentAssurance =async (req,res)=>{
      try {
        const data = await AgentAssurance.findAll({where: { type:'agent' }}) ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}
const getAllAdmins =async (req,res)=>{
    try {
      const data = await AgentAssurance.findAll({ where: { type:'admin' } }) ;
      res.json({message:'succes ',data}) ;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
}
const getAllMedecins =async (req,res)=>{
    try {
      const data = await AgentAssurance.findAll({ where: { type:'medecin' } }) ;
      res.json({message:'succes medecin',data}) ;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
}

const getAgentAssuranceById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await AgentAssurance.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'AgentAssurance not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}
const getAgentWhereById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await AgentAssurance.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'AgentAssurance not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createAgentAssurance =async (req,res)=>{
    try {

        const { email, tel, password: inputPassword } = req.body;
        if (!email) {
          return res.status(400).json({ error: 'aucun email trouvé' });
        }
        // Vérification si l'email est déjà utilisé
        const emailExists = await AgentAssurance.findOne({ where: { email } });
        if (emailExists) {
            return res.status(400).json({ error: 'L\'email est déjà utilisé' });
        }

        // Vérification si le numéro de téléphone est déjà utilisé
        const telExists = await AgentAssurance.findOne({ where: { tel } });
        if (telExists) {
            return res.status(400).json({ error: 'Le numéro de téléphone est déjà utilisé' });
        }
        const image = req.file ? `${req.file.filename}`: null;
        // Si aucun mot de passe n'est fourni, définir un mot de passe par défaut
        const password = inputPassword || passWordGenerated();
          // Hash du mot de passe
          const hashedPassword = await bcrypt.hash(password, 10); // Utilisation de 10 rounds de salage

        const data =await AgentAssurance.create({
            ...req.body, // Utilisation de la déstructuration pour inclure tous les champs de la requête
            password: hashedPassword,
            image
        });
        /** envoie de mail */
        const to=email ;
        const url=LAAFISEEBE_PLATEFORME.ASSURANCE ;
        await mailToNewAgent(to ,email,password,url);
        res.status(201).json({ message:'succes create  agent assurance',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatAgentAssurance =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _AgentAssurance =await AgentAssurance.findByPk(id);
      //  console.log('updater' ,id ,_AgentAssurance)
        if (_AgentAssurance) {
          const {image}= _AgentAssurance ;
          const new_image = req.file ? `${req.file.filename}`:image;

          const new_agent ={...req.body,image:new_image } ;
         
            await _AgentAssurance.update(new_agent) ;
            res.status(202).json(_AgentAssurance)
        } else {
            res.status(404).json({ error: 'AgentAssurance not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteAgentAssurance=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _AgentAssurance =await AgentAssurance.findByPk(id);
        if (_AgentAssurance) {
            await _AgentAssurance.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'AgentAssurance not found'});
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
       const user= await AgentAssurance.findOne({where:{email:email}})
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
const changePassword=async (req, res) => {
    const { email} = req.body;

    if (!email ) {
      return res.status(400).json({ error: 'Email non trouvez' });
    }

    try {
      const agent = await AgentAssurance.findOne({ where: { email } });
      
      if (!agent) {
        return res.status(404).json({ error: 'Agent non trouvé.' });
      }
       /** envoie un email à l'agent contenant un code */
      const isMatch = await bcrypt.compare(oldPassword, agent.password);

      if (!isMatch) {
        return res.status(401).json({ error: 'L\'ancien mot de passe est incorrect.' });
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      agent.password = hashedNewPassword;
      await agent.save();

      return res.status(200).json({ message: 'Mot de passe changé avec succès.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erreur interne du serveur.' });
    }
  }




module.exports.AgentAssuranceControllers={
    getAllAgentAssurance,
    getAgentAssuranceById,
    createAgentAssurance,
    updatAgentAssurance,
    deleteAgentAssurance,
    login,
  getAllAdmins,
  getAllMedecins,
    getAgentWhereById,
    changePassword
}
// re