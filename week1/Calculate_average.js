function findAverage(array) {
  const average = array.length === 0 ? 0 : array.reduce((acc, curr) => acc + curr, 0) / array.length;
  console.info(average);
}

findAverage([1, 2, 3, 4]); // Output: 2.5
findAverage([48, 59, 20, 56, 30, 25, 18, 87, 16, 17, 62, 29, 100, 71, 41]); // Output: 0
