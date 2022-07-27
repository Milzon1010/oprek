var angka = prompt("masukan angka :");

if (angka === 1) {
  alert("anda memasukan angka 1");
} else if (angka === 2) {
  alert("anda memasukan angka 2");
} else if (angka === 3) {
  alert("anda memasukan angka 3");
} else {
  alert("angka yang anda masukan salah!");
}

// ubah coding diatas menjadi switch

switch (angka) {
  case "1":
    alert("anda memasukan angka 1");
    break;
  case "2":
    alert("anda memasukan angka 2");
    break;
  case "3":
    alert("anda memasukan angka 3");
    break;
  default:
    alert("angka yang ada masukan salah!");
    break;
}

// contoh lagi

var item = prompt(
  "masukan nama makanan/minuman : \n (contoh : nasi, daging, susu, hamburger, softdrink)"
);
switch (item){
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan/MINUMAN sehat!');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan/MINUMAN tidak sehat!');
        break;
    default :
        alert ('anda memasukan makanan/MINUMAN yang salah!');
        break;

}
