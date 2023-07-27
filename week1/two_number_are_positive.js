function twoArePositive(a, b, c) {
  const positiveCount = [a, b, c].filter((num) => num > 0).length;
  return console.info(positiveCount);
}
twoArePositive(2, 4, -3);
