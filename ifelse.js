// Menggunakan prompt() untuk mendapatkan input usia dari pengguna
var usia = parseInt(prompt("Masukkan usia pemilih:"));

// Menggunakan if, else if, dan else untuk menentukan kategori usia
if (usia < 0) {
  console.log("Usia tidak valid.");
} else if (usia < 18) {
  console.log("Anda d bawah umur.");
} else if (usia < 60) {
  console.log("Anda sudah masuk usia pemilih.");
} 

