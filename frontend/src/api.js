const API_URL = 'http://localhost:5000';

export const fetchUsers = async()=>{
    const response =  await fetch(`${API_URL}/users`);
    return response.json();
};
export const fetchTask = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  return response.json();
};
export const registerUser = async (user) => {
  const response = await fetch(`${API_URL}/users`,{
    method:`POST`,
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(user)
  });
  return response.json();
};

export const loginUser = async(creds)=>{
    const response= await fetch(`${API_URL}/users?email=${creds.email}&password=${creds.password}`);
    const users = await response.json();
    return users[0];
}
export const createTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: `POST`,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return response.json();
};
