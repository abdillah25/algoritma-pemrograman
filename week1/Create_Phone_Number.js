function createPhoneNumber(numbers) {
  const areaNumber = numbers.slice(0, 3).join("");
  const secondNumber = numbers.slice(3, 6).join("");
  const thirdNumber = numbers.slice(6, 10).join("");
  return `(${areaNumber}) ${secondNumber}-${thirdNumber}`;
}

console.info(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
