export const SITE_URL = import.meta.env.VITE_SITE_URL
  || (typeof window !== 'undefined' ? window.location.origin : '');
export const API_BASE = import.meta.env.VITE_API_BASE || '/api';

export function toSitePath(url) {
  if (!url) return '';
  return url.replace(/^https?:\/\/[^/]+/, '');
}
