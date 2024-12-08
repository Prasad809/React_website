const express=require('express')
const router=express.Router()
const TripControll=require('../controllers/TripController')

//post method
router.post('/addTrip',TripControll.TripDetails)

module.exports=router