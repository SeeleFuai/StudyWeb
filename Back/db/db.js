const mongoose = require('mongoose');

const db = async () =>{
    mongoose
      .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/studyweb")
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("MongoDB connection error:", err));
    
};

module.exports = db;