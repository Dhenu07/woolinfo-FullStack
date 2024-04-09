const express = require('express');
const multer=require('multer');
const { connectDB, disconnectDB } = require('./db');
const cors=require('cors');
const path = require('path'); 
const UserModel=require('./model/register')
const FormModel=require('./model/sellform')
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.use(express.json())
app.use(cors({
  origin:['http://localhost:3000'],
  credentials:true
}
))
connectDB();
const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"../frontend/src/uploads")
  },
  filename:function(req,file,cb){
    const userId = req.cookies.userId;
    cb(null,userId+"_"+file.originalname);
  }
})
const upload=multer({storage:storage});
app.post('/signup',async (req,res)=>{
  console.log(req.body);
  console.log("hit");
  const user=await UserModel({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  });
  if(user){
    console.log(user)
    res.status(200).send("success");
    return user.save();
  }
  else{
    res.status(404).send("no");
  }
})
app.post('/login', async (req, res) => {
  console.log(req.body);
  console.log("hit");
  try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (user) {
          if (user.password === req.body.password) {
            const userId=user._id.toString();
            console.log(userId);
            res.cookie('userId', userId, { maxAge: 9000000000 }); 
            res.status(200).send(req.userId);
          } else {
              res.status(401).send("Invalid password");
          }
      } else {
          res.status(404).send("User not found");
      }
  } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
  }
});
app.post('/formupload',upload.single('image'),async (req,res)=>{
  // console.log(req.body);
  console.log(req.cookies.userId);
  // res.status(200).send(req.userId);
  const form=await FormModel({
    userId: req.cookies.userId,
    wools: req.body.wools,
    available: req.body.available,
    cost: req.body.cost,
    length: req.body.length,
    Vm:req.body.Vm,
    Country: req.body.Country,
    Address: req.body.Address,
    Email: req.body.Email,
    Phone:req.body.Ph,
    farmname: req.body.farm,
    description: req.body.description,
    image:req.cookies.userId+"_"+req.file.originalname
  });
  if(form){
    console.log(form)
    res.status(200).send("success");
    return form.save();
  }
  else{
    res.status(404).send("no");                         
  }
})
app.post('/upload', upload.single('image'),async(req,res)=>{
  console.log("hit the upload");
  console.log(req.cookies.userId);
  res.send("hello")
})
app.get('/forms', async (req, res) => {
  try {
      const forms = await FormModel.find(); 
      res.json(forms);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
  }
});
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.listen(5000,()=>{
  console.log(`listening at port ${5000}`);
})


