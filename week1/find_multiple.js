function findMultiples(integer, limit) {
  let result = [];
  for (let i = integer; i <= limit; i += integer) {
    result.push(i);
  }
  return result;
}
let multiple = findMultiples(5, 25);
console.info(multiple);
