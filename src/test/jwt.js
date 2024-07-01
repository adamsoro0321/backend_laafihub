const bcrypt =require('bcrypt') ;
const jwt =require('jsonwebtoken'); 
const private_jwt_key ="jwt"
const user={ 
      email:"adamsoro0321@gmail.com"
  }
const token =jwt.sign(
    {userId:user.email},
    private_jwt_key,
    {expiresIn:'24h'}
)

console.log("token",token)