const url = require('url');
const axios = require('axios')
const isLoggedIn = require('../middleware/isLogggedIn')

module.exports = (app) => {

  app.get('/api/testrail/test', [isLoggedIn], async (req, res) => {

    try {
      const api = url.resolve(`${req.user.testRailDomain}`, `/index.php?/api/v2/get_user_by_email&email=${req.user.testRailUsername}`)
      //console.log(api)
      const testrailRes = await axios.get(api, {
        headers: {
          'Content-Type': 'application/json'
        },
        auth: {
          username: req.user.testRailUsername,
          password: req.user.testRailApi
        },
      })
      //console.log(testrailRes.status)
      res.status(200).send({ success: true });
    } catch (err) {
      console.log(err.response.data.error);
      res.status(err.response.status).send(err.response.data);
    }
  });
};