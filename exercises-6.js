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
	

	//pertambahan counter 2
		var counter = -1;
		while(counter <= 100){
			counter = counter+2;	
			console.log('counter sekarang : ' + counter);
			if (counter %3 === 0 ){
				console.log(counter + ' kelipatan ' + '3');
			
			}
			else{
				console.log('""');
			}
		}

	//pertambahan counter 5
		var counter = -4;
		while(counter <= 100){
			counter = counter+5;	
			console.log('counter sekarang : ' + counter);
			if (counter %6 === 0 ){
				console.log(counter + ' kelipatan ' + '6');
			
			}
			else{
				console.log('""');
			}
		}
	
	
	

	//pertambahan counter 10
		var counter = -8;
		while(counter <= 100){
			counter = counter+9;	
			console.log('counter sekarang : ' + counter);
			if (counter %10 === 0 ){
				console.log(counter + ' kelipatan ' + '10');
			
			}
			else{
				console.log('""');
			}
		}

























