
let ourArray = [ {name: 'Thomas', age: 20 }, {name: 'Angie', age: 25 }, {name: 'Francois', age: 22 } ];

function iterateArray() {
	for (let i in ourArray) {
		console.log(ourArray[i].name);
	}
}
