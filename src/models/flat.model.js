const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
    {
        "type":{type:String, required:true, enum:["Owner","Tenant"]},
        "block":{type:String, required:true},
        "number":{type:String, required:true},
        "residents": [{type:mongoose.Schema.Types.ObjectId, ref:"resident",required:true}]
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

module.exports = mongoose.model("flat",flatSchema)


// flats:[
//     {
//         "type":"Owner",
//         "block":"A",
//         "number":101,
//         "residents":[
//             {
//                 "name":"Anushka",
//                 "gender":"female",
//                 "age":19
//             }
//         ]
//     },
//     {
//         "type":"Tenant",
//         "block":"B",
//         "number":102,
//         "residents":[
//             {
//                 "name":"Sakshi",
//                 "gender":"female",
//                 "age":21
//             }
//         ]
//     },
//     {
//         "type":"Owner",
//         "block":"C",
//         "number":103,
//         "residents":[
//             {
//                 "name":"Rahul",
//                 "gender":"male",
//                 "age":25
//             }
//         ]
//     }

// ]

