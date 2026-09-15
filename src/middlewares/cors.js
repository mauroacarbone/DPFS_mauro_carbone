const DASHBOARD_ORIGIN = process.env.DASHBOARD_ORIGIN || 'http://localhost:5173';
const SITE_ORIGIN = process.env.SITE_ORIGIN || `http://localhost:${process.env.PORT || 3000}`;

const allowedOrigins = [DASHBOARD_ORIGIN, SITE_ORIGIN];

function cors(req, res, next) {
  const origin = req.headers.origin;
  const allowed = origin && allowedOrigins.includes(origin) ? origin : DASHBOARD_ORIGIN;

  res.header('Access-Control-Allow-Origin', allowed);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Vary', 'Origin');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
}

module.exports = cors;
