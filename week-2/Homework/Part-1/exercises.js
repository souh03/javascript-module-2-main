
/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */




 function exerciseOne(arrayOfpeople) {
  let content = document.querySelector("#content");
  
  for (var i = 0; i < arrayOfpeople.length; i++) {
    let h1 = content.appendChild(document.createElement('H1'));
    h1.appendChild(document.createTextNode(arrayOfpeople.name));
    h1.innerHTML = arrayOfpeople[i].name
}
 
for (var i = 0; i < arrayOfpeople.length; i++) {
  let h2 = content.appendChild(document.createElement('H2'));
  h2.appendChild(document.createTextNode(arrayOfpeople.name));
  h2.innerHTML = arrayOfpeople[i].job
}
 }

//// Another solution :

/*
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(function (obj){ 
      content.innerHTML += '<h1>' + obj.name +'</h1>'
      content.innerHTML += '<h2>' + obj.job +'</h2>'
    })
  } 
  */

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let content = document.querySelector("#content");
    
    var list = content.appendChild(document.createElement('ul'))
    for (var i = 0; i < shopping.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(shopping[i]));
        list.appendChild(item);
    }
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/

function exerciseThree(books) {
     let content = document.querySelector("#content");
    let list = content.appendChild(document.createElement('ul'));
    for (var i = 0; i < books.length; i++) {
      let item = list.appendChild(document.createElement('li'))
      let book = item.appendChild(document.createElement('p'))
      book.innerHTML = books[i].title + ' - ' + books[i].author 
      + '<br><img src="https://m.media-amazon.com/images/P/B06XCCZJ4L.01._SCLZZZZZZZ_SX500_.jpg">';    
    
    if (books[i].alreadyRead  === true) {
      document.querySelector("p").style.background ="green"
    }
    else  {
     document.querySelector("p").style.background ="red"
    }
  }
  }
   

 
  




      
  
        
    


//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
