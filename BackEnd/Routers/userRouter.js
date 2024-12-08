const express =require('express')
const Router =express.Router()
const userControl = require('../controllers/userController')
Router.post('/register',userControl.userRegister)
Router.post('/login',userControl.userLogin)
Router.get('/states',userControl.indianStates)
Router.get('/places',userControl.visitingPlaces)

module.exports = Router