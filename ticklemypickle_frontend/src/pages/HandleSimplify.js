const handleSimplify = (setOpenSimplify) => {
  const members = [
    { name: "John Doe", email: "john@example.com", owedToMe: 15, iOwe: 0 },
    { name: "Jane Smith", email: "jane@example.com", owedToMe: 0, iOwe: 10 },
    // ...add all members here or use your actual data source
  ];
  let negProfit = [];
  let posProfit = [];
  members.forEach(member => {
    const profit = member.owedToMe - member.iOwe;
    if (profit < 0) {
      negProfit.push({ email: member.email, profit });
    } else if (profit > 0) {
      posProfit.push({ email: member.email, profit });
    }
  });

  const transactions = [];

  // Loop until all profits are zero
  while (
    negProfit.some(p => p.profit !== 0) &&
    posProfit.some(p => p.profit !== 0)
  ) {
    negProfit.sort((a, b) => a.profit - b.profit);
    posProfit.sort((a, b) => b.profit - a.profit);
    const giver = negProfit[0];
    const receiver = posProfit[0];
    const totalProfit = receiver.profit + giver.profit;
    if (totalProfit > 0) {
      // negProfit[0] is receiver, posProfit[0] is giver
      transactions.push({
        from: posProfit[0].email,
        to: negProfit[0].email,
        amount: Math.abs(totalProfit)
      });
      negProfit[0].profit = 0;
      posProfit[0].profit = totalProfit;
    } else if (totalProfit < 0) {
      // negProfit[0] is giver, posProfit[0] is receiver
      transactions.push({
        from: negProfit[0].email,
        to: posProfit[0].email,
        amount: Math.abs(totalProfit)
      });
      posProfit[0].profit = 0;
      negProfit[0].profit = totalProfit;
    } else {
      // Both are settled
      transactions.push({
        from: negProfit[0].email,
        to: posProfit[0].email,
        amount: Math.abs(totalProfit)
      });
      posProfit[0].profit = 0;
      negProfit[0].profit = 0;
    }
  }
  setOpenSimplify(false);
  // transactions now contains the minimal set of payments needed
  // You can use or display this array as needed
};

export default handleSimplify;