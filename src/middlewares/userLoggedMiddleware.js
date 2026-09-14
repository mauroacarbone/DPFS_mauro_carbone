const db = require('../database/models');
const { presentUser } = require('../database/presenters');

async function userLoggedMiddleware(req, res, next) {
  try {
    if (!req.session.user && req.cookies.rememberEmail) {
      const stored = await db.User.findOne({
        where: { email: req.cookies.rememberEmail },
        include: ['category']
      });
      if (stored) {
        req.session.user = presentUser(stored);
      }
    }
    res.locals.user = req.session.user || null;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = userLoggedMiddleware;
