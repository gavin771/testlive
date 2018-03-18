const url = require('url');
const axios = require('axios')
const isLoggedIn = require('../middleware/isLogggedIn')

module.exports = (app) => {

  app.post('/api/testrail/test', [isLoggedIn], async (req, res) => {
    var data = req.body;
    //console.log(data)
    try {
      const api = url.resolve(`${data.domain}`, `/index.php?/api/v2/get_user_by_email&email=${data.username}`)
      //console.log(api)
      const testrailRes = await axios.get(api, {
        headers: {
          'Content-Type': 'application/json'
        },
        auth: {
          username: data.username,
          password: data.api
        },
      })
      //console.log(testrailRes.status)
      res.status(200).send({ success: true });
    } catch (err) {
      if (err.response) {
        //console.log(err.response.data.error);
        res.status(err.response.status).send(err.response.data);
      }
      else{
        res.status(400).send({error: 'Invalid Request'});
      }
    }
  });
};