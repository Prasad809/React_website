const userModel = require('../Model/userModel')
const bcrypt = require('bcrypt')
const fs = require('fs').promises;
const path=require('path')
const dotEnv=require('dotenv').config();
const userRegister = async (req, res) => {
    const { userName, email, password } = req.body
    try {
        const userEmail = await userModel.findOne({ email })
        if (userEmail) {
            return res.status(401).json({ status: "error", message: "Email Already Taken" })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = new userModel({
            userName,
            email,
            password: hashPassword,
        })
        await newUser.save()
        res.status(200).json({ status: "success", message: "User Registered Succefully" })
    } catch (error) {   
        return res.status(500).json({status: "error", message: "Server Problem" })
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const userEmail = await userModel.findOne({ email })
    try {
        if (!userEmail || !(await bcrypt.compare(password, userEmail.password))) {
            return res.status(400).json({ status: "error", message: "Invalid userName or password" })
        }
        res.status(200).json({ status: "success ", message: "LogIn Success" })
    } catch (error) {
        return res.status(500).json({status: "error", message: "Server Problem" })
    }
}


const fullPath=process.env.npm_config_local_prefix
const filename=path.join(fullPath,"FsModule","state.json")

const indianStates = async (req, res)=> {
    try {
        const data = await fs.readFile(filename, 'utf8');        
        res.status(200).json(JSON.parse(data));
    } catch (error) {
         res.status(500).json({ message: 'Internal Server Error' });
    }
}
const visitName = process.env.npm_config_local_prefix;
const FilePath = path.join(visitName,"FsModule","tourisam.json"); 
const visitingPlaces = async (req, res)=> {
    try {
        const data = await fs.readFile(FilePath, 'utf8');        
        res.status(200).json(JSON.parse(data));
    } catch (error) {
         res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = { userRegister, userLogin, indianStates,visitingPlaces }


