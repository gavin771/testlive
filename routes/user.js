const { URL } = require('url')
const isLoggedIn = require('../middleware/isLogggedIn')

module.exports = (app) => {

  app.get('/api/me', [isLoggedIn], (req, res) => {
    res.send(req.user);
  });

  app.post('/api/me/testrail', [isLoggedIn], async (req, res) => {
    const data = req.body;
    //console.log(`saving ${data}`)
    try {
      const url = new URL(data.domain);
      req.user.domain = url;
      req.user.api = data.api;
      const user = await req.user.save();
      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.status(422).send({ error: 'Invalid data provided' })
    }
  });

};