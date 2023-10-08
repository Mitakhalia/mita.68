// Menggunakan prompt() untuk mendapatkan input nomor hari dari pengguna
var nomorHari = parseInt(prompt("Masukkan nomor hari (1-7):"));

// Menggunakan switch case untuk menentukan hari berdasarkan nomor
switch (nomorHari) {
  case 1:
    console.log("Hari ini adalah Minggu.");
    break;
  case 2:
    console.log("Hari ini adalah Senin.");
    break;
  case 3:
    console.log("Hari ini adalah Selasa.");
    break;
  case 4:
    console.log("Hari ini adalah Rabu.");
    break;
  case 5:
    console.log("Hari ini adalah Kamis.");
    break;
  case 6:
    console.log("Hari ini adalah Jumat.");
    break;
  case 7:
    console.log("Hari ini adalah Sabtu.");
    break;
  default:
    console.log("Nomor hari tidak valid.");
}
