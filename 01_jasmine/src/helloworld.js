let ourArray = [ {name: 'Thomas', age: 20 }, {name: 'Angie', age: 25 }, {name: 'Francois', age: 22 } ]

var helloworld = function(){  
	return 'Hello World';
};

let testSum = function(){
	return 5 + 10;
}

function iterateArray() {
	for (let i in ourArray) {
		console.log(ourArray[i].name);
	}
}