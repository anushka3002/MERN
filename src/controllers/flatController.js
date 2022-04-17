const express = require("express")
const Flat = require("../models/flat.model")
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const flat = await Flat.create(req.body)
        res.send(flat)
    }catch(err){
        res.status(500).send(err.message)
    }
})


router.get("/",async(req,res)=>{
    try{
        const query = req.query.sort 
        if(query==="1"){
            const flats = await Flat.find().sort({flat_no:1}).populate("rsidents").lean().exec()
            res.send(flats)
        }
        else if(query==="2"){
            const flats = await Flat.find().sort({flat_no:-1}).populate("residents").lean().exec()
            res.send(flats)
        }
        else{
            const flats = await Flat.find().populate("residents").lean().exec()
            res.send(flats)
        }
    }catch(err){
        res.status(500).send(err.message)
    }
})


router.get("/filter",async(req,res)=>{
    try{
        const query = req.query.filter
        const flat = await Flat.find({"block":query}).populate("residents").lean().exec()
        res.send(flat)
    }catch(err){
        res.status(500).send(err.message)
    }
})


router.get("/type",async(req,res)=>{
    try{
        const query = req.query.filter
        const flat = await Flat.find({"type":query}).populate("residents").lean().exec()
        res.send(flat)
    }catch(err){
        res.status(500).send(err.message)
    }
})

module.exports = router