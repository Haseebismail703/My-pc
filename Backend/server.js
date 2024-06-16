import express from 'express';
import cors from 'cors';
import chalk from 'chalk'
import 'dotenv/config'
import main from './Routes/main.js';
import mongoose from './db/data.js';
import { createServer } from 'http';
import {Server} from 'socket.io'
const app = express();
const PORT = process.env.PORT;

// const db = mongoose.connection
// db.on('error',console.error.bind(console,'Error connection'))
// db.once('open',()=>{
//     console.log(chalk.green('Db connected'));
// })


app.use(express.json());
app.use(cors())

// app.use('/', (req, res, next) => {
//     if (req.query.apikey === '123') {
//         next()
//         console.log(req.query.apikey)
//     } else {
//         res.status(500).send({ status: 500, Mesaage: 'Not allowed' })
//     }
// })

app.use('/api', main);
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const httpserver = createServer(app)

const io = new Server(httpserver,{ cors : '*'})

io.on("connection", (socket) => {
    console.log("Socket connect",socket.id)
    socket.on("add",(data)=>{
        console.log("data",data);
        io.emit("send",data)
    })
  });
  httpserver.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
  })