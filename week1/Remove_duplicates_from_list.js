function removeDuplicate(arr) {
  const noDuplicate = new Set(arr);
  //   return Array.from(noDuplicate);
  return [...noDuplicate];
}
console.info(removeDuplicate([1, 1, 1, 1, 4, 4, 4, 4]));
console.info(removeDuplicate([5, 5, 5, 5, 4, 4, 4, 4]));
