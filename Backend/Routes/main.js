import express from 'express'
import user from './user.js'
import upload from './upload.js'
import delet from './delet.js'
// import  fun from './fun.js'

const router = express.Router()
router.use('/user',user)
router.use('/upload',upload)
router.use('/delete',delet)
// router.use('/fun',fun)
export default router 