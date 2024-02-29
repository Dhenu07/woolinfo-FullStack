const mongoose = require('mongoose');
const User = new mongoose.Schema({
    email: String,
    password: String
});
const UserModel = mongoose.model("signin", User);
module.exports = UserModel;