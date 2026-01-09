const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
  {
    gmail: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true
  }
);

// biến thứ nhất là tên collection
const User =  mongoose.model('User', UserSchema);

module.exports = { User }