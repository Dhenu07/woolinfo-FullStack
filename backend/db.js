// db.js
const mongoose = require('mongoose');
const uri = "mongodb+srv://DhenuDs:DhenuDurai@cluster0.zaupcst.mongodb.net/Woolinfoheaven?retryWrites=true&w=majority";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}

async function disconnectDB() {
  await mongoose.disconnect();
}

module.exports = { connectDB, disconnectDB };
