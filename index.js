const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const { cookieKey, mongoURI } = require('./config/keys');

mongoose.connect(mongoURI);

app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    keys: [cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./models/User');
require('./services/passport');

//Routes
require('./routes/auth')(app);
require('./routes/user')(app);

if (process.env.NODE_ENV === 'production') {
  //look in client/build for file that match unknown requests
  app.use(express.static('client/build'));

  //for all other routes, serve the index.html file
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(process.env.PORT || 5000);