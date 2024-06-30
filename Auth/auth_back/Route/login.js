import express from 'express'
import login from '../model/reg.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const router = express.Router()

router.post('/',async(req,res)=>{
    // console.log(req.body)
    const {email,password} = req.body
    try {
        const user = await login.findOne({email : email })
        if(!user){
            return res.status(400).send({status : 400 , Messge : "invalid cred"})
        }
        const match =  await  bcrypt.compare(password, user.password)
        if(!match){
            return res.status(400).send({status : 400 , Messge : "invalid cred"})
        }
        const cloneUser = {...user}
        delete cloneUser.password
        // console.log(cloneUser);
        var token = jwt.sign({ email : user.email , id : user._id }, process.env.jwt);
        // console.log("login" , token)
        return res.status(200).send({status : 200 , Messge : "login success",UserData : user, token :token})
  
    } catch (error) {
        res.send({error : error.message}) 
    }
    
})

export default router