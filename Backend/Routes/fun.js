import express from 'express'
const router = express.Router()


let users = [
    {
        id : 1,
        name: 'Haseeb',
        class: '12'
    },

    {
        id :2,
        name: 'Haseeb 2',
        class: '123'
    }
]



router.post('/', async (req, res) => {
    console.log(req.body)
    users.push({...req.body})
    res.status(200).send(users)
  })

  router.get('/all', async (req, res) => {
    console.log(req.body)
    res.status(200).send(users)
  })


  router.get('/:id', async (req, res) => {
    console.log(req.params)
    const index = users.findIndex(v => v.id === Number(req.params.id))
    users.splice(index,1)
    res.status(200).send({Message : "Delete succes"})
  })

export default router