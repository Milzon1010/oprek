/**
 * IF digunakan untuk menentukan kondisi pertama, dan akan di eksekusi jika kondisinya benar
 *
 * ELSE IF digunakan untuk menentukan kondisi kedua,
 * apabila setelah pengujian pada kondisi yang pertama salah,
 * dan akan di eksekusi jika kondisinya benar.
 *
 * ELSE digunakan apabila semua kondisi sebelumnya salah
 * maka ELSE adalah opsional dari kondisi-kondisi lainnya dan akan di eksekusi.
 *
 * */

// if (kondisi) {
//   // statement
// }

// yang disebut “kondisi” pada dasarnya adalah operator perbandingan
// dan atau operator logika yang digunakan,
// tentunya sesuai denga kebutuhan masing-masing program.

var buah = "apel";

if (buah == "jeruk") {
  console.log("Ini bukan buah apel");
} else if (buah == "apel") {
  console.log("Ini adalah apel");
} else {
  console.log("Ini bukan buah");
}

