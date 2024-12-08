const mongodb =require('mongoose')

const tripPlaceSchema=new mongodb.Schema({
    location:String,
    name:String,
    description:String,
    visitors:Number,
    hotels:[]
})

const tripPlaceModel=new mongodb.model('tripPlace',tripPlaceSchema)
module.exports=tripPlaceModel