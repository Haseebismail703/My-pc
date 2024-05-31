import express from 'express'

const app = express()
const PORT = 2000
app.use(express.json())
app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello world')
})

let users = [

    {   id : 1,
        name: 'John',
        age: 25
    },
    {
        id : 2 ,
        name: 'Haseeb',
        age: 20
    }

]
app.get('/user', (req, res) => {
    res.send(users)
})

app.post('/user',(req,res)=>{
    users.push(req.body)
    res.send({message : 'Post success'})
})
app.delete('/user/:id',(req)=>{
    let index = users.findIndex(v => v.id === Number(req.params.id))
    users.splice(index,1)
    // users.splice(req.body.id,req.params.id)
    // console.log(req.params.id)
    

})