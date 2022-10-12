var stock = 50;
function bp(jml, disc, tax) {
    const b = disc > 0 & disc < 100;
    const c = tax > 0 & tax < 100;
    if (b == true & c == true) {
        var book = 'Habis Gelap Terbitlah Terang';
        var price = 50000;
        pdisc = jml * (price - (price * disc / 100));
        ptax = (pdisc + (pdisc * tax / 100));
        stock = stock - jml;
        console.log('Sisa stock Buku: ' + stock);
        console.log('Judul Buku: ' + book);
        console.log('Harga setelah Diskon = ' + pdisc);
        console.log('Harga setelah Pajak = ' + ptax);
    } else {
        console.log('Harga ada yang salah!!!');
    }
}
var no = 1;
while (stock > 0) {
    console.log(no);
    console.log(bp(10, 50, 10));
    no++;
}