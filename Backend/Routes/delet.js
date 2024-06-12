import express from 'express'
import cloudinary from 'cloudinary'
let router = express.Router()

cloudinary.config({
  cloud_name: "dmlk41njm",
  api_key: "622964139729985",
  api_secret: "VfWsvE8NHNpfdYgpMqAhVf9qppw"
});


router.post('/',(req,res)=>{
    console.log(req.body.image_id)
cloudinary.v2.api
  .delete_resources([req.body.image_id], 
    { type: 'upload', resource_type: 'image' })
  .then(console.log);
    return res.status(200).send({Message :"Image deleted"})
})
export default router