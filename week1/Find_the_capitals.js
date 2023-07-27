// Fungsi `capitals` menerima sebuah string `word` sebagai argumen
var capitals = function (word) {
  // Buatlah sebuah array kosong `result` untuk menyimpan indeks-indeks huruf kapital
  let result = [];

  // Perulangan `for` digunakan untuk iterasi melalui setiap karakter di dalam `word`
  for (let i = 0; i < word.length; i++) {
    // Pengecekan apakah karakter pada indeks `i` merupakan huruf kapital
    if (word[i] === word[i].toUpperCase()) {
      // Jika karakter pada indeks `i` merupakan huruf kapital, tambahkan indeks `i` ke dalam array `result`
      result.push(i);
    }
  }

  // Cetak array `result` yang berisi indeks-indeks huruf kapital
  return console.info(result);
};

// Panggil fungsi `capitals` dengan argumen "DilLaH"
let test = capitals("DilLaH");
