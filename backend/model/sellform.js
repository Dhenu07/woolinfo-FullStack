const mongoose = require('mongoose');
const Form = new mongoose.Schema({
    userId: String,
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
    curr_date: {
        type: Date,
        default: Date.now
    }
});
const FormModel = mongoose.model("sell", Form);
module.exports = FormModel;
