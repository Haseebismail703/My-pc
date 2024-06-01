import exprees from 'express'
const app = exprees()

const port = 3000
app.use(exprees.json())
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
app.listen(port,()=>{
    console.log('Server is runing');
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/user',(req,res)=>{
    res.send(users)
})
app.post('/user',(req,res)=>{
    users.push(req.body)
    res.send({MEssage : 'User added'})
})

app.delete('/user/:id',(req,res)=>{
    const index = users.findIndex(v=> v.id === Number(req.params.id))
    users.splice(index,1)
    res.send({MEssage : 'User deleted'})
})

