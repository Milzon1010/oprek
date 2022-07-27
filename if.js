// var angka = 1;
if (angka === 1) {
  // console.log('anda memasukan angka 1');
}
// didalam kurung kurawal kondisi benar (true)
// diluar kurung kurawal jika kondisi salah (false)

// var angka = 2;
if (angka < 5) {
  // console.log(angka + ' lebih kecil dari 5');
}

var angka = 8;
// atau gunakan
// var angka = prompt('masukan angka'); pada html
if (angka % 2 == 0) {
  // console.log(angka + ' adalah bilangan genap');
}
// if (angka % 2 == 1){
//     console.log(angka + ' adalah bilangan ganjil');
// }
// namun diatas tidak biasa digunakan, maka "if" kedua diganti "else"
else {
  // console.log(angka + ' adalah bilangan ganjil');
}
// kondisi else adalh false dari kondisi (angka % 2 == 0)

var jmlAngkot = 10;
var angkotBeroperasi = 6;

// while(noAngkot <= angkotBeroperasi){
//     console.log('Angkot no. ' + noAngkot + 'beroperasi dengan baik');

//     noAngkot++;
// }
// for (noAngkot = angkotBeroperasi +1; noAngkot <= jmlAngkot; noAngkot++){
//     console.log('Angkot no. ' + noAngkot + 'sedang tidak beroperasi');
// }

// kerjakan kasus diatas tapi menggunakan 1 buah "for" didalamnya ada kondisi

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
//     if(noAngkot <= 6){
//         // console.log('Angkot no. ' + noAngkot + 'beroparasi dengan baik');
//     } else {
//         // console.log('Angkot no. ' + noAngkot + 'sedang tidak beroperasi');
//     }
// }
// jadi syntax penkondisian adalah seperti ini :
/**
 * if (kondisi){
 *      aksi 1
 *   } else {
 *      aksi 2
 * }
 *
 * */

var angka = 12;
if (angka % 2 == 0) {
  // console.log(angka + ' adalah bilangan genap');
} else if (angka % 2 == 1) {
  // console.log(angka + ' adalah bilangan ganjil');
} else {
  // console.log('yang ada masukan bukan angka');
}

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    // console.log('Angkot no. ' + noAngkot + 'beroparasi dengan baik');
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    // console.log('Angkot no. ' + noAngkot + 'sedang lembur');
  } else {
    // console.log('Angkot no. ' + noAngkot + 'sedang tidak beroperasi');
  }
}

var angka = prompt('masukan angka :');

if (angka === 1) {
  alert("anda memasukan angka 1");
} else if (angka === 2) {
  alert("anda memasukan angka 2");
} else if (angka === 3) {
  alert("anda memasukan angka 3");
} else {
    alert('angka yang anda masukan salah!');
}
