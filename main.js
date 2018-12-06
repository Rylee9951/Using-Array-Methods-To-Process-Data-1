//1.What is the average price of all items?
var price = 0
items.forEach(function(item){
		price += Number(item.price)
})
var avg = price / items.length
document.getElementById('answer1').innerHTML = `The average price is $${avg.toFixed(2)}`
//2. Show me an array of items that cost between $14.00 and $18.00 USD?
var newArr = items.filter(function(item){
	return item.price > 14 && item.price < 18
}).map(function(item){
	return item.title
}).join('\n')
document.getElementById('answer2').innerHTML = newArr
//3. Which item has a "GBP" currency code? Display it's name and price.
var GBP = ''
items.filter(function(item){
	if(item.currency_code === 'GBP'){
		GBP += item.title + "costs &pound;" + item.price
	}
})
document.getElementById('answer3').innerHTML = GBP
//4. Display a list of all items who are made of wood.
var madeOfWood = items.filter(function(item){
	return item.materials.indexOf('wood') !== -1
}).map(function(item){
	return item.title + " is made of wood"
}).join('\n')
document.getElementById('answer4').innerHTML = madeOfWood
//5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
var eightHTML = ''
var eightOrMore = items.filter(function(item){
	return item.materials.length >= 8
}).forEach(function(item){
	eightHTML += `${item.title} has ${item.materials.length} materials\n`
	eightHTML += item.materials.join('\n')
	eightHTML += '\n\n'
})
document.getElementById('answer5').innerHTML = eightHTML
//6. How many items were made by their sellers?
var madeBySellers = items.filter(function(item){
	return item.who_made == 'i_did'
}).length
document.getElementById('answer6').innerHTML = `${madeBySellers} were made by their sellers`



