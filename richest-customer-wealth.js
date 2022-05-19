// In the accounts array, there is an array that represents the banks acounts
// of each customer, all the money in each person's account together and
// figure out who is the wealthiest.

const maximumWealth = (accounts) => {
  let totalsArr = [];
  let total = 0;
  for (let i = 0; i < accounts.length; i++) {
    accounts[i].forEach((bankBalance) => {
      total += bankBalance;
    });
    totalsArr.push(total);
    total = 0;
  }
  return Math.max(...totalsArr);
};

const accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];
console.log(maximumWealth(accounts)); // Output: 10
