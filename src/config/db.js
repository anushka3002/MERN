const mongoose = require("mongoose")
const connect = () =>{
    return mongoose.connect(
        "mongodb+srv://anushka:anushka_123@cluster0.9mnv1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
}

module.exports = connect