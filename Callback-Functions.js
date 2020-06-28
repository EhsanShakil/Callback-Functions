//When a function simply accepts another function as an argument, 
//this contained function is known as a callback function. 

function greeting(name) {
	console.log(`Hello ${name}`)
}

function name(firstname, lastname, callback) {
	const fullname = firstname + " " + lastname

	callback(fullname)
}
name("Ahsan", "Shakeel", greeting)

