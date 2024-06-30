import express from 'express'
import register from '../model/reg.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const router = express.Router()

router.post('/',async(req,res)=>{
    // console.log(req.body)
    const {email} = req.body
    try {
        const password = await bcrypt.hash(req.body.password, 10)
        var token = jwt.sign({ email : email }, process.env.jwt);
        // console.log(password);
        const reg = await new register({...req.body , password : password})
       const data =  await reg.save()
    //    console.log("reg" , token);
       return res.status(200).send({status : 200 , Messge : "reg success",data,token})
    } catch (error) {
        res.send({error : error.message}) 
    }
    
})

export default router