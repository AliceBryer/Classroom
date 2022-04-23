var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// TODO: Add event listener to increment button

incrementEl.addEventListener("click", function () {
  count++;
  setCounterText();
})

// TODO: Add event listener to decrement button 

decrementEl.addEventListenter ("click" function () {
if (count >0) {
count--;
}
setCounterText();

})

function setCounterText() {
  countEl.textContent = count;
}