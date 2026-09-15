import { API_BASE } from './config';

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error ${response.status} al pedir ${url}`);
  }
  return response.json();
}

function toProxiedUrl(url) {
  if (!url) return url;
  return url.replace(/^https?:\/\/[^/]+/, '');
}

export async function fetchAllPages(resource, collectionKey) {
  const first = await fetchJson(`${API_BASE}/${resource}`);
  const items = [...(first[collectionKey] || [])];
  let next = first.next;

  while (next) {
    const page = await fetchJson(toProxiedUrl(next));
    items.push(...(page[collectionKey] || []));
    next = page.next;
  }

  return { ...first, [collectionKey]: items };
}

export function fetchResource(resource, id) {
  return fetchJson(`${API_BASE}/${resource}/${id}`);
}
