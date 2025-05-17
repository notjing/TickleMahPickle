// useUsers.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DatabaseUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

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

  const checkUserByEmail = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users?email=${encodeURIComponent(email)}`);
      if (!response.ok) throw new Error("Failed to fetch user");

      const user = await response.json();
      if (user) {
        navigate('/dashboard');
        return true;
      }
      return false;
    } catch (err) {
      console.error("Error checking user:", err);
      return false;
    }
  };

  const checkUserByCredentials = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/users/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) throw new Error("Failed to check user");

      const result = await response.json();
      if (result.exists) {
        navigate('/dashboard');
        return true;
      }

      return false;
    } catch (err) {
      console.error("Error verifying user credentials:", err);
      return false;
    }
  };

  // Add more helper methods here (updateUser, deleteUser, etc.)

  return { users, addUser, refresh, checkUserByCredentials  };
};

export default DatabaseUsers;