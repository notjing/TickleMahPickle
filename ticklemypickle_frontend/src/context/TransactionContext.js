// useUsers.js
import { useState, useEffect } from 'react';

const TransactionContext = () => {
  const [transactions, setTransactions] = useState([]);

  // Fetch all users on mount
  useEffect(() => {
    fetch("http://localhost:5000/api/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.error(err));
  }, []);

  // Function to manually refresh data
  const refresh = () => {
    fetch("http://localhost:5000/api/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.error(err));
  };

  // Function to insert a user
  const addTransaction = (newTransaction) => {
    fetch("http://localhost:5000/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    })
    .then(() => refresh());
  };

  // Add more helper methods here (updateUser, deleteUser, etc.)

  return { transactions, addTransaction, refresh };
};

export default TransactionContext;