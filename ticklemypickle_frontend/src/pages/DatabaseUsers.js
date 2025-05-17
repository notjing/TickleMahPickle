// useUsers.js
import { useState, useEffect } from 'react';

const DatabaseUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users on mount
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  // Function to manually refresh data
  const refresh = () => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  };

  // Function to insert a user
  const addUser = (newUser) => {
    fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
    .then(() => refresh());
  };

  // Add more helper methods here (updateUser, deleteUser, etc.)

  return { users, addUser, refresh };
};

export default DatabaseUsers;