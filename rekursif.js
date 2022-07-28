
// jika funciton biasa structure nya adalah input >funtion > output
//  rekursif adalah input >> function >>call function s/d berhenti >> 
// baru menghasilkan output
// contoh :

// function tes(){
//     return tes();
// }
// tes ();
// hasil kode diats adalah
//  hasilnya akan terus berputar putar seperti looping yg tidk berheneti

// function tampilAngka(n){
//     // console.log(n);
//     return tampilAngka(n-1);
// }
// tampilAngka(10);
// diatas adalah contoh rekursif, dia tidak berhenti berhenti print out

/**
 * BASE CASE
 * kondisi akhir rekursif yang menghasilkan sebuah nilai
 * */ 

//  function cetakAngka(n){
//     if (n === 0){
//         return;
//     }
//     console.log(n);
//     cetakAngka(n-1);
// }
// cetakAngka(10);
//   if (n === 0){
//     return;
// }
// >>> disebut BASE CASE

//  kalau di looping seperti ini :
// function cetakAngka(n){
//     for (var i = n; i >= 1; i--){
//         console.log(i);
//     }
// }
// cetakAngka(10);

// berarti semua rekursif bisa dibuat looping, tapi tidak semua looping bisa
// dibuat rekursif

/**
 * contoh lain adalah faktorial
 * 
 * 5! = 5 x 4 x 3 x 2 x 1
 * 
 * */

function faktorial(n){
    if (n === 0) return 1;
    return n * faktorial (n-1);
}

// kalau dengan looping seperti ini :
function faktorial(n){
    var hasil = 1;
    for (var i = n; i > 0; i--){
        hasil += i;
    }
}
/**
 * implementasi rekursif :
 * 1. menggantikan looping
 * 2. fibbonaci
 * 3. pencarian dan penelusuran pada struktur data list and tree
 * 4. bahasa pemograman yang tidak memiliki pengulangan :
 *  a.haskel
 *  b.erlang
 *  c.prolog
 * dll
 * 
 * 
 * */ 