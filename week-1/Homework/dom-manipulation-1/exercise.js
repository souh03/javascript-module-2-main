/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6


    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

    
const elementP = document.querySelector("p");
console.log(elementP)

var divElement = document.querySelector(".site-header");
console.log(divElement)

var jumbotext = document.querySelector("#jumbotron-text");
console.log(jumbotext);

var Pelement = document.querySelectorAll("div.primary-content .lead");
console.log(Pelement)

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function myFunction() {
    document.getElementById("alertBtn").innerHTML = "Thanks for visiting Bikes for Refugees!";
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
function myFunction1() {
        document.body.style.backgroundColor = "#E3FFE8";
      }

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
function myFunction2() {
    var node = document.createElement("P");
    var textparagraph = document.createTextNode("This the new paragraph.");
    node.appendChild(textparagraph);
    document.getElementById("mainArticles").appendChild(node);
  }
    
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
/*
function myFunction3() {
    var element = document.getElementById("fontzise");
    element.style.fontSize = "x-large";    
}
*/
function myFunction3() {
var elements = document.getElementsByClassName('article-title article-title--sidebar');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = "x-large";
}
}
    

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/



/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

let backgrounds = ['yellow', '#E3FFE8', '#cbff7c', '#f6e3ff', '#ff69da'], i = 0
document.getElementById('bgrChangeBtn').addEventListener('click', () => {
  document.body.style.backgroundColor = backgrounds[i%backgrounds.length]
  i++
})

