const mongoose = require('mongoose');
const Form = new mongoose.Schema({
    userid: String,
    wools: String,
    cost: Number,
    length: Number,
    Vm:Number,
    Microns: Number,
    Country: String,
    Address: String,
    PostalCode: Number,
    Email: String,
    Phone:String,
    farmname: String,
    description: String,
    image:String,
});
const FormModel = mongoose.model("sell", Form);
module.exports = FormModel;
