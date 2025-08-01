const API = "https://www.swapi.tech/api";

const memoryCache = new Map();

async function cachedFetch(url) {
  if (memoryCache.has(url)) return memoryCache.get(url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const data = await res.json();
  memoryCache.set(url, data);
  return data;
}

export async function getList(type, page = 1, limit = 10) {  
  const url = `${API}/${type}?page=${page}&limit=${limit}`;
  const data = await cachedFetch(url);
  return data?.results ?? [];
}

export async function getDetail(type, id) {
  const url = `${API}/${type}/${id}`;
  const data = await cachedFetch(url);
  return data?.result ?? null;
}

// Imágenes desde el repo de breatheco
export function getImageUrl(type, id) {
  const base = "https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images";
  return `${base}/${type}/${id}.jpg`;
}
