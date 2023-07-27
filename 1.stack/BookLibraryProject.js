function Library() {
  this.JumlahBuku = 0;
  this.NamaBuku = {};
}

// Metode atau fungsi untuk menambahkan buku ke dalam library
Library.prototype.push = function (value) {
  this.NamaBuku[this.JumlahBuku] = value;
  this.JumlahBuku++;
};

// Fungsi atau method untuk menghapus buku dari belakang dan mengembalikan nama buku
Library.prototype.pop = function () {
  if (this.JumlahBuku === 0) {
    return `${undefined} buku kosong`;
  }

  this.JumlahBuku--;
  let hasilBukuYangDiAmbil = this.NamaBuku[this.JumlahBuku];
  delete this.NamaBuku[this.JumlahBuku];
  return `Buku Yang Kamu Ambil Adalah Buku "${hasilBukuYangDiAmbil}"`;
};

// Lebar library Rak Buku
Library.prototype.sizeLibrary = function () {
  return `Panjang Rak Buku Saat Ini Adalah => ${this.JumlahBuku}`;
};

// Fungsi mencari buku
Library.prototype.searchLibraryBook = function (namaBukuYangDiCari) {
  for (let i = 0; i < this.JumlahBuku; i++) {
    if (this.NamaBuku[i] === namaBukuYangDiCari) {
      return `"${namaBukuYangDiCari}" Buku Tersebut Tersedia`;
    }
  }
  return `"${namaBukuYangDiCari}" Buku Tersebut Tidak Tersedia`;
};

let testing = new Library();
testing.push("kancil dan buaya");
testing.push("anatomi manusia");
console.table(testing);
// console.info(testing.pop());
// testing.push("anatomi hewan");
// console.table(testing);
// console.table(testing.sizeLibrary());
// console.info(testing.searchLibraryBook("pko"));
