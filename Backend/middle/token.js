import  jwt  from "jsonwebtoken";

let verifytoken = (req,res,next)=>{
    const {authorization} = req.headers
    const token = authorization.split(" ")[1];
    // console.log(token);
    jwt.verify(token, 'Haseeb', function(err, decoded) {
        if(err){
         return  res.status(400).send({ status: 500, message:"unauthorized", err })
      }
     return next()
      });
      
 
  
}
export default verifytoken