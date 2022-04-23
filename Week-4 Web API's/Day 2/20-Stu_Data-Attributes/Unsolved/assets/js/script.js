var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
});

 
 if (element.matches("img")) {

  var state = element.getAttribute("data-state");

  if (state === "hidden") {
    // Change the data-state attribute's value
    // There are two different ways this attribute can be set
    element.dataset.state = "visible";
    element.setAttribute("data-state", "visible");

    // Update the image's display
    element.setAttribute("src", );
  } else {
    // Change the attributes back to their non-animated values
    element.dataset.state = "still";
    element.setAttribute("src", element.dataset.still);
  }
}
});
