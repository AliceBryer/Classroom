// // Write Your Code Below

// As a developer, I want to know when two values are equal to one another.
// It's done when I provide two values in function arguments and the function
// evaluates the values' equality.
// It's done if, when the values are strictly equal, the message
// "They are equal in type and value" is logged.

// It's done if, when the two values are equal but not strictly equal,
// the message "They are equal in value" is logged.
// It's done if, when the values are not equal or strictly equal, the message
// "The values are not equal" is logged.

function compareValues(x, y) {
if (x===y) {
    console.log("They are equal in type and value");
} else if (x==y) {
    console.log("They are equal in value");
} else{
    console.log("They are not equal");
}
}
compareValues(5,7)
