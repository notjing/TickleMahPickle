// useUsers.js
import { useState, useEffect } from 'react';

const JarsContext = () => {
  const [jars, setJars] = useState([]);

  // Fetch all users on mount
  useEffect(() => {
    fetch("http://localhost:5000/api/jars")
      .then(res => res.json())
      .then(data => setJars(data))
      .catch(err => console.error(err));
  }, []);

  // Function to manually refresh data
  const refresh = () => {
    fetch("http://localhost:5000/api/jars")
      .then(res => res.json())
      .then(data => setJars(data))
      .catch(err => console.error(err));
  };

  // This function creates a new jar with the given name and inviteEmails
    const createJar = async (jarName, inviteEmails) => {
      try {
        const response = await fetch("http://localhost:5000/api/jars", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: jarName,
            emails: inviteEmails
          }),
        });
        if (!response.ok) throw new Error("Failed to create jar");
        const result = await response.json();
        // Optionally handle result.success or result.jarId
        return result;
      } catch (err) {
        console.error("Error creating jar:", err);
        throw err;
      }
    };

  // Add more helper methods here (updateUser, deleteUser, etc.)

  return { jars, createJar, refresh };
};

export default JarsContext;