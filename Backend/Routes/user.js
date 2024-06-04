import express from 'express'
const router = express.Router()
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
export default router