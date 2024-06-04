import express from 'express';
import cors from 'cors'; 
import main from './Routes/main.js'; 

const app = express();
const PORT =  4000; 


app.use(express.json());
app.use(cors())

app.use('/',(req,res,next)=>{
    if(req.query.apikey === '123'){
        next()
        console.log(req.query.apikey)
    }else{
        res.status(500).send({status : 500, Mesaage : 'Not allowed'})
    }
})

app.use('/api', main); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
