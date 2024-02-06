const mongoose = require("mongoose");
const { number } = require("zod");
const transactionSchema = mongoose.Schema({
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})
module.exports = mongoose.model("Transaction" , transactionSchema);