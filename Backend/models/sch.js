import mongoose from "mongoose";

const schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true ,
        unique : true
    },
    // Number : {
    //     type : Number,
    //     required : true
    // },
    // Pass : {
    //     type : String,
    //     required : true
    // },
})

const user = mongoose.model('user', schema)

export default user