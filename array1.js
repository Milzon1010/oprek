

// array itu adalah variable yang lebih sakti, bisa menampung banyak nilai

/**
 * tujuannya :
 * 1. mempermudah pengolahan nilai/value/data
 *      - penelusuran dan pencarian
 * 2. manajemen memory
 * 
 * */ 

/**
 * ARRAY :
 * 1. variable jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama.
 * 2. kumpulan pasanan key dan nilai /key vaule pair
 * 3. key adalah index pada array dengan tipe integer yg dimulai dari 0
 * 4. array pada javascript tipe nya object
 * 5. array pada javascript memiliki fungsi / methode.length untuk menghitung
 *    jumah elemen didalamnya.
 * 6. elemen pada array boleh memiliki tipe data yang berbeda
 * 
 * */ 

var binatang = [];
binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];

// console.log(typeof(binatang));
    // fungsi didalam object disebut namanya "methode"
// console.log(binatang.length);
    // artinya ada berapa elemen didalam array binatang
    // index terakhirnya 5
    // output : 6

var hari = ['senin', 'selasa', 'rabu', 'kamis'];
var mhs = ['foxxen', 'milzon', 'thomas'];
var angka = [10,20,3000];
var myArr = ['teks', 2, false];
var myFunc = function (){
    console.log('hello world');
};
var myArr2 = ['teks', 2, true, myFunc];

// array multidimensi

var myArr3 = ['teks', 2, true, myFunc, [4, 5, 6]];
// console.log(myArr3[4][1]);
// output : 5

/**
 * Memanipulasi ARRAY :
 * 1. menambah elemen pada ARRAY
 * 2. menghapus elemen pada ARRAY
 * */ 

// menambah array :
var arr = ["a", 1, true];
// console.log(arr);
// tampilnya jadi sebagai array
// jika hendak menampilkan "angka 1" diatas maka :
// console.log(arr[1]);

// tampilan lain yang sering digunakan :
var arr4 = [];
arr4 [0] = "Foxxen";
arr4 [1] = 'Milzon';
arr4 [2] = 'naksu'
// index harus ber urut, jika terlewat element tetap tp jadi undefined

// console.log(arr4);

// cara menghapus array
var arr5 = ['Foxxen', 'Milzon', 'naksu'];
    arr5 [1] = undefined;
// console.log(arr5);

// menampilkan isi array :
var arr7 = ['Foxxen', 'felis', 'naksu'];
for (var i = 0; i < 3; i++){
    // console.log(arr7[0]);
    console.log('pemain ke- ' + (i+1) + ' :', arr7[i]);
}