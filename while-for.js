
// untuk penulisan menggunakan while

// var nilaiAwal = 1;
while (nilaiAwal <= 5){
    // console.log('Hello world');
    nilaiAwal++;
}

// untuk penulisan block syntax "for" berikut ini :

for (var nilaiAwal = 1; nilaiAwal < 5; nilaiAwal++){
    // console.log('Hello World ' + nilaiAwal + 'x');
}

var jmlAngkot = 10;
var angkotBeroperasi = 5;
var noAngkot = 1;

// for (var jmlAngkat = 1; jmlAngkot <= 10; jmlAngkot++){
//     if (angkotBeroperasi == 6){
//         console.log('Angkot yang beroperasi ' +[angkotBeroperasi] + 'mobil')
//     } 
//     for (var jmlAngkot = 1; jmlAngkot <= 10; jmlAngkot++){
//         if()
//     }
//     }
// }
while(noAngkot <= angkotBeroperasi){
    console.log('Angkot no. ' + noAngkot + 'beroperasi dengan baik');

    noAngkot++;
}
// for (noAngkot = 7; noAngkot <= jmlAngkot; noAngkot++){
    // hanya mengganti varibale angkot beroperasi saja
    for (noAngkot = angkotBeroperasi +1; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot no. ' + noAngkot + 'sedang tidak beroperasi');
}
