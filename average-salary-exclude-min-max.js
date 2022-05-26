const average = (salary) => {
  let average = 0;
  salary.sort((a, b) => a - b);
  salary.shift();
  salary.pop();
  salary.forEach((amount) => {
    average += amount;
  });
  return average / salary.length;
};

const salary = [4000, 3000, 1000, 2000];
console.log(average(salary)); // Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

// ATTEMPT 1
// const average = (salary) => {
//     let count = 0
//   let average = 0;
//   salary.sort((a, b) => a - b);
//   for(let i = 1; i < salary.length -1; i++) {
//       count++
//     average += salary[i];
//   };
//   return average / count;
// };
