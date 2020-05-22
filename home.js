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
for (let num = 0; num < 100; num++) {
    console.log(num)
}







