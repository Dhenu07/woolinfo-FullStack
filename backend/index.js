const express = require('express');
const multer=require('multer');
const { connectDB, disconnectDB } = require('./db');
const cors=require('cors');
const path = require('path'); 
const UserModel=require('./model/register')
const FormModel=require('./model/sellform')
const cookieParser = require('cookie-parser');
const { $eq } = require('sift');
const CartModel = require('./model/cart');
const { Console } = require('console');
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
let uid;
app.post('/login', async (req, res) => {
  console.log(req.body);
  console.log("hit");
  try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (user) {
          if (user.password === req.body.password) {
            const userId=user._id.toString();
            uid = userId;
            console.log(userId);
            res.cookie('userId', userId, { maxAge: 900000000000000 }); 
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
  console.log(req.cookies.userId);
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
    console.log(uid);
    const forms = await FormModel.find({ userId: { $ne: uid } });
    res.json(forms);
    console.log(forms);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});
app.get('/getname', async (req, res) => {
  try{
    const user = await UserModel.findById(uid);
     res.json(user);
  }catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
  })
app.get('/getbio', async (req, res) => {
  try{
    const user = await UserModel.findById(uid);
     res.json(user);
  }catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
  })
app.post('/getupdate', async (req, res) => {
  const updateUser = await UserModel.findOneAndUpdate(
    { _id: uid },     {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address,
      image: req.body.image
    },
    { new: true } 
  );
  if(updateUser){
    console.log(updateUser)
    res.status(200).send("success");
    // return form.save();
  }
  else{
    res.status(404).send("no");                         
  }
})
app.get('/sellhistory', async (req, res) => {
  try {
    console.log(uid);
    const forms = await FormModel.find({ userId: { $eq: uid } });
    res.json(forms);
    console.log(forms);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
})
app.get('/buyhistory', async (req, res) => {
  try{
    let finaljson=[];
    const item=await CartModel.find({userID: { $eq: uid},status: { $eq:true}});
    for(const his of item){
      const details=await FormModel.findById(his.itemId);
      finaljson.push({
        wool:details.wools,
        cost:details.cost,
        length:details.length,
        vm:details.Vm,
        farmname:details.farmname,
        image:details.image,
        quantity:his.quantity,
        date:his.curr_date
      });
    }
    console.log(finaljson);
    res.json(finaljson);
  }
  catch(error){
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
})
//backend for cart
app.get('/cart', async (req, res) => {
  try {
    let finaljson = [];
    console.log(uid);
    const cartItems = await CartModel.find({ userID: { $eq: uid }, status: { $eq: false } });
    
    for (const cart of cartItems) {
      const cartItem = await FormModel.findById(cart.itemId);
      finaljson.push({
        cartId: cart._id,
        itemId: cart.itemId,
        quantity: cart.quantity,
        cost: cartItem.cost,
        wools: cartItem.wools,
        available: cartItem.available,
        length: cartItem.length,
        image: cartItem.image
      });
    }
    
    console.log(finaljson);
    res.json(finaljson);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});
app.post('/cart/add',async (req, res) => {
  const body=req.body;
  console.log(body);
  const newItem=await CartModel.create({
    userID:uid,
    itemId:body.item,
    quantity:body.quantity,
    type:req.body.type,}
  );
  if(newItem){
    console.log(body.item+" "+body.quantity);
    const itemcheck=await FormModel.findById(body.item);
    const itemUpdate=await FormModel.findByIdAndUpdate(body.item,{available:itemcheck.available-body.quantity})
    if(itemUpdate){
      res.status(201).send("added to to cart");
    }
  }
  else
    res.status(404).send("could not add");
});

app.post('/cart/buy',async(req,res)=>{
  const buyItem = await CartModel.findOneAndUpdate(
    { userID: uid, status: false },
    { 
      $set: { 
        status: true,
      } 
    },
    { new: true }
  );
  
    if(buyItem){
    res.status(201).send("succesfully bought");
  }
  else
    res.status(404).send("couldnt buy item")
})
app.post('/remove', async (req, res) => {
  const { cartid, item } = req.body;
  try {
      const finditem = await CartModel.findOne({ _id: cartid });
      const getquantity = await FormModel.findOne({ _id: item });
      
      if (!finditem || !getquantity) {
          return res.status(404).send("Item not found");
      }
      
      const itemUpdate = await FormModel.findByIdAndUpdate(item, { available: getquantity.available + finditem.quantity });
      const deleteItem = await CartModel.deleteOne({ _id: cartid });

      console.log(finditem);
      console.log(getquantity);

      if (deleteItem) {
          res.status(201).send("Successfully Deleted");
      } else {
          res.status(404).send("Couldn't delete item");
      }
  } catch (error) {
      console.error('Error removing item from cart:', error);
      res.status(500).send("Internal Server Error");
  }
});


app.post('/module/complete',async(req,res)=>{
  const body=req.body;
  const user=await UserModel.findById(uid);
  var completed=user.modules;
  completed.push(body.moduleId);
  const updatedUser=await UserModel.updateOne({id:user._id},{moduleId:completed})
  if(updatedUser){
    res.status(200).send("completed module")
  }
  else
    res.status.send(404).send("something went wrong")
})

app.get('/module/getCompleted',async(req,res)=>{
  console.log(uid);
  const user=await UserModel.findById(uid);
  console.log(user);
  const modules=user.modules;
  if(modules){
    console.log(modules);
    res.status(200).send(modules)
  }
  else
    res.status(404).send("not available");
})
app.listen(5000,()=>{
  console.log(`listening at port ${5000}`);
})


