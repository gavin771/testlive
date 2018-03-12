const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  testRailAPI: String,
  sheets: [{ type: String }]
});

mongoose.model('users', userSchema);