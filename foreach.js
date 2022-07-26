// Perulangan yang paling aman untuk mengolah data array
// karena proses indexing secara otomatis tanpa perlu menentukan key didalam iterasi

var arr = ["Api", "Air", "Tanah", "Udara"];

// arr.forEach(function (nilai) {
//   console.log(nilai);

arr.forEach(function (elemen, kunci) {
    console.log("Element bumi pada posisi " + kunci + " adalah " + elemen);
  });
