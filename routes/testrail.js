const isLoggedIn = require('../middleware/isLogggedIn')

module.exports = (app) => {

  app.get('/api/testrail/test', [isLoggedIn], (req, res) => {
    res.send(req.user);
  });
};