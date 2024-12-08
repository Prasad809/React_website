const mongodb=require('mongoose')

//creating userSchema
const userSchema=new mongodb.Schema({
    userName:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
})
//creating userModel

const userModel=mongodb.model('users',userSchema)

module.exports=userModel;