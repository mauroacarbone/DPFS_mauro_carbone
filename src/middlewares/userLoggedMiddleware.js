const userService = require('../services/userService');

function userLoggedMiddleware(req, res, next) {
  if (!req.session.user && req.cookies.rememberEmail) {
    const stored = userService.findByEmail(req.cookies.rememberEmail);
    if (stored) {
      req.session.user = userService.publicUser(stored);
    }
  }

  res.locals.user = req.session.user || null;
  next();
}

module.exports = userLoggedMiddleware;
