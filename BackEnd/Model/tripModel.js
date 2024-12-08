const mongodb=require('mongoose')

const TripSchema=new mongodb.Schema({
    email:{
        type:String,
        unique:true
    },
    fullName:{
        type:String
    },
    tripDate:{
        type:String
    },
    location:{
        type:String
    },
    phoneNumber:{
        type:Number,
        unique:true
    },
    persons:{
        type:Number,
    },
    optional:{
        type:String
    }
})

const TripModel =new mongodb.model('trips',TripSchema)
module.exports=TripModel;