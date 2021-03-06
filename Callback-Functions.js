//When a function simply accepts another function as an argument, 
//this contained function is known as a callback function. 

/*****************************************************/

function greeting(name) {
	console.log(`Hello ${name}`)
}

function name(firstname, lastname, callback) {
	const fullname = firstname + " " + lastname

	callback(fullname)
}
name("Ahsan", "Shakeel", greeting)

/*****************************************************/

function preparedfood(callback) {
	setTimeout(() => {
		console.log("Prepared Food")
		callback("Food is Ready")
	})
}

function mycallback(value) {
	console.log("Value: ", value)
}

preparedfood(mycallback)

/*****************************************************/

function date(callback) {
	setTimeout(() => {
		console.log(new Date().toDateString())
		let date = new Date()
		callback(date.getHours(), date.getMinutes(), date.getSeconds() )
	},2000)
}

function time(hours, minutes, seconds) {
	console.log(`time now: ${hours} : ${minutes} : ${seconds}`)
}

date(time)

/*****************************************************/

function preparefood(callback) {
	setTimeout(() => {
		console.log("Preparing Food")
		callback("Food is Ready")
	},2000)
}

function foodcallback(value) {
	console.log(`It's Dinner Time ${value}`)
	dessert(dessertcallback)
}

function dessert(callback) {
	setTimeout(() => {
		console.log("Preparing Dessert")
		callback("Fruit Cocktail")
	},5000)
}

function dessertcallback(item) {
	console.log(`${item} Dessert is Ready`)
}

preparefood(foodcallback)