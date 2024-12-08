const express=require('express')
const router=express.Router()
const TripPlaceControll=require('../controllers/TripPlaceController')


router.post('/reqTrip',TripPlaceControll.TripPlaceDetails)

module.exports=router