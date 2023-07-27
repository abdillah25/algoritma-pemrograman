// stack

// function . push, pop, peek, length
let letter = []; // this is our sctack

let word = "DILLAH";

let rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letter.push(word[i]);
}
console.info(letter);

// pop off stack in reverse order  into empty string
for (let i = 0; i < word.length; i++) {
  rword += letter.pop();
}
console.info(rword);

if (rword === word) {
  console.info(word + " sama dengan dan sama tipe");
} else {
  console.info(word + " tidak sama dengan dan tidak sama tipe");
}
