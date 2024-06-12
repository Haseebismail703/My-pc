import express from 'express'
import multer from 'multer'
let router = express.Router()
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'image/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()
     * 1E9)
    
    cb(null, file.originalname )
  }
})

const upload = multer({ storage: storage })


router.post('/', upload.single('file'), function (req, res) {
    res.status(200).send({Message : 'Uploaded'})
    console.log(req.body)
  })


  
export default router