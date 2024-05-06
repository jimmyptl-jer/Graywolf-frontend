// const API_BASE_URL = "https://graywolg-api.onrender.com" || ''

const API_BASE_URL = 'http://localhost:3000'


export const contact = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(responseBody.message)
  }
}

export const register = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(responseBody.message)
  }
}

export const login = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(responseBody.message)
  }
}

export const fetchProjects = async () => {
  const response = await fetch(`${API_BASE_URL}/api/project/getProjects`);

  if (!response.ok) {
    // You can decide what to do when the response is not okay, for example, return an empty array.
    console.error(`Failed to get projects. Status: ${response.status}`);
    return [];
  }

  return response.json();
};

export const addPost = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/post`, {
    method: 'POST',
    credentials: "include",
    body: data
  })

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
}

export const getAllPost = async () => {
  const response = await fetch(`${API_BASE_URL}/api/post`, {
    credentials: "include"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  return response.json();
};