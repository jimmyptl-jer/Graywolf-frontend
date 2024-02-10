const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''


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


export const fetchProjects = async () => {
  const response = await fetch(`${API_BASE_URL}/api/project/getProjects`);

  if (!response.ok) {
    // You can decide what to do when the response is not okay, for example, return an empty array.
    console.error(`Failed to get projects. Status: ${response.status}`);
    return [];
  }

  return response.json();
};
