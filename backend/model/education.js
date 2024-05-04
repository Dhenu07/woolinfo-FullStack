const mongoose=require('mongoose');
const Education=new mongoose.Schema({
    moduleId:String,
    UserId:String,
    status:Boolean,
})
const EducationModel=mongoose.model("education",Education)
module.exports=EducationModel