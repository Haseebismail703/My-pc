import exprees from 'express'
import cors from 'cors'
import index from './Routes/index.js'
const app = exprees()

const port = 5000
app.use(exprees.json())
// app.use(cors())
app.use('/api',index)

app.use('/',(req,res, next)=>{
    console.log('Agai' ,req.query )
    if(req.query.apikey === '123'){
       next() 
    }else{
        res.status(400).send({message : 'not allowed'})
    }
    
})
// let users = [

//     {
//         id: 1,
//         name: 'John',
//         age: 25
//     },
//     {
//         id: 2,
//         name: 'Haseeb',
//         age: 20
//     }

// ]
app.listen(port, () => {
    console.log('Server is runing');
})


// app.get('/', (req, res) => {
//     return res.send('Hello World')
// })
// app.get('/user', (req, res) => {
//     res.send(users)
// })
// app.post('/user', (req, res) => {
//     try {
//         const { name, age } = req.body
//         if (name && age) {
//             users.push({ id: users.length + 1, ...req.body })
//             return res.status(200).send({ status: '200', Message: 'User added' })
//         } else {
//             return res.status(400).send({ status: '400', Message: 'User not added' })
//         }

//     } catch (err) {
//         return res.status(500).send({ status: '500', Message: err.message })
//     }

// })

// app.delete('/user/:id', (req, res) => {
//     const index = users.findIndex(v => v.id === Number(req.params.id))
//     users.splice(index, 1)
//     return res.send({ Message: 'User deleted' })
// })

// app.put('/user/:id', (req, res) => {
//     const index = users.findIndex(v => v.id === Number(req.params.id))
//     if (index !== -1) {
//         users.splice(index, 1, { id: Number(req.params.id), ...req.body })
//     }
//     else {
//         console.log('Error-->');
//     }

//     return res.send({ Message: 'User Update' })
// })
