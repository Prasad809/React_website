const express=require('express')
const router=express.Router()
const OffersControll=require('../controllers/OffersController')


router.get('/offers',OffersControll.OffersControler)

module.exports=router