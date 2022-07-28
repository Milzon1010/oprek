
// for(var i = 0; i < 5; i++){
//     console.log('*');
// }
// diaras ini tertulis tapi kebawah, bagaiman caranya ketik kesamping?

// var s = '';
// for(var i = 0; i < 10; i++){
//     s += '*';
// }
// tapi console.log diluar block "for"
// console.log(s);

// var s = '';
// for(var i = 0; i < 5; i++){
//     s += '*';
//     s += '\n';
//     // "\n" adalah untuk membuat baris baru
//     // maka block kode ini akan print out kebawah seperti block pertama diatas.
// }
// console.log(s);

/**
 * kemudian jika kita ingain membuat "*" disetiap baris ada 5 buah
 * artinya akan diketikan seperti ini 
 * *****
 * *****
 * *****
 * maka jangan dibuah string '*', tapi kita lakukan pengulanan lagi untuk '*'
*/
// maka akan seperti ini :

// var s = '';
// for(var i = 0; i < 3; i++){
//     for(var j = 0; j < 5; j++){
//         s += '*';
//     }
//     s += '\n';
//     // jika code ini diletakan dalam block scope for yang "j" makan akan print 2 kali kebawah
// }
// console.log(s);

/**
 * sekarang hendak menampilkan seperti ini :
 * *
 * **
 * ***
 * ****
 * *****
 * dengan perulangan juga
 * 
*/
// var s = '';
// for(var i = 0; i < 5; i++){
//     for(var j = 0; j <= i; j++){
//         // jika lebih kecil dari 5, angka 5 diganti "i" (nomer baris) 
//         // maka bisa terprint seperti diatas
//         // tetapi baris diatas kosong
//         // maka ditambahkan operator <= i
//         s += '*';
//     }
//     s += '\n';
//     // console.log(s);
//     // jika begini akan terprint 3 kali segita 5 bintang.
//     // jadi for yang pertama akan dilakukan aksi ke for ke 2
//     // kemudian ditambahkan baris
// }
// console.log(s);

/**
 * bagaimana jika bintangnya dibalik jadi seperti ini :
 * 
 * *****
 * ****
 * ***
 * **
 * *
 * 
*/

// maka coding syntax nya adalah

// var s = '';
// for(var i = 5; i > 0; i--){
//     // hasil sudah betul berkuran kebawah mengunakan (var i = 5; i > 0; i--)
//     // tapi paling bawah tidak 1 *
//     // baris pertama jua 6 bukan 5
//     for(var j = 0 ; j < i; j++){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// var num = 5;
// var temp = '';
// var chara = "A"

// for(var i = 0; i < num; i++){
//     for (var j = 0; j <= i; j++){
//         temp += chara
//     }
//     console.log(temp)
//     temp = ""
// }

// var num = 5;
// var temp = ''

// for(var i = 0; i < num; i++){
//     for(var j = 0; j <= i; j++){
//         temp +=(j + 1)
//     }
//     console.log(temp)
//     temp = ""
// }

// var i = 0
// while (i<6){
//     console.log("Hello world");
//     i++;
// }

// for
// for (var i = 1; i <= 10; i++){
//     console.log(i)
// }

// // while
// var i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// var num = 5;
// for (var i = 1 ; i <= num; i++){
//     if(i % 2 === 0){
//         console.log(i + " adalah genap")
//     } else {
//         console.log(i + " adalah ganjil")
//     }
// }


/**
 * study case 
 *
 * ubah huruf menjadi besar dan kecil
 *
 * var str = sarapan
 *
 * Result :
 * SaRaPaN
 *
 *
 * 1. temukan looping dari kata sarapan 
 * 2. temukan ganjil dan genap
 * 3. buat penampang temp untuk print out ke kanan bukan kebawah
 * 
 * */

// var str = "sarapan"
// var temp = ""

// for (var i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     temp = temp + str[i].toUpperCase();
//     // console.log(str[i].toUpperCase())
//   } else {
//     temp = temp + str[i];
//     // console.log(str[i])
//   }
// }
// console.log(temp);

/**
 * Study Case 
 * 
 * Buat kotak persegi
 * 
 * var num = 3
 * 
 * Result :
 * 
 * ###
 * ###
 * ###
 * */ 

// var num = 5;
// var temp = "";
// for (var i = 0; i < num; i++){
//     for (var j = 0; j< num; j++){
//         temp += "#"
//     }
//     // temp += '\n';
//     console.log(temp)
//     temp = ""
// }
// // console.log(temp)