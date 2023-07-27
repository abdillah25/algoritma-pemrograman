// Konstruktor Stack untuk membuat objek tumpukan baru
function Stack() {
  this.count = 0; // Variabel untuk menyimpan jumlah elemen dalam tumpukan
  this.storage = {}; // Objek untuk menyimpan nilai-nilai tumpukan
}

// Metode push: Menambahkan nilai baru ke dalam tumpukan
Stack.prototype.push = function (value) {
  this.storage[this.count] = value; // Menyimpan nilai dengan menggunakan count sebagai kunci
  this.count++; // Menambahkan count agar menunjukkan jumlah elemen yang ada dalam tumpukan
};

// Metode pop: Menghapus dan mengembalikan nilai terakhir dari tumpukan
Stack.prototype.pop = function () {
  if (this.count === 0) {
    return undefined; // Mengembalikan undefined jika tumpukan kosong
  }
  this.count--; // Mengurangi count untuk menunjukkan jumlah elemen setelah penghapusan
  let result = this.storage[this.count]; // Menyimpan nilai yang akan dihapus
  delete this.storage[this.count]; // Menghapus nilai dari objek storage
  return result; // Mengembalikan nilai terakhir dari tumpukan
};

// Metode size: Mengembalikan jumlah elemen dalam tumpukan saat ini
Stack.prototype.size = function () {
  return this.count; // Mengembalikan nilai count yang menunjukkan jumlah elemen dalam tumpukan
};

// Metode peek: Mengembalikan nilai terakhir dari tumpukan tanpa menghapusnya
Stack.prototype.peek = function () {
  return this.storage[this.count - 1]; // Mengakses nilai terakhir dengan menggunakan count sebagai kunci
};

// Contoh penggunaan:
let myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.table(myStack); // table

console.log(myStack.pop()); // Output: 30

console.table(myStack); // table

console.log(myStack.size()); // Output: 2 (jumlah elemen dalam tumpukan)
console.log(myStack.peek()); // Output: 20 (nilai terakhir dalam tumpukan)
