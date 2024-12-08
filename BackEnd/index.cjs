const express = require('express')
const mongodb=require('mongoose')
const bodyParser = require('body-parser')
const userRouter = require('./Routers/userRouter')
const TripRouter=require('./Routers/TripRouter')
const TripPlaceRouter=require('./Routers/TriplaceRouter')
const OfferRouter=require('./Routers/OffersRouter')
const cors=require('cors')
const PORT = 4040

const app=express()
// app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use('/users',userRouter)
app.use('/trips',TripRouter)
app.use('/place',TripPlaceRouter)
app.use('/hotel',OfferRouter)

app.use('/home',(req,res)=>{
    res.send("<h1>Tourism Application</h1>")
})

mongodb.connect('mongodb://localhost:27017/Ecommerce')
.then(()=>console.log("MongoDb Connected Succefully..........!"))
app.listen(PORT,(err)=>{
    if(err) throw err
    console.log("Server Running on 4040");
})