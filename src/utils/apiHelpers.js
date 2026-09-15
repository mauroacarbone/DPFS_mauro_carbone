const PAGE_SIZE = 10;

function absoluteUrl(req, pathname) {
  if (!pathname) return null;
  if (/^https?:\/\//i.test(pathname)) return pathname;
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${req.protocol}://${req.get('host')}${path}`;
}

function pageNumber(req) {
  const page = Number.parseInt(req.query.page, 10);
  return Number.isFinite(page) && page > 0 ? page : 1;
}

function paginationUrls(req, count, page) {
  const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));
  const base = `${req.protocol}://${req.get('host')}${req.baseUrl}${req.path}`.replace(/\/$/, '');
  return {
    next: page < totalPages ? `${base}?page=${page + 1}` : null,
    previous: page > 1 ? `${base}?page=${page - 1}` : null
  };
}

module.exports = {
  PAGE_SIZE,
  absoluteUrl,
  pageNumber,
  paginationUrls
};
