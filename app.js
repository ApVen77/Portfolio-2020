
"use strict";
// alert("Welcome "  +  name);
// prompt("Are you 18 or Older?");

console.log("Hello World");
const time = new Date();

//get the time//
let date = document.getElementById("dateNow");
date.innerHTML = time.toLocaleTimeString();
// get the date //
let dateToday = document.getElementById("datNow");
dateToday.innerHTML = time.toLocaleDateString;
//get day of the week //
let days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
let dow= document.getElementById("dow"); 
dow.innerHTML = days[time.getDay()];
// document.getElementsByTagName("h1")[0].style.color = "#ff0000";
// date.innerHTML= time.toLocaleDateString();
document.body.addEventListener('click', function () {
    var myParent = document.getElementsByTagName("h1")[0]; 
    var myImage = document.createElement("img");
    myImage.src = 'https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif';
    myParent.appendChild(myImage);
    myImage.style.marginLeft = "160px";
});

document.body.addEventListener('click', function(){
    var paraGra= document.getElementsByTagName('h2')[2];
    paraGra.h2= 'Welcome to my House';
})
// var author = "Mario";
// var likes= 30;
// var titles= "The best blog";

// var result = `The blog clalled ${titles} by ${author} has ${likes} likes`; 
// console.log(result);

// var para= document.querySelector('.fish');
// para.innerHTML= '<h2> FISH</h2>';
// var people = ['april', 'aven', 'ari','alex'];
// people.forEach(person => {
//     para.innerHTML += `<p>${person}</p>`
// });


var studentName = "April";
var isEnrolled = true;
var isNotEnrolled = false;
var person = window.prompt("Are you enrolled?");
var personal = document.getElementsByClassName('.fish2');

if (isEnrolled != null) {
    personal.innerHTML = ("Welcome " + studentName)
};

// if (person != null) {
//     alert('Welcome' + ' ' + studentName)
// } else { 
//     alert('Please See Office' + ' ' + studentName)
// };

// function myFunction() {
//     var person = prompt("Please enter your name", "Harry Potter");
//     if (person != null) {
//       document.getElementById("demo").innerHTML =
//       "Hello " + person + "! How are you today?";
//     }
//   }




// prompt("Are you HUngry?");
// alert("Pizza cost is $5");
// prompt("How many do you want?")
// alert (pizzaCount * 5);
// alert("Please come again");

        //alert("Please enter registered owner's name");

        // $( function() {
        //     $( "#dialog" ).dialog("Thank u!");
        //   } );
        // form.getElementById('submit').onclick = function changeContent() {

        //     document.getElementById('submit').innerHTML = "Help me";
        //     document.getElementById('submit').style = "Color: red";

        //  }
//         <button onclick="myFunction()">Try it</button>

// <script>
// function myFunction() {
//   alert("I am an alert box!");
// }
// Write an expression that uses at least 3 different arithmetic operators.

// The expression should equal 42.

// Hint: +, -, *, /, and % are possible arithmetic operators

// Your Code:



// Create a string with the name of your favorite food. The first letter of the string should be capitalized.

// Your Code:

// Directions:
// Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the udaciFamily to the console using console.log.

// Your Code:


// Fix the right side expression so it evaluates to true.
// "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

// Build a single string that resembles the following joke.

// Why couldn't the shoes go out and play?
// They were all "tied" up!
// Your joke should take the format of a question and answer. The first line should be a question and the second line should be an answer.

// Hint: You will need to use special characters to produce the following output.

// Your Code:

// Directions:
// Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.

// Blowing from the west
// Fallen leaves gather
// In the east.
// Each string should be printed on its own line.

// Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.

// Your Code:

// Directions for the Quiz Below:
// Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,

// red blue
// where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!

// Your Code:

// Create a variable called fullName and assign it your full name as a string.

// Your Code:

// Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

// Print the total to the JavaScript console.

// Hint: 15% in decimal form is written as 0.15_._

// TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.

// Your Code:

// "Hi, my name is Julia. I love cats. In my spare time, I like to play video games."
// "Hi, my name is James. I love baseball. In my spare time, I like to read."
// Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).

// Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.

// Your Code: