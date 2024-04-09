const mongoose = require('mongoose');
const Form = new mongoose.Schema({
    userid: String,
    wools: String,
    available: Number,
    cost: Number,
    length: Number,
    Vm:Number,
    Country: String,
    Address: String,
    Email: String,
    Phone:String,
    farmname: String,
    description: String,
    image:String,
});
const FormModel = mongoose.model("sell", Form);
module.exports = FormModel;
