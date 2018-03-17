const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  testRailAPI: String,
  displayName: String,
  email: String,
  photo: String,
  sheets: [{ type: String }]
});

mongoose.model('users', userSchema);