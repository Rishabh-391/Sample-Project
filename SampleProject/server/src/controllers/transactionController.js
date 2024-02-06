const Wrapper = require("../middlewares/Wrapper");
const Transaction = require("../models/Transaction");
const User = require("../models/User");

exports.getTransaction = Wrapper(async function(req , res , next){
    const {trans_id} = req.query;
    const trans = await Transaction.findOne({_id : trans_id});
    if(!trans){
        res.status(400).json({
            message : "Invalid Transaction Id"
        })
    }
    const user1 = await User.findOne({_id : trans.from}).select("-amount -role -createdAt -__v");
    const user2 = await User.findOne({_id : trans.to}).select("-amount -role -createdAt -__v");
    console.log(user1.email + " " + user2.email);
    if(req.email !== user1.email && req.email !== user2.email){
        return res.status(401).json({
            message : "forbidden"
        })
    }
    res.status(200).json({
        trans_id,
        sender : user1,
        reciever : user2,
        amount : trans.amount
    })

})