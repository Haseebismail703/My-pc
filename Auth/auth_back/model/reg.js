import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema({

    email : {
        type : Schema.Types.String,
        required : true,
        unique : true
    },
    password : {
        type : Schema.Types.String,
        required : true
    },
    
})

const register = mongoose.model('user', schema)

export default register