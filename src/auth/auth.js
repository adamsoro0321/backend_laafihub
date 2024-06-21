const jwt =require('jsonwebtoken')
const private_key =require('./private_key')
 
const auth =(req, res, next)=>{
     const authorization =req.headers.authorization ;

     if (!authorization) {
        let error =`Vous n'avez pas fourni un jeton d'authorization` ;
        return res.status(401).json({error}) ;

     }
    const token =authorization.split(' ')[1]
   jwt.verify(token ,private_key , (err,decoded)=>{
        if (err) {
            const error =`Vous n'avez pas l'autorisation de connextion ! veillez reessayer plus tard ` ;
            return res.status(403).json({error})
        }
      /*  const id =decoded.userId ;
        if (req.body.email!==id) {
           
            const message =`L'identifiant de l'utilisateur est invalide  }` ;
            return res.status(403).json({message})
        } else {
            next() ;
        }*/ 
        next() ;
    })
}

module.exports=auth ;