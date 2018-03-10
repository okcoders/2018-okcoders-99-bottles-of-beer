
var beers = 99;

// repeat the section 99 times
while(beers > 0) {
	
	if(beers === 1) {
		console.log(beers + " bottle of beer on the wall");
		console.log(beers + " bottle of beer");
		console.log("You take one down, you pass it around.");
		beers--;
		console.log("No more bottles of beer on the wall!!!  GO buy more beer.\n");
	} else {
		console.log(beers + " bottles of beer on the wall");
		console.log(beers + " bottles of beer");
		console.log("You take one down, you pass it around.");
		beers--;
		console.log(beers + " bottles of beer on the wall\n");
		// beers = beers - 1;
	}
}