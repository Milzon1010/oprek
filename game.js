var tanya = true;

while (tanya){

    // menangkap pilihan player
    var p = ["pilih : gajah, semut, orang"];

    // menangkap pilihan computer
    // membangkitkan bilangan random

    var comp = Math.random();
    // console.log(comp);
    if (comp < 0.34) {
    comp = "gajah";
    } else if (comp > 0.34 && comp < 0.67) {
    comp = "orang";
    } else {
    comp = "semut";
    }
    // console.log(comp);

    // sekarang menentukan RULE of game :

    var hasil = "";
    if (p === comp) {
    hasil = "SERI";
    } else if (p == "gajah") {
    if (comp == "orang") {
        hasil = "MENANG!";
    } else {
        hasil = "KALAH!";
    }
    //   hasil ini bisa ubah ke "ternary" menjadi :
    hasil = comp == "orang" ? "MENANG!" : "KALAH";
    } else if (p == "orang") {
    hasil = comp == "gajah" ? "MENANG" : "KALAH";
    } else if (p == "semut") {
    hasil = comp == "orang" ? "MENANG" : "KALAH";
    } else {
    hasil = "memasukan pilihan yang salah";
    }
    // console.log(
    //   "kamu memilih :" +
    //     p +
    //     "dan komputer memilih" +
    //     comp +
    //     "\nMaka Hasilnya : kamu " +
    //     hasil
    // );
    tanya = confirm('lagi ?');
}
alert('terimakasih sudah bermain.');