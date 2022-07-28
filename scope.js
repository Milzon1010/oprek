/**
 * Scope :
 * bagaimana sebuah varibale dapat diakses dalam program
 * 
 * block scope vs function scope
 * 
 * 
 * */ 

// var i = 2;
// // artinya global scope atau windows scope
// // yang bisa digunakan dimanapun didalam program code kita
// if(i % 2 == 0){
//     var genap = true;
// }
// if(genap){
//     console.log('genap!');
// }
// maka hasilnya tampil, karena javascript tidak menganut "block scope"
// javascript menganut konsep function scope



// artinya global scope atau windows scope
// var a = 1;

// function tes (){
//     var b = 2;
//     // console.log(b);
//     console.log(a);
//     // berarti didalam function kita bisa akses variable global var a = 1;
// }
// tes ();
// console.log(b); 
// b is not defined
// karena "b" diluar scope function.
// tapi bila console.log(b) didalam scope function makan out put tampil "2"

// name conflict
// jika nama variable sama tapi scope berbeda
// jika ada var = 1; di global variable
// di dalam fucntion, ada tidak variable lokal?, jika ada di akan action variable
// dialam function, jika tidak ada makan mengacu pada variable global

// var a = 1;

// function tes (){
//     a = 2;
// }
// tes ();
// console.log(a); 
// out put : varible didalam lokal yg ditampilkan
// jika variable global var a = 1; diatas tidak ditulis...
// maka javascript membuat a = 2; menjadi varibale global
// penulisan diaatas benar, tapi lebih rapih seperti ini :

// function tes (){
//     // var a;
//     a = 2;
// }
// tes ();
// console.log(a); 

// atau gunakan "use strict";

// kondisi lain lagi dibawah ini :
var a = 1;
function tes(a){
    console.log(a);
}
tes (2);
console.log(a);
// hasil output nya adalah "2"
// karena function tes ada argument "a", sementara parameter dibawah 
// yaitu tes ada parameter 2,
// maka variable global tidak terpakai
// console.log yg paling bawah mengacu kepada varibale global


