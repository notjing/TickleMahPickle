import React from 'react'

const parseTransactions = (transactions, jars, userId, users, wantPaid) => {
  console.log("transactions", transactions);
  console.log("users", users);
  console.log("jars", jars);

  return transactions
    .filter((transaction) => {
      const fromID = transaction.from;
      const toID = transaction.to;
      return (transaction.paid == wantPaid) && (fromID === userId || toID === userId);
    })
    .map(transaction => {
      const date = new Date(transaction.date);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      const fromID = transaction.from;
      const toID = transaction.to;

      const fromUser = users.find(user => user && user._id === fromID);
      const toUser = users.find(user => user && user._id === toID);

      // Check for existence before accessing names
      const fromName = (fromUser && fromUser.firstName && fromUser.lastName)
        ? `${fromUser.firstName} ${fromUser.lastName}`
        : "Unknown User";
      const toName = (toUser && toUser.firstName && toUser.lastName)
        ? `${toUser.firstName} ${toUser.lastName}`
        : "Unknown User";

      const transactionType = fromUser && fromUser._id === userId ? "Pay" : "Receive";
      
      const jarName = jars.find(jar => jar._id === transaction.jar)?.name || "Unknown Jar";

      return {
        ...transaction,
        jar: jarName,
        amt: transaction.amt * (transactionType === "Pay" ? -1 : 1),
        name: fromUser && fromUser._id === userId ? toName : fromName,
        date: formattedDate
      };
    });
}

export default parseTransactions
