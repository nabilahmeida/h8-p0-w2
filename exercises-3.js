var nama = 'nabilah';
var peran = '';

    if(nama === 'nabilah' && peran === ''){
        console.log('Hallo '+nama, 'pilih peranmu untuk memulai game!');
    }
    else if((nama == 'nabilah' && peran == 'ksatria')){
        console.log('Selamat datang di Dunia Proxytia, '+nama);
        console.log('Hallo ' +peran ,'' +nama, 'kamu dapat menyerang dengan senjatamu!');
    }
    else if (nama == 'nabilah' && peran == 'tabib'){
        console.log('Selamat datang di Dunia Proxytia, '+nama);
        console.log('Hallo ' +peran ,'' +nama, 'kamu akan membantu temanmu yang terluka.');
    }
    else if (nama == 'nabilah' && peran == 'penyihir'){
        console.log('Selamat datang di Dunia Proxytia, '+nama);
        console.log('Hallo '+peran , '' +nama, 'ciptakan keajaiban yang membantu kemenanganmu!')
    }
    else{
        if (nama === '' && peran === '') {
            console.log('Nama harus disi!');
        }
        else if(nama === 'nabilah' && peran !=='ksatria'){
            console.log('dan pilih salah satu nilai variable peran dengan 3 pilihan yaitu:');
            console.log('ksatria, tabib, penyihir');
            
        }
        else {
            console.log('maaf ya, tolong isi nama nabilah, karena nilai variable input manual');
        }
    }
