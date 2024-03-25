const {AdminAssurance}=require('../sequelize');
const bcrypt =require('bcrypt') ;
const jwt =require('jsonwebtoken'); 
const private_key=require('../auth/private_key')
const getAllAdminAssurance =async (req,res)=>{
      try {
        const data = await AdminAssurance.findAll() ;
        res.json({message:'succes ',data}) ;
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}

const getAdminAssuranceById =async (req,res)=>{
    try {
        const id =req.params.id ;
       const data= await AdminAssurance.findByPk(id) ;
    if (data) {
        res.json({message:'succes',data}) ;
         }else{
        res.status(404).json({error:'AdminAssurance not found'}) ;
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const createAdminAssurance =async (req,res)=>{
    try {
        const form_res=req.body ;
        const data =await AdminAssurance.create(form_res);
        res.status(201).json({ message:'succes create  Article',data}) ;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}  //192.168.14.174

const updatAdminAssurance =async (req, res)=>{
    try {
        const id =req.params.id ;
       
        const _AdminAssurance =await AdminAssurance.findByPk(id);
      //  console.log('updater' ,id ,_AdminAssurance)
        if (_AdminAssurance) {
            const data =req.body ;
           /// console.log("body data",data) ;
            await _AdminAssurance.update(req.body) ;
            res.status(202).json(_AdminAssurance)
        } else {
            res.status(404).json({ error: 'AdminAssurance not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const deleteAdminAssurance=async (req,res)=>{
    try {
        const id =req.params.id ;
        const _AdminAssurance =await AdminAssurance.findByPk(id);
        if (_AdminAssurance) {
            await _AdminAssurance.destroy() ;
            res.status(200).json({message:'succes deleting'});
        } else {
            res.status(404).json({error:'AdminAssurance not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const login =async (req,res)=>{
    try {
        let email =req.body.email ;
        let password=req.body.password ;
        if (!email || !password) {
            const message="Entrez un email et un mot de passe";
           return  res.status(402).json({message}) ;
        }
       const user= await AdminAssurance.findOne({where:{email:email}})
       if (!user) {
        const message=`Cet email n'est pas Enregistrez ${email} `;
          return  res.status(402).json({message}) ;
       }
      bcrypt.compare(password,user.password,(err,result)=>{
        if (result) {
            const token =jwt.sign(
                {userId:user.email},
                private_key,
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
module.exports.AdminAssuranceControllers={
    getAllAdminAssurance,
    getAdminAssuranceById,
    createAdminAssurance,
    updatAdminAssurance,
    deleteAdminAssurance,
    login
}
// re