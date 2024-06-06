import express from 'express'
const router = express.Router()
import User from '../models/sch.js'
let users = [
    {
        name : 'Haseeb',
        class : '12'
    },
    {
        name : 'Haseeb 2',
        class : '123'
    }
]

router.get('/',(req,res)=>{
    res.status(200).send(users)
})
router.post('/',async(req,res)=>{
    // console.log(req.body)
    try {
    const u = await new User(req.body)
    const news = await u.save()
    res.status(200).send({status : 200 ,user :req.body}) 
    } catch (error) {
        res.status(400).send({status : 400 ,error : error.message}) 
    }
   
})

export default router