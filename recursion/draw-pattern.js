// N=2
// *
// **
// *

// N=3
// *
// **
// ***
// **
// *

// For inputs of N, draw this pattern.
// But using recursion, without any for/while loops.

const drawPatern = (n) => {
    let stars = "";
    n = n * 2 - 1;
    let counter = 0;
  
    const helper = () => {
      if (counter <= n / 2) {
        stars += "*";
        console.log(stars);
        helper(counter++);
      }
      if (counter > n / 2 && counter < n) {
        stars = stars.substring(1);
        console.log(stars);
        helper(counter++);
      }
    };
    helper();
  };
  
  console.log(drawPatern(6));