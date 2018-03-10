function forEach(array, callback){
	for(var x=0;x<array.length;x++){
		callback(array[x]);
	}
}

var students = ['Tom', 'Jill', 'Jan'];

forEach(students, function(name){
	console.log(name, "was here");
});

function makeSquared(number){
	return function(){
		return number * number;
	}
}

function makePower(power){
	return function(x){
		return Math.pow(x,power);
	}
}

nineSquared = function(){9*9}
var nineSquared = makeSquared(9);
var twelveSquared = makeSquared(12);

var squared = makePower(2);
var cubed = makePower(3);
var forthed = makePower(4);

console.log("Nine squared is", squared(9) );2
console.log("Twelve cubed is", cubed(12) );
console.log("Five forthed is", forthed(5) );


