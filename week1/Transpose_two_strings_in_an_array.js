function transposeTwoStrings(array) {
  let multiArrayResult = [];
  for (let i = 0; i < array.length; i++) {
    let result = Array.from(array[i]);
    multiArrayResult.push(result);
  }

  const numRows = Math.max(...multiArrayResult.map((item) => item.length));
  for (let i = 0; i < numRows; i++) {
    let result = "";
    multiArrayResult.forEach((rowArray) => {
      result += (rowArray[i] ? rowArray[i] : "\t") + "\t";
    });
    return result;
  }
}
transposeTwoStrings(["hello", "world", "how"]);
