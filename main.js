let song = {
    list:[{
            title: 'Valley of the Damned',
            artist: 'DragonForce',
            genre: ['Power metal','Speed metal'],
            tahun: '2003',
            durasi: 15
        },
        {
            title: 'Through the Fire and Flames',
            artist: 'DragonForce',
            genre: ['Power metal','Speed metal'],
            tahun: '2017',
            durasi: 17
        },
        {
            title: 'Rockabye',
            artist: 'Clean Bandit',
            genre: ['Pop','Romance'],
            tahun: '2016',
            durasi: 9
        },
        {
            title: 'Stranger by the Day',
            artist: 'Shades Apart',
            genre: ['Pop','Clasic'],
            tahun: '1999',
            durasi: 7
        },
        {
            title: 'Nothings Gonna Change My Love for You',
            artist: 'George Benson',
            genre: ['Pop','Romance'],
            tahun: '1985',
            durasi: 13
        },
        {
            title: 'Natural',
            artist: 'Imagine Dragons',
            genre: ['Pop','Hard Pop'],
            tahun: '2018',
            durasi: 8
        },
        {
            title: 'Natural',
            artist: 'Dmasiv',
            genre: ['Pop','Indonesian Pop'],
            tahun: '2012',
            durasi: 10
        },
        {
            title: 'Black Catcher',
            artist: 'Vickeblanka',
            genre: ['Pop','Japan Pop'],
            tahun: '2020',
            durasi: 15
        },
        {
            title: 'Sway',
            artist: 'Michael Buble',
            genre: ['Pop','Slow Pop'],
            tahun: '2003',
            durasi: 9
        },
        {
            title: 'My Spirit Will Go On',
            artist: 'DragonForce',
            genre: ['Power metal','Speed metal'],
            tahun: '2004',
            durasi: 18
        }]
};

function groupartist(vartist) {
    var Arrartist = [{}];
    for (let i = 0; i < song.list.length; i++) {
        if (vartist == song.list[i].artist) {
            Arrartist.push(song.list[i]);
        }
    }
    for (let i = 1; i < Arrartist.length; i++) {
        console.log(i);
        console.log(Arrartist[i]);
    }
}

function groupgenre(vargenre) {
    var Arrgenre = [{}];
    for (let i = 0; i < song.list.length; i++) {
        for (let j = 0; j < song.list[i].genre.length; j++) {
            if (vargenre == song.list[i].genre[j]) {
                Arrgenre.push(song.list[i]);
            }
        }
    }
    for (let i = 1; i < Arrgenre.length; i++) {
        console.log(i);
        console.log(Arrgenre[i]);
    }
}

function groupdurasi(vardurasi) {
    var Arrdurasi = 0;
    let i = 0;
    while (Arrdurasi < vardurasi) {
        Arrdurasi = Arrdurasi + song.list[i].durasi;
        console.log(i+1);
        console.log(song.list[i]);
        console.log('Total Durasi: ' + Arrdurasi + ' Menit');
        i++;
    }
    // for (i = 0; i < song.list.length; i++) {
    //     if (song.list[i].durasi < vardurasi) {
    //         console.log(song.list[i]);
    //     }
    // }
}
var artis = 'DragonForce';
var durasi = 100;
var genre = 'Pop';
// console.log(groupartist(artis));
// console.log(groupgenre(genre));
console.log(groupdurasi(durasi));
// console.log(song.list);