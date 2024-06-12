import express from 'express'
import multer from 'multer'
import fs from 'fs-extra'
import cloudinary from 'cloudinary'
let router = express.Router()

cloudinary.config({
  cloud_name: "dmlk41njm",
  api_key: "622964139729985",
  api_secret: "VfWsvE8NHNpfdYgpMqAhVf9qppw"
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'image/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()
      * 1E9)

    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })


router.post('/', upload.single('file'), function (req, res) {

  fs.readdir("image/", (err, files) => {
    files.forEach(file => {
      cloudinary.v2.uploader.upload(`image/${file}`, {}, (error, result) => {
        console.log(result)
        if (error) {
          res.status(500).send({ error: error })
        }
        fs.remove(`image/${file}`, err => {
          if (err) return console.error(err)
          // console.log('success!')
          res.status(200).send({ Message: 'Uploaded', url: result.url })
        })
      });
    });
  });

  console.log(req.body)
})



export default router