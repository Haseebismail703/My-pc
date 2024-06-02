import  express from "express";

const router = express.Router()
let users = [

    {
        id: 1,
        name: 'John',
        age: 25
    },
    {
        id: 2,
        name: 'Haseeb',
        age: 20
    }

]
router.get('/',(req,res)=>{
    res.status(200).send({ users : users})
})

export default router