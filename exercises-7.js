//1. Menyusun Barisan Bintang
	var rows1 = 5;
	while(rows1 >= 1) {
		console.log('*');
		rows1--;
	}

//2. Menyusun Barisan Bintang Dengan Nested Looping
	var star = ""; 
	for(var rows2 = 5; rows2 > 0; rows2--){
		star = "";
		for (var kolom = 0; kolom < 5 ; kolom++) {    
		star += '*';
		}
		console.log(star);
	}


//3. Menyusun Barisan Tangga Bintang 
	var rows3 = 5;
	var star = "";
	while(rows3 > 0){
	    star = star + "*";
	    console.log(star);
	    rows3--;
	}
