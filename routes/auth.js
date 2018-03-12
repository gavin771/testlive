const passport = require('passport');

module.exports = (app) => {
  const scopes = [
    'https://www.googleapis.com/auth/spreadsheets',
    'email',
    'profile',
    'https://www.googleapis.com/auth/drive'
  ]
  app.get('/auth/google', passport.authenticate('google', { scope: scopes }));

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/dashboard')
  });

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/')
  });

  app.get('/api/me', (req, res) => {
    res.send(req.user);
  });

  app.get('/', (req, res) => {
    res.send('SheetRail Server');
  });
}
