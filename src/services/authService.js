const API_URL = import.meta.env.VITE_API_URL;

export async function registerUser(userData) {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || 'Registration failed');
  }

  return res.json();
}


export async function loginUser(credentials) {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || 'Login failed');
  }

  return response.json();
}
