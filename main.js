const express = require('express');

const app = express();

const port = 3000;
  
app.listen(port);

var stock = 50;
function bp(jml, disc, tax, crd) {
    const b = disc > 0 & disc < 100;
    const c = tax > 0 & tax < 100;
    const d = crd >= 0 & crd < 7;
    if (b == true & c == true & d == true) {
        var book = 'Habis Gelap Terbitlah Terang';
        var price = 50000;
        pdisc = jml * (price - (price * disc / 100));
        ptax = pdisc + (pdisc * tax / 100);
        stock = stock - jml;
        console.log('Jumlah Pembelian: ' + jml);
        console.log('Diskon: ' + disc + ' %');
        console.log('Pajak: ' + tax + ' %');
        console.log('Sisa stock Buku: ' + stock);
        console.log('Judul Buku: ' + book);
        console.log('Harga setelah Diskon = ' + pdisc);
        console.log('Harga Total = ' + ptax);
        if (crd == 0) {
            console.log('-------------------------------------');
        } else {
            console.log('Kredit: ' + crd + ' bulan');
            var term = [];
            for (let i = 0; i < crd; i++) {
                term[i] = ptax / crd;
            };
            let due = {
                bulan: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November']
            }
            const tenggat = due.bulan.slice(0, crd);
            console.log('Tenggat Waktu: ' + tenggat);
            const termcrdt = [];
            term.forEach((termn, idx, term) => {
                const termobj = {Tagihan: idx+1, credit: termn + (termn * (tax / 100))}
                termcrdt.push(termobj);
            });
            console.log(termcrdt);
        }
    } else {
        stock = 0;
        console.log('Coba cek inputan nya lagi!!!');
    }
}

// app.use((req, res, next) => {
//     res.send('<h1>ini judul</h1>');
// });
// app.use((req, res, next) => {
//     res.send('<h1>Get World!</h1><form method="get" action="/"><input name="Jumlah" type="text"><button type="submit">Itung</button></form>');
// });

var parbook = {
    jumlah: 10,
    diskon: 25,
    pajak: 10,
    kredit: 3
}
app.get('/book', (req, res) => {
    // var jml = req.params.jml;
    // var dsc = 
    res.send(parbook);
});
app.post('/', (req, res) => {
    res.send('Post World!')
});
app.put('/book/:jml', (req, res) => {
    res.send(req.params.jml)
});
app.delete('/book/:jml', (req, res) => {
    res.send(req.params.jml)
});

// var jumlah = 10;
// var diskon = 25;
// var pajak = 10;
// var kredit = 3;
// var no = 1;
// do {
//     console.log(no);
//     console.log(bp(jumlah, diskon, pajak, kredit));
//     no++;
// } while (stock >= jumlah);