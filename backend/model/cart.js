const mongoose=require('mongoose');
const Cart=new mongoose.Schema({
    userID:String,
    itemId:String,
    quantity:Number,
    type:String,
    status:{type:Boolean,default:false},
    curr_date: {
        type: Date,
        default: Date.now
    }
})
const CartModel=mongoose.model("cart",Cart)
module.exports=CartModel