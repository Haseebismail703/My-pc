import express from 'express'
import register from '../model/reg.js';
const router = express.Router()

router.get('/', async(req, res) => {
  // const {email} = req.body

  try {
    let  users  =  await register.find({})
    res.status(200).json({users})
    console.log(users);
  } catch (error) {
    res.status(400).send({error : error.message})
    console.log(error.message)
  }
  // res.status(400).send({message : 'error'})
  });

  router.get('/:key', async(req, res) => {
    console.log(req.params.key)
  
    try {
      let  users  =  await register.find({
        '$or': [
          {email : {$regex :req.params.key }},
          // {password : {$regex : req.params.key}}
        ]
       })
      res.status(200).json({users})
      console.log(users);
    } catch (error) {
      res.status(400).send({error : error.message})
      console.log(error.message)
    }
    // res.status(400).send({message : 'error'})
    });




export default router