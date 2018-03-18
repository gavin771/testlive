const isLoggedIn = require('../middleware/isLogggedIn')

module.exports = (app) => {

  app.get('/api/me', [isLoggedIn], (req, res) => {
    res.send(req.user);
  });

  app.post('/api/me', [isLoggedIn], (req, res) => {
    console.log(req.body);

    res.send(req.user);
  });

};