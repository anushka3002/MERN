const mongoose = require("mongoose")

const residentSchema = new mongoose.Schema(
    {
        "name":{type:String },
        "gender":{type:String},
        "age":{type:String},
    },
    {
        versionKey:false,
        timestamps:true
    }
)

module.exports = mongoose.model("resident",residentSchema)