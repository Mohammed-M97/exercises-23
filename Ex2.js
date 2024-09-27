// Triangular Treasure
// Return the nth triangular number
function triangular(n) {
  let output = [];
  for (let i = 0; i <= n; i++) {
    output.push(i);
  }
  let result = 0
  for (let i = 0; i < output.length; i++) {
    result += output[i];
    
  }
  return result;
}

console.log(triangular(2));
