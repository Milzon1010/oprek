// const message = 'hello'
// // console.log(message)

// if (true){
//     const message = 'hello'
// }
// console.log(message);

if (true){
    // 'if' block message
    const message = 'hello';
    // console.log(message);
}
// console.log(message); //error message
/**
 * Console.log(message) pertama mencatat variabel dengan benar 
 * karena pesan diakses dari ruang lingkup yang ditentukan.
 * 
 * Tetapi console.log(message) kedua memunculkan kesalahan 
 * referensi karena variabel pesan diakses di luar cakupannya: variabel tidak ada di sini.
 * 
 * */ 

// Blok kode pernyataan if, for, while juga membuat scope.

for (const color of ['green', 'red', 'blue']) {
    // "for" block scope
    const message = 'Hi';
    // console.log(color);   // 'green', 'red', 'blue'
    // console.log(message); // 'Hi', 'Hi', 'Hi'
  }
//   console.log(color);   // throws ReferenceError
//   console.log(message); // throws ReferenceError

// color and message variables exist within the scope of while code block.
// Same way the code block of while statement creates a scope for its variables:

// while (/* condition */){
//     // 'while' block scope
//     const message = 'hi';
//     console.log(message);
// }
// console.log(message); // => throws ReferenceError

// message didefinisikan di dalam while() body, 
// akibatnya message hanya dapat diakses di dalam while() body.

{
    // block scope
    const message = 'Hello';
    // console.log(message); // 'Hello'
  }
//   console.log(message); // throws ReferenceError

// kalau "var" itu tidak masalah di luar body if atau mana pun, 
// beda juga dengan invoked atau deklarasi

if (true) {
    // "if" block scope
    var count = 0;
    // console.log(count); // 0
  }
//   sama juga kalau ditarok dibawah juga gak error
// tapi secara penulisan ini bisa dikatakan tidak rapih
//   console.log(count); // 0
  
// Fungsi dalam JavaScript mendefinisikan ruang lingkup untuk 
// variabel yang dideklarasikan menggunakan var, let dan const.
// function run() {
//     // "run" function scope
//     var message = 'Run, Forrest, Run!';
//     // console.log(message); // 'Run, Forrest, Run!'
//   }
// //   kalau tanpa di invoked run() maka console.log diatas kosong tdk ada output
//   run();
//   kalau console.log diluar dari block scope maka error yang ada
//   console.log(message); // throws ReferenceError

function run() {
    // "run" function scope
    const two = 2;
    let count = 0;
    function run2() {}
    // console.log(two);   // 2
    // console.log(count); // 0
    // console.log(run2);  // function
  }
  run();
//   console.log(two);   // throws ReferenceError
//   console.log(count); // throws ReferenceError
//   console.log(run2);  // throws ReferenceError

/**
 * Latihan 1
 * 
 * Angka Prima
 * 
 * Angka prima adalah angka yang memiliki 2 faktor : 1 dan bilangan itu sendiri. Print N bilangan angka
prima pertama

function printNumbers(num){
 // code he
}
// Test case
printPrimes(5)
// 2 3 5 7 11 13 17 19 23 29
printPrimes(5)
// 2 3 5 7 11

 * */



// let findPrimes = (target) => {
//     if (target && Number.isInteger(target) && target > 2){
//       let record = [];
//       // array untuk check benar salah
//       let primes = [];
//       // Array ini akan digunakan untuk menyimpan
//       // dan akhirnya mengembalikan bilangan prima y
//       // ang dikonfirmasi.
//       let max = Math.sqrt(target);
//       // Kita dapat memanfaatkan fungsi akar kuadrat bawaan Javascript
//       // (Math.sqrt()) untuk mendapatkan akar kuadrat dari
//       // nomor target kita. Kami akan menggunakan ini ketika
//       // kami sampai ke bagian di mana kami mulai menyaring
//       // kelipatan dari setiap bilangan prima.
//       for (let number = 0; number < target; number++) {
//         record.push(1);
//       }
//       for (let prime = 2; prime <= max; prime++) {
//         if (record[prime]) {
//           console.log(`for prime: ${prime}`);
//           for (let multiple = prime; multiple < target; multiple += prime) {
//             console.log(`currently making the multiple ${multiple} to false`);
//             record[multiple] = 0;
//           }
//         }
//       }
//       for (let sievedNumber = 2; sievedNumber < target; sievedNumber++) {
//         if (record[sievedNumber]) {
//           primes.push(sievedNumber);
//         }
//         return primes;
//       }
  
//       return "masukan angka lebih dari 2";
//     }
//   };
  
//   findPrimes(8);

