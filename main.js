let song = {
    list:[{
            title: 'Valley of the Damned',
            artist: 'DragonForce',
            genre: ['Power metal','Speed metal'],
            tahun: '2003',
            durasi: 60
        },
        {
            title: 'Through the Fire and Flames',
            artist: 'DragonForce',
            genre: ['Power metal','Speed metal'],
            tahun: '2017',
            durasi: 27
        },
        {
            title: 'Rockabye',
            artist: 'Clean Bandit',
            genre: ['Pop','Romance'],
            tahun: '2016',
            durasi: 19
        },
        {
            title: 'Stranger by the Day',
            artist: 'Shades Apart',
            genre: ['Pop','Clasic'],
            tahun: '1999',
            durasi: 65
        },
        {
            title: 'Nothings Gonna Change My Love for You',
            artist: 'George Benson',
            genre: ['Pop','Romance'],
            tahun: '1985',
            durasi: 52
        },
        {
            title: 'Natural',
            artist: 'Imagine Dragons',
            genre: ['Pop','Hard Pop'],
            tahun: '2018',
            durasi: 79
        },
        {
            title: 'Natural',
            artist: 'Dmasiv',
            genre: ['Pop','Indonesian Pop'],
            tahun: '2012',
            durasi: 47
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
            durasi: 20
        },
        {
            title: 'My Spirit Will Go On',
            artist: 'DragonForce',
            genre: ['Power metal','Speed metal'],
            tahun: '2004',
            durasi: 59
        }]
};

function groupartist(vartist) {
    for (let i = 0; i < song.list.length; i++) {
        if (vartist == song.list[i].artist) {
            console.log(song.list[i]);
        }
    }
}

function groupgenre(vargenre) {
    for (let i = 0; i < song.list.length; i++) {
        for (let j = 0; j < song.list[i].genre.length; j++) {
            if (vargenre == song.list[i].genre[j]) {
                console.log(song.list[i].genre[j]);
            }
        }
        console.log(song.list[i].title, song.list[i].artist, song.list[i].tahun, song.list[i].durasi);
        console.log('');
    }
}

function groupdurasi(vardurasi) {
    for (let i = 0; i < song.list.length; i++) {
        if (song.list[i].durasi < vardurasi) {
            console.log(song.list[i]);
        }
    }
}
var artis = 'DragonForce';
var durasi = 60;
var genre = 'Power metal';
console.log(groupartist(artis));
// console.log(groupgenre(genre));
// console.log(groupdurasi(durasi));
// console.log(song.list);