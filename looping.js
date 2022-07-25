// for (let i=0; i < array.length; i++){
//     let element = array [i];
// }
/**
 * Kode ini akan menjalankan loop selama kondisinya (i kurang dari panjang array) benar. 
 * Di dalam for loop, Anda dapat mengakses setiap elemen array menggunakan indeks “i”.
 *
 * */ 

// The forEach method, on the other hand, looks like this:

// array.forEach(element) => {

// }

/**
 * Kode ini akan mengulangi setiap elemen array dan melakukan operasi yang diberikan. 
 * Sintaks forEach lebih pendek dan lebih mudah dibaca, 
 * itulah sebabnya beberapa pengembang lebih menyukainya.
 * 
 * */ 

// Loop lebih cepat proses dari forEach() sebab tidak ada calling function pada setiap element
// untuk coding yang komplek lebih enak gunakan looping lebih cepat performancenya.

// How Javascript Call Stack and Event Loop Works?

// const a = 1;
// let b = 2;
// b = 3;
// const c = a + b;

// // bagaimana kalau function?

// function mult(a,b){
//     return a * b;
// }
// function multTwo(a, b){
//     return 2 * mult(a, b);
// }

// multTwo(2,3);

/**
 * Di sini, kita memanggil multTwo, 
 * yang memanggil mult dari a dan b dan mengalikannya dengan 2. 
 * Perhatikan sebuah pola di sini? Ini memanggil satu demi satu
 * tetapi panggilan terakhir di tumpukan akan selalu dieksekusi terlebih dahulu.
 * 
 * multTwo dipanggil, yang memicu panggilan fungsi mult 2 kali 3 bernilai 6,
 *  muncul di bagian atas tumpukan
 * 
 * Karena mult(2*3) berubah menjadi 6, 2 * 6 berubah menjadi 12, 
 *  memunculkan elemen lain di tumpukan
 * 
 * Akhirnya, multTwo(2,3) kemudian dievaluasi.
 * 
 * Now one important question comes up:
 * 
 * Jika semuanya berjalan baris demi baris, 
 * mengapa kita masih mendengar tentang konsep-konsep seperti janji, panggilan asinkron, dll?
 * 
 * Itu karena ada cara untuk melakukan operasi asinkron dengan javascript.
 * 
 * Bayangkan pergi ke halaman Facebook Anda dan Anda menggulir ke atas dan ke bawah
 * Dalam beberapa detik, 
 * Anda akan melihat posting baru muncul karena ada lebih banyak posting terbaru yang tersedia.
 * 
 * 
 * */ 

//  const a = 1;
//  const b = 2;
//  const c = a + b;
 
//  function doSomething(){
//    console.log("hi");
//  }
 
//  setTimeout(() => {
//    doSomething();
//  }, 10);
 
//  console.log('c: ' + c);

//  Let’s say we don’t know how the event cycle in javascript works. 
// We probably expect all of the code to run in order

console.time('setTimeout');
setTimeout(() => {
//   console.log('Timer went off');
//   console.timeEnd('setTimeout');
}, 100);
 
setTimeout(() => {
  for(let i = 0; i < 10000000; ++i);
}, 95);
// Dalam contoh di atas kita memanggil setTimeout dua kali. 
// Pertama kali, kami mengukur waktu antara memanggil fungsi setTimeout dan panggilan balik
// Ternyata lebih dari 100ms.
// Ini karena ketika kita memanggil fungsi setTimeout
// itu mengatur timer setelah itu mendorong panggilan balik ke antrian fase timer
// Masalahnya di sini adalah ketika itu terjadi, ada fungsi lain yang berjalan,
// dan oleh karena itu fungsi berikutnya dalam antrian perlu menunggu.

// Setting INTERVAL

// let i = 0;
 
const id = setInterval(() => {
  console.log(++i);
  if(i > 10) clearInterval(id);
}, 50);

// etInterval bekerja dengan cara yang sama, 
// tetapi menyebabkan fungsi dijalankan berulang kali dengan penundaan waktu tertentu 
// di antara setiap panggilan.
// Ini mengembalikan id yang dapat kita gunakan untuk menghentikan eksekusi.

let i = 0;
 
function increment() {
  console.log(++i);
  if(i <= 10) {
    setTimeout(increment, 50);
  }
}
 
increment();
// setInterval menunda fungsi secara teratur terlepas dari status panggilan fungsi sebelumnya
// jika setInterval diatur waktunya untuk mengirimkan setiap 1000 md
// dan eksekusi membutuhkan waktu 500 md,
// Interval aktual antara akhir panggilan dan pemanggilan berikutnya adalah 500ms.
// SetTimeout rekursif, di sisi lain, menjadwalkan panggilan fungsi baru 
// ketika yang sebelumnya berakhir

// Semakin lama waktu yang dibutuhkan untuk menyelesaikan fungsi sebelumnya, 
// semakin besar interval antara kedua fungsi tersebut dimulai.

// Pending callbacks, idle, and prepare
/**
 * 
 * 
 * 
 * 
 * 
 * */ 


