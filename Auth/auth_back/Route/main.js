import express from 'express'
import user from './user.js'
import login from './login.js'
import reg from './reg.js'
import authMiddleware from '../middle/auth.js'
const router = express.Router()
router.use('/user',authMiddleware, user)
router.use('/login', login)
router.use('/reg', reg)
export default router 