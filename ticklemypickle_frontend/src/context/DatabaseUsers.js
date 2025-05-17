// useUsers.js
import { useState, useEffect, createContext, useContext } from 'react';
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

  const checkUserByCredentials = async (email, password) => {
    
    try {
      const response = await fetch("http://localhost:5000/api/users/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) throw new Error("Failed to check user");

      const result = await response.json();
      console.log("entered")
      if (result.exists) {
        navigate('/dashboard');
        return true;
      }

      return false;
      console.log("failed")
    } catch (err) {
      console.error("Error verifying user credentials:", err);
      return false;
    }
  };

  // Add more helper methods here (updateUser, deleteUser, etc.)

  return { users, addUser, refresh, checkUserByCredentials  };
};

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userId, setUserId] = useState(null);
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}

export default DatabaseUsers;