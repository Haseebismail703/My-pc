import express from 'express'
import multer from 'multer'
let router = express.Router()
const upload = multer({ dest: 'image/' })
router.post('/', upload.single('file'), function (req, res) {
    res.status(200).send({Message : 'Uploaded'})
    console.log(req.body)
  })


  
export default router