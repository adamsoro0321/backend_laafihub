const jwt =require('jsonwebtoken')
const private_key =require('./private_key')
 
const auth =(req, res, next)=>{
     const authorization =req.headers.authorization

     if (!authorization) {
        let message =`Vous n'avez pas fourni un jeton d'authorization` ;
        return res.status(401).json({message}) ;

     }
    const token =authorization.split(' ')[1]
   jwt.verify(token ,private_key , (err,decoded)=>{
        if (err) {
            const message =`Vous n'avez pas l'autorisation de connextion ! veillez reessayer plus tard ` ;
            return res.status(401).json({message})
        }

        const id =decoded.userId ;
        if (req.body.email!==id) {
           
            const message =`L'identifiant de l'utilisateur est invalide  }` ;
            return res.status(401).json({message})
        } else {
            next() ;
        }
    })
}

module.exports=auth ;