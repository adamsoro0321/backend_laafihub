const {AgentPharma,Pharmacy }=require('../sequelize');
const bcrypt =require('bcrypt') ;
const jwt =require('jsonwebtoken'); 
const private_jwt_key = require('../middleware/auth/private_key');

const getAllAgentPharma =async (req,res)=>{
      try {
        const data = await AgentPharma.findAll( {
            order: [['createdAt', 'DESC']],
            attributes: { exclude: ['password','email_valide_date'] },
        }) ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAgentPharmaById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await AgentPharma.findByPk(id,{
        include: [
            { model: Clinique},
        ]
    }) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'AgentPharma not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createAgentPharma =async (req,res)=>{
    try {
        const { email, tel, password: inputPassword } = req.body;
       
        // Vérification si l'email est déjà utilisé
        const emailExists = await AgentPharma.findOne({ where: { email } });
        if (emailExists) {
            return res.status(400).json({ error: 'L\'email est déjà utilisé' });
        }

        // Vérification si le numéro de téléphone est déjà utilisé
        const telExists = await AgentPharma.findOne({ where: { tel } });
        if (telExists) {
            return res.status(400).json({ error: 'Le numéro de téléphone est déjà utilisé' });
        }

        const image = req.file ? `${req.file.filename}`: null;
        // Si aucun mot de passe n'est fourni, définir un mot de passe par défaut
        const password = inputPassword || '123456';
          // Hash du mot de passe
          const hashedPassword = await bcrypt.hash(password, 10); 
       
        const data =await AgentPharma.create({
            ...req.body, // Utilisation de la déstructuration pour inclure tous les champs de la requête
            password: hashedPassword,
            image
        });
        res.status(201).json({ message:'succes create  agent ',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatAgentPharma =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _AgentPharma =await AgentPharma.findByPk(id);
      //  console.log('updater' ,id ,_AgentPharma)
        if (_AgentPharma) {
            const {image}= _AgentPharma ;
            const new_image = req.file ? `${req.file.filename}`:image;

            const new_agent ={...req.body,image:new_image } ;
            await _AgentPharma.update(new_agent) ;
            res.status(202).json({message:'succes update',agent: _AgentPharma})
        } else {
            res.status(404).json({ error: 'AgentPharma not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteAgentPharma=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _AgentPharma = await AgentPharma.findByPk(id);
        if (_AgentPharma) {
            await _AgentPharma.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'AgentPharma not found'});
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
       const user= await AgentPharma.findOne({where:{email:email}})
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
module.exports.AgentPharmaControllers={
    getAllAgentPharma,
    getAgentPharmaById,
    createAgentPharma,
    updatAgentPharma,
    deleteAgentPharma,
    login
}
// re