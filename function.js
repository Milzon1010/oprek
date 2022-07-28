/**
 * Sering kali, kita harus melakukan tindakan yang sama pada skrip di banyak tempat
 *
 * Sebagai contoh, kita mengharuskan untuk menampilkan pesan yang terlihat indah
 * ketika pengunjung melakukan log in, log out dan mungkin di tempat lain.
 *
 * Fungsi adalah program utama yang membentuk “struktur bangunan”.
 * Mereka memungkinkan kode untuk dipanggil sebanyak mungkin
 * tanpa harus mengetik berulang-ulang.
 *
 * kita telah melihat contoh dari fungsi built-in, seperti :
 *
 * alert(message), prompt(message, default) dan confirm(question).
 *
 *
 *
 * */

// Deklarasi Fungsi

// Untuk membuat fungsi, kita dapat menggunakan deklarasi fungsi.
// Itu terlihat seperti ini:

// function showMessage() {
//     alert( 'Hello everyone!' );
//   }
// Katakunci fungsi ditulis duluan, lalu nama fungsinya,
// kemudian daftar semua parameter antara tanda kurung ()
// (pada contoh di atas, tanda kurung kosong)
// dan bagian terakhir adalah fungsi kode,
// yang juga disebut sebagai “badan fungsi”, antara kurung kurawal {}.

// function name(parameter1, parameter2, ... parameterN) {
//     ...body...
//   }
//   Fungsi baru kita dapat disebut dengan nama:
// showMessage();

// function showMessage() {
//     alert('Hello everyone!');
//   }

//   showMessage();
//   showMessage();
// Pemanggilan fungsi showMessage() mengeksekusi fungsi kode.
// Disini kita akan melihat pesan keluaran sebanyak dua kali.
// Contoh ini secara jelas memaparkan satu fungsi utama dari penggunaan fungsi:
// untuk menghindari duplikasi kode.
// Jika kita ingin mengubah pesan atau bagaimana pesan itu ingin ditampilkan,
// itu cukup untuk mengubah kode di satu tempat: yaitu fungsi yang menampilkannya.

// Variabel yang diumumkan dalam fungsi hanya akan terlihat di dalam fungsi tersebut.

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // variabel lokal
  // console.log(message);
  // alert(message);
}

showMessage(); // Halo, saya adalah  JavaScript!

//   alert( message ); // <-- Error! Variabel terlihat secara lokal menurut fungsi

// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName ); // John sebelum pemanggilan fungsi

// showMessage();

// alert( userName ); // Bob, nilai dimodifikasi oleh fungsi

function showMessage(from, text) {
  // parameters: from, text
  // console.log(from + ': ' + text);
}

showMessage("Ann", "Hello!"); // Ann: Hallo! (*)
showMessage("Ann", "What's up?"); // Ann: Ada apa? (**)

//   Mengembalikan nilai

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
//   console.log( result ); // 3

// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }

//   let age = prompt('How old are you?', 18);

//   if ( checkAge(age) ) {
//     console.log( 'Access granted' );
//   } else {
//     console.log( 'Access denied' );
//   }

// showMessage(..)     // menampilkan pesan
// getAge(..)          // mengembalikan nilai umur (bagaimanapun mengembalikkan umur)
// calcSum(..)         // menghitung penjumlahan dan mengembalikan hasilnya
// createForm(..)      // membuat formulir (dan biasanya mengembalikan nilai)
// checkPermission(..) // pengecekkan terhadap ijin, mengembalikan true/false

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {

//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }

//       alert( i ); // bilangan prima
//     }
//   }

//   function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;

//       alert(i);  // bilangan prima
//     }
//   }

// let angka = [1, 46, 75, 12, 89, 54, 101];

// let ganjil = [];

// for var angka(x) {
//     if(angka[x]%2==1){
//         ganjil.push(angka[x])
//     }
// }

// console.log(ganjil);

// nah disini kamu bisa gunakan for loop yang disoal sebelumnya dengan kondisi
// nilai ganjil agar looping yang terjadi sesuai dengan isi variabel angka / array.
// jika belum bisa bisa tanyakan lagi. Makasih

//   *** FUNCTION

function namaFungsi(parameter1, parameter2) {
  // Kode yang ingin dieksekusi
}
/**
 * Penulisan function di javascript
 * Function bisa memiliki parameter bisa juga tidak memiliki parameter,
 * arameter ini digunakan untuk menentukan proses yang ingin dijalankan sesuai dengan kebutuhan
 * */

function hitung(p1, p2) {
  return p1 + p2;
}

// console.log(hitung(7,5));
// 7,5 bisa dibuah ubah tanpa membuat variable terlebih dahulu boleh

// Selain penulisan function dengan cara diatas
// bisa menggunakan anonymous function dengan cara dideklarasikan terlebih dahulu dengan variabel.

var hitung = function (p1, p2) {
  return p1 + p2;
};
// console.log(hitung(7,5));

// Varibel namaBuah tidak bisa diakses disini

function buah() {
  var namaBuah = "Apel";
  // Varibel namaBuah bisa diakses disini
}

// Varibel namaBuah tidak bisa diakses disini

//  FUNCTION DECLARATIONS

function jumlahDuaBilangan(a, b) {
  var total;
  total = a + b;

  return total;
}

//  FUNCTION EXPRESSIONS

// var jumlahDuaBilangan = function (a, b){
//   var total;
//   total = a + b:

//   return total;
// }

// sebuah fucntion boleh ada parameter atau tidak
// tapi kurung kurawal tetap ada
// return juga tidak mesti ada

// ada blok kode yang dibuat untuk melakukan tugas spesific
// dapat dipanggil berulang kali
// memudahkan penelusuran

/**
 * case1
 * menjumlahkan 2 buah kubus
 * 1.ketahui sisi masing2 kubus  kubus a 8 ; kubus b 3
 * 2.hitung volume masing2 kubus kubus a 8**3 = 512 ; kubus b 3**3 = 27
 * 3.jumlahkan hasilnya 512 + 27
 * 4.kembalikan nilai jawabannya 539
 *
 * */

// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;
// console.log(total);

function jumlahVolumeDuaKubus(a, b) {
  var total;
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;

  return total;
}
// console.log(jumlahVolumeDuaKubus(8,3));
// console.log(jumlahVolumeDuaKubus(15,27));

/**
 * Parameter :
 * variable yang ditulis didalam kurung pada saat function dibuat, 
 * digunakan untuk menampung nilai yang dikirimkan saat function dipanggil
 * 
 * Arguments :
 * nilai yang dikirimkan ke parameter saat function dipanggil
 * 
*/
function tambah (a, b){
  return a + b;
  // a & b adalah parameter
}
// var hasil = tambah (2, 3);
  // 5 & 10 aalah arguments
// console.log(tambah(2, 3)); 
  // atau
// console.log(hasil);
  // atau ditulis sepert ini :
var a = 4;
var b = 8;
var hasil = tambah (a, b);
// a & b berbeda dari a & b parameter diatas
console.log(hasil);