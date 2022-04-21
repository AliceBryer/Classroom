// Access element using id
var articlesDiv = document.getElementById("articles");
var headerDiv = document.getElementById("header");

console.log(articlesDiv.children[0].children[1]);
articlesDiv.children[0].children[1].style.fontSize="50px"



// Change style by accessing style object's properties

// finish this task at home = change it the text to white as per the README.
headerDiv.children[0].style.color = "white";