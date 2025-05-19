const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchWithAuth(path, options = {}) {
  const token = localStorage.getItem('token');

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (res.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  return res;
}

export function saveToken(token) {
    localStorage.setItem('token', token);
  }