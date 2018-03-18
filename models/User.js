const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  testRailUsername: String,
  testRailApi: String,
  testRailDomain: String,
  displayName: String,
  email: String,
  photo: String,
  sheets: [{ type: String }]
});

mongoose.model('users', userSchema);