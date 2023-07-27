class myContact {
  constructor() {
    this.panjang = 0;
    this.nama = [];
    this.nomor_telepon = [];
    this.email = [];
  }
  // Metode ini akan memeriksa keberadaan suatu elemen dan mengembalikan true atau false
  has(nama) {
    return this.nama.indexOf(nama) !== -1;
  }
  // method untuk mengembalikan value nama
  value() {
    return this.nama;
  }

  //   method menambahkan kontak
  addContact(nama, noTlp, email) {
    try {
      if (this.has(nama)) {
        throw new Error(`"${nama}" sudah ada di dalam kontak`);
      }
      if (this.panjang == 5) {
        throw new Error("daftar kontak telah melampaui batas");
      }

      this.nama.push(nama);
      this.nomor_telepon.push(noTlp);
      this.email.push(email);
      this.panjang++;
      return true;
    } catch (error) {
      console.error(error.message); // Atau lakukan penanganan kesalahan lain sesuai kebutuhan
      return undefined;
    }
  }

  // method menghaspus kontak melalui nama
  deleteContact(nama) {
    const getIndex = this.nama.indexOf(nama);

    if (getIndex !== -1) {
      this.nama.splice(getIndex, 1);
      this.nomor_telepon.splice(getIndex, 1);
      this.email.splice(getIndex, 1);
      this.panjang--;
    } else {
      throw new Error(`"${nama}" Kontak tidak ditemukan.`);
    }

    if (this.panjang === 0) {
      throw new Error("Harus ada minimal 1 kontak.");
    }
  }

  // method mengedit kontak pada index tertantu
  editContact(nama, namaBaru, tlpBaru, emailBaru) {
    const getIndex = this.nama.indexOf(nama);

    if (getIndex !== -1) {
      this.nama[getIndex] = namaBaru;
      this.nomor_telepon[getIndex] = tlpBaru;
      this.email[getIndex] = emailBaru;
      return console.info(`kontak atas nama "${nama}" berhasil di ubah menjadi "${namaBaru}"`);
    } else {
      throw new Error(`"${nama}" tidak ada di daftar kontak`);
    }
  }
}

let test = new myContact();
test.addContact("dillah", 85695695620, "dillah@gmail.com");
test.addContact("wibu", 8567898767, "asu@gmail.com");
test.addContact("wibu1", 8567898767, "asu@gmail.com");
test.addContact("nahida", 8567898767, "asu@gmail.com");
test.addContact("eren", 8567898767, "asu@gmail.com");
console.table(test);
