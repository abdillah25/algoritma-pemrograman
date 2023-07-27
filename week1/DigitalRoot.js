// Fungsi utama untuk menghitung digital root dari suatu angka
function digitalRoot(n) {
  // Menyimpan angka input pada variabel "number"
  let number = n;

  // Menghitung digital root dengan memanggil fungsi "calculateDigitalRoot"
  let root = calculateDigitalRoot(number);

  // Mengembalikan hasil digital root
  return root;
}

// Fungsi untuk menghitung digital root dari suatu angka
function calculateDigitalRoot(num) {
  // Mengubah angka menjadi array angka (misal: 123 menjadi [1, 2, 3])
  let array = num.toString().split("").map(Number);

  // Menghitung total dari elemen-elemen dalam array
  let root = array.reduce((acc, curr) => acc + curr, 0);

  // Jika digital root lebih besar dari 9, kita rekursif panggil fungsi calculateDigitalRoot untuk menghitung digital root sekali lagi hingga mendapatkan digital root tunggal.
  if (root > 9) {
    return calculateDigitalRoot(root);
  } else {
    // Jika digital root sudah tunggal (1 digit), maka kita kembalikan digital root tersebut sebagai hasil
    return root;
  }
}

console.info(digitalRoot(9999999999999999999));
