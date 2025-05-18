import { useState, useEffect } from 'react';

const JarsContext = () => {
  const [jars, setJars] = useState([]);

  // Fetch all jars on mount
  useEffect(() => {
    console.log("Fetching jars...");
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

  // HERHERHEHREHRHERHEHRHERHEHR Add transaction IDs to an existing jar 
 const addTransactionsToJar = async (jarId, transactionId) => {
  try {
    const response = await fetch("http://localhost:5000/api/jars/add-transactions", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jarId, transactionId }), // always send as array
    });
    if (!response.ok) throw new Error("Failed to add transactions to jar");
    const result = await response.json();
    refresh();
    return result;
  } catch (err) {
    console.error("Error adding transactions to jar:", err);
    throw err;
  }
};

  // Add more helper methods here (updateUser, deleteUser, etc.)

  return { jars, createJar, refresh };
};

export default JarsContext;