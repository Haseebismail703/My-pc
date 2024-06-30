import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import main from './Route/main.js';
import mongoose from './db/data.js';

const app = express();
const PORT =  5000 ;

const db = mongoose.connection
db.on('error',console.error.bind(console,'Error connection'))
db.once('open',()=>{
    console.log('Db connected');
})


app.use(express.json());
app.use(cors())


 
app.use('/api', main);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});