// Sets

// Membuat Struktur Data Set
function myset() {
  // Variabel ini akan menyimpan elemen-elemen dalam Set
  let collection = [];

  // Metode ini akan memeriksa keberadaan suatu elemen dan mengembalikan true atau false
  this.has = function (element) {
    // Menggunakan indexOf untuk mencari indeks elemen dalam array collection
    // Jika elemen tidak ditemukan, maka indexOf akan mengembalikan -1
    // Jika elemen ditemukan (indeks tidak -1), maka has akan mengembalikan true,
    // sebaliknya akan mengembalikan false
    return collection.indexOf(element) !== -1;
  };

  // Metode ini akan mengembalikan semua nilai yang ada dalam Set
  this.values = function () {
    return collection;
  };

  // Metode ini akan menambahkan sebuah elemen ke dalam Set
  this.add = function (element) {
    if (!this.has(element)) {
      // Jika elemen belum ada dalam Set, maka elemen akan ditambahkan ke dalam array collection
      collection.push(element);
      // Mengembalikan array collection setelah penambahan elemen
      return this.values();
    }
    // Jika elemen sudah ada dalam Set, maka tidak perlu menambahkannya dan akan mengembalikan false
    return false;
  };

  // Metode ini akan menghapus sebuah elemen dari Set
  this.remove = function (element) {
    if (this.has(element)) {
      // Menggunakan indexOf untuk mencari indeks elemen dalam array collection
      let index = collection.indexOf(element);
      // Menghapus elemen dari array collection dengan menggunakan splice
      // splice digunakan untuk menghapus elemen pada indeks tertentu, dengan parameter (index, jumlah elemen yang dihapus)
      collection.splice(index, 1);
      // Mengembalikan array collection setelah penghapusan elemen
      return this.values();
    }
    // Jika elemen tidak ada dalam Set, maka tidak ada yang dihapus dan akan mengembalikan false
    return false;
  };

  // Metode ini akan mengembalikan ukuran (jumlah elemen) dari Set
  this.size = function () {
    // Menggunakan properti length untuk menghitung jumlah elemen dalam array collection
    return collection.length;
  };

  // Metode ini akan mengembalikan gabungan (union) dua Set
  this.union = function (otherSet) {
    // Membuat objek Set baru untuk menyimpan hasil gabungan
    let unionSet = new Set();
    // Mengambil semua elemen dari Set pertama (this.values()) dan menambahkannya ke dalam unionSet
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    // Mengambil semua elemen dari Set kedua (otherSet.values()) dan menambahkannya ke dalam unionSet
    let secondSet = otherSet.values();
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    // Mengembalikan Set yang berisi gabungan dari dua Set
    return unionSet;
  };

  // Metode ini akan mengembalikan irisan (intersection) dua Set dalam bentuk Set baru
  this.intersection = function (otherSet) {
    // Membuat objek Set baru untuk menyimpan hasil irisan
    let intersectionSet = new myset();
    // Mengambil semua elemen dari Set pertama (this.values())
    let firstSet = this.values();
    // Memeriksa setiap elemen dari Set pertama
    firstSet.forEach(function (e) {
      // Jika elemen juga ada dalam Set kedua (otherSet.has(e) mengembalikan true),
      // maka elemen tersebut dimasukkan ke dalam intersectionSet
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    // Mengembalikan Set yang berisi irisan dari dua Set
    return intersectionSet;
  };

  // Metode ini akan mengembalikan perbedaan (difference) dua Set dalam bentuk Set baru
  this.difference = function (otherSet) {
    // Membuat objek Set baru untuk menyimpan hasil perbedaan
    let differenceSet = new myset();
    // Mengambil semua elemen dari Set pertama (this.values())
    let firstSet = this.values();
    // Mengambil semua elemen dari Set kedua (otherSet.values())
    let secondSet = otherSet.values();
    // Memeriksa setiap elemen dari Set pertama
    firstSet.forEach(function (e) {
      // Jika elemen tidak ada dalam Set kedua (!otherSet.has(e) mengembalikan true),
      // maka elemen tersebut dimasukkan ke dalam differenceSet
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    // Mengembalikan Set yang berisi perbedaan dari dua Set
    return differenceSet;
  };

  // Metode ini akan menguji apakah Set ini merupakan subset dari Set lain
  this.subset = function (otherSet) {
    // Mengambil semua elemen dari Set pertama (this.values())
    let firstSet = this.values();
    // Menggunakan metode every untuk menguji setiap elemen dalam Set pertama
    // every akan mengembalikan true jika semua elemen memenuhi kondisi yang diberikan
    // Kondisi yang diberikan adalah otherSet.has(values), yaitu elemen harus ada dalam Set kedua
    // Jika ada elemen dalam Set pertama yang tidak ada dalam Set kedua, every akan mengembalikan false
    return firstSet.every(function (values) {
      return otherSet.has(values);
    });
  };
}

let setA = new myset();
let setB = new myset();
setA.add("a");
setA.add("b");
setA.add("f");
setA.add("g");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.info(setA.values());
console.info(setB.values());
console.info(setA.subset(setB));
console.info(setA.union(setB).values());
console.info(setA.difference(setB).values());
console.info(setA.difference(setB).remove("f"));
