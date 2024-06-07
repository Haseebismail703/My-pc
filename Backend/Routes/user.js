import express from 'express'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
const router = express.Router()
import User from '../models/sch.js'
let users = [
    {
        name: 'Haseeb',
        class: '12'
    },
    {
        name: 'Haseeb 2',
        class: '123'
    }
]

router.get('/', (req, res) => {
    res.status(200).send(users)
})
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const password = await bcrypt.hash(req.body.password, 10)
        const u = await new User({...req.body, password : password})
        const news = await u.save()
        res.status(200).send({ status: 200, user: req.body })
    } catch (error) {
        res.status(400).send({ status: 400, error: error.message })
    }

})


router.post('/login', async (req, res) => {
    
    try {
        const user = await User.findOne({email : req.body.email})
        console.log(user)
        res.status(200).send({ status: 200, Message : 'Succes'})
    } catch (error) {
        res.status(400).send({ status: 400, error: error.message })
    }

})
export default router