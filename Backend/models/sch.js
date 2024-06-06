import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema({
    name : {
        type : Schema.Types.String,
        required : true
    },
    email : {
        type : Schema.Types.String,
        required : true ,
        unique : true
    },
    password : {
        type : Schema.Types.String,
        required : true
    },
})

const user = mongoose.model('user', schema)

export default user