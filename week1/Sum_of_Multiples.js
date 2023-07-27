function sumMultiple(n, m) {
  if (n <= 0 || m <= 0 || m <= n) {
    return "invalid";
  }
  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}

console.log(sumMultiple(2, 9)); // Output: 20
