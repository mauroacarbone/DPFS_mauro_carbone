export const SITE_URL = import.meta.env.VITE_SITE_URL || 'http://localhost:3000';
export const API_BASE = import.meta.env.VITE_API_BASE || '/api';

export function toSitePath(url) {
  if (!url) return '';
  return url.replace(/^https?:\/\/[^/]+/, '');
}
