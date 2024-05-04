const mongoose=require('mongoose');
const User=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    address:String,
    image:String,
    modules:{type:Array}
})
const UserModel=mongoose.model("signin",User)
module.exports=UserModel