// console.log("testing");
// alert("hello this alert")

// var age = prompt('what is your ages ?')
// document.getElementById('sometext').innerHTML = age

// Number
var num1 = 10

//increment
num1++

//decrement
num1--
console.log(num1)


//Divide, multiply *, remainder %
console.log(num1 % 6)

//Increment or decrement by any number you want
num1 += 10
console.log(num1)


/* Function
1. Create a function
2. Call the function

*/

//Create
// function fun() {
//     alert("this is a function")
// }

//Call
// fun()

/*
Let's create a function that take in a name
and says hello followed by your name

For example

Name : "Naldi"
Return : "Hello Naldi"
*/
function gretting(yourName) {
    var result = "Hello " + yourName; //String concatination
    console.log(result)
}
// var name = prompt("What is your name ?")
// gretting(name)

//How do arguments work in functions ?
//How do we add 2 numbers together in a functions ?
function sumNumbers(num1, num2) {
    var result = num1 + num2
    console.log(num1 + num2)
}

// sumNumbers(10,10)


//While loops
// var num = 0

// while (num < 100) {
//     num += 1
//     console.log(num)
// }

//For loops
// for (let num = 0; num < 100; num++) {
//     console.log(num)
// }

//Data types
let yourAge = 18 //number
let yourName = "Bob" //string
let name = {first: "jane", last: "doe"} //object
let truth = false; //boolean
let groeries = ['apple', 'banana'] //array
let random; //undefined
let nothing = null //value null

//String in Javascript (Common methods)
let fruit = 'banana,apple,orange,blackberry'
let moreFruit = 'banana\napples' //new line
console.log(fruit.length)
console.log(fruit.indexOf('nana'))
console.log(fruit.slice(2,6))
console.log(fruit.replace('ban', '123'))
console.log(fruit.toLowerCase())
console.log(fruit.toUpperCase())
console.log(fruit.charAt(2))
console.log(fruit[2])
console.log(fruit.split(',')) //Split by comma
console.log(fruit.split('')) //Split by character


//Array
let fruits = ['banana', 'oranges', 'blackberry']

fruits = new Array('banana', 'oranges', 'blackberry')

console.log(fruits[2]) //access value at index 2nd

fruits[0] = 'pear'
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i]) 
}

//Array common methods
console.log('to string', fruits.toString())
console.log(fruits.join(' - '))
console.log(fruits.pop(), fruits) //remove last item
console.log(fruits, fruits.push('stroberry'), fruits) //appends
console.log(fruits[2])
fruits[2] = 'new fruit'
console.log(fruits)

fruits.shift() //remove first element from a array
console.log(fruits)
fruits.unshift('kiwi') //add first element from a array
console.log(fruits)

let vegetables = ['asparagus', 'tomato', 'broccoli']
let allGroceries = fruits.concat(vegetables)
console.log(allGroceries)
console.log(allGroceries.slice(1,2))
console.log(allGroceries.reverse())

let someNumbers = [5,10,2,25,3,255,1,2,5,334,321,2]
console.log(someNumbers.sort(function(a, b) {return a-b})) // sorted in ascending order
console.log(someNumbers.sort(function (a, b) { return b - a })) //sorted in descending order

let emptyArray = new Array()
for (let i = 0; i < 10; i++) {
    emptyArray.push(i)
    
}
console.log(emptyArray)


//Objects in Javascript
//dictionaries in Python

let student = {
    first: 'Rinaldi', 
    last: 'Fauzi', 
    age: 21,
    studentInfo : function() {
        return this.first + '\n' + this.last + '\n' + this.age
    }
}


// console.log(student.first)
// console.log(student.first)
// student.first = "noRinaldi" //change value
// console.log(student.first)

student.age++
console.log(student.age)

console.log(student.studentInfo())


// Conditionals, Control flows (if else)
// 18 - 35 my target demographic
// && AND
// || OR

let age = prompt('What is your age ? ')
if ((age >= 18) && (age <= 35)) {
    status = 'target demo'
}else{
    status = 'not my audience'
}
console.log(status)

// Switch statements
// differentiate between weekday vs weekend
// day 0 Sunday
// day 6 --> Saturday
// day 6 --> Thursday --> weekday

switch (6) {
    case 0:
        text = 'Weekend'
        break;

    case 5:
        text = 'Weekend'
        break;

    case 6:
        text = 'Weekend'
        break;

    default:
        text = 'Weekday'
        break;
}
console.log(text)
