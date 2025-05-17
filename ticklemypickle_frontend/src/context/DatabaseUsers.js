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

  const userExistsByEmail = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/email/${encodeURIComponent(email)}`);
      if (!response.ok) throw new Error("Failed to check email");
      const result = await response.json();
      return result.exists; // Assumes your backend returns { exists: true/false }
    } catch (err) {
      console.error("Error checking if user exists by email:", err);
      return false;
    }
  };


  // Function to insert a user
  const addUser = async (newUser) => {
    const exists = await userExistsByEmail(newUser.email);
    if (exists) {
      alert("An account with this email already exists.");
      return false;
    }
  
    fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
    .then(() => refresh());
    return true;
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

  return { users, addUser, refresh, checkUserByCredentials, userExistsByEmail  };
};



export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userId, setUserId] = useState(() => localStorage.getItem('userId'));

  useEffect(() => {
  if (userId) {
    localStorage.setItem('userId', userId);
  } else {
    localStorage.removeItem('userId');
  }
}, [userId]);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}

export default DatabaseUsers;