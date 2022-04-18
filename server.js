const express = require('express')
const cors = require('cors')
const body_parser = require("body-parser")
const connect = require("./src/config/db")
const flatSchema= require("./src/controllers/flatController")
const residentSchema= require("./src/controllers/residentController")
const {register, login,newToken} = require("./src/controllers/authController")

const app = express()
require('dotenv').config();
app.use(body_parser.json())


const corsOptions = {
    origin: '*',
    credentials:true,
    optionSuccessStatus:200,
}
  
  app.use(cors(corsOptions))
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });
  
  
  app.use("/flat",flatSchema)
  app.use("/resident",residentSchema)
  app.post("/register",register);
  app.post("/login",login);

app.listen(3000, async () =>{
    try{
        await connect()
        console.log(`listen on port 3000`)      
    } catch(error){
        console.log('error:', error.message)
    }
})