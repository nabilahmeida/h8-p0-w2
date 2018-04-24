var nama = '';
var peran = '';

    if (nama === '' && peran === ''){
        console.log('nama harus diisi!');
    }
    else if(nama === nama && peran === ''){
        console.log('Hallo '+nama, 'pilih peranmu untuk memulai game!');
    }
    else {
        if((nama == nama && peran == 'ksatria')){
            console.log('Selamat datang di Dunia Proxytia, '+nama);
            console.log('Hallo ' +peran ,'' +nama, 'kamu dapat menyerang dengan senjatamu!');
        }
        else if (nama == nama && peran == 'tabib'){
            console.log('Selamat datang di Dunia Proxytia, '+nama);
            console.log('Hallo ' +peran ,'' +nama, 'kamu akan membantu temanmu yang terluka.');
        }
        else if(nama == nama && peran == 'penyihir'){
            console.log('Selamat datang di Dunia Proxytia, '+nama);
            console.log('Hallo '+peran , '' +nama, 'ciptakan keajaiban yang membantu kemenanganmu!');
        }
        else if(nama == nama && peran == peran){
            console.log('Selamat datang di Dunia Proxytia, '+nama);
            console.log('Hallo '+peran , '' +nama);
        }
        else {
            console.log('Hallo ' +nama , 'pilih peranmu untuk memulai game!');
        }
    }
