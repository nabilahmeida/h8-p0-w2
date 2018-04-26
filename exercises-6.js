//1. Melakukan Looping Menggunakan While
	var loopOne = 2;
	var loopTwo = 20;

	console.log('LOOPING PERTAMA');
		while(loopOne <= 20 ) {
		    console.log(loopOne + ' - I Love coding');
		    loopOne+=2;
		}
	console.log('LOOPING KEDUA');
		while(loopTwo >=2){
		    console.log(loopTwo + ' - I will become fullstack developer');
		    loopTwo-=2;
		}

//2. Melakukan Looping Menggunakan For
	console.log('LOOPING PERTAMA');
	    for(var loopOne = 1; loopOne <= 20; loopOne++ ) {
		console.log(loopOne + ' - I Love coding');
	    }
	console.log('LOOPING KEDUA');
	    for(var loopTwo = 20; loopTwo >=1; loopTwo-- ){
		console.log(loopTwo + ' - I will become fullstack developer');
	    }

//3. Angka Ganjil dan Genap
	//ganji genap
	for (var counter = 1; counter <=100; counter++){
	    if(counter%2 === 0){
		console.log('GENAP');
		break;
	    }
	    else{
		console.log('GANJIL');
		break;
	    }

	}
	

	//pertambahan counter 3
	
	var counter = 3;

	while(counter <= 100){
	    if ( counter !== 1){
		console.log(counter + ' kelipatan ' + counter);
		counter = counter + 2;
	    }
	    else{
		console.log('""');
		break;
	    }
	}

	//pertambahan counter 5

	var counter = 6;

	while(counter <= 100){
	    if ( counter !== 1){
	    	console.log(counter + ' kelipatan ' + counter);
	    	counter = counter + 5;
	    }
	    else{
		console.log('""');
		break;
	    }
	}

	//pertambahan counter 10

	var counter = 9;

	while(counter <= 100){
	    if ( counter !== 1){
		console.log(counter + ' kelipatan ' + counter);
		counter = counter + 10;
	    }
	    else{
		console.log('""');
		break;
	    }
	}

























