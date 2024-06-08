import express from 'express'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
const router = express.Router()
import User from '../models/sch.js'
// let users = [
//     {
//         name: 'Haseeb',
//         class: '12'
//     },
//     {
//         name: 'Haseeb 2',
//         class: '123'
//     }
// ]

// router.get('/', (req, res) => {
//     res.status(200).send(users)
// })
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const password = await bcrypt.hash(req.body.password, 10)
    const u = await new User({ ...req.body, password: password })
    const news = await u.save()
    res.status(200).send({ status: 200, user: req.body })
  } catch (error) {
    res.status(400).send({ status: 400, error: error.message })
  }

})

router.post('/login', async (req, res) => {
  try {
    // 1. Validate request body
    // if (!req.body || !req.body.email || !req.body.password) {
    //   return res.status(400).send({ status: 400, error: 'Missing required fields: email and password' });
    // }

    // 2. Find user by email
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(401).send({ status: 401, error: 'Invalid credentials' });
    }

    // 3. Compare password securely
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(401).send({ status: 401, error: 'Invalid credentials' });
    }

    // 4. Construct and send successful response (optional user data)
    const sanitizedUser = { ...user }; // Clone user object
    delete sanitizedUser.password; // Exclude password for security

    res.status(200).send({ status: 200, message: 'Login successful' ,user})
  } catch (error) {
    console.error(error); // Log error for debugging purposes
    res.status(500).send({ status: 500, error: 'Internal server error', });
  }
});


export default router