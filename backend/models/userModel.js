const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema(
    {
        name : {
            type:String,
            require:true
        },
        email : {
            type:String,
            unique:true,
            require:true
        },
        age : {
            type:Number,
        }
    } , 
    {timestamps:true}
);

//model
const User = mongoose.model('User',userSchema)

module.exports = User;