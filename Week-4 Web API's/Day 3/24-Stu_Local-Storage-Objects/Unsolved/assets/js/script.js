var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submissio

  var formInput = {

    firstNameInput: firstNameInput.textContent, 
    lastNameInput: lastNameInput.textContent, 
    emailInput: emailInput.textContent,
    passwordInout: passwordInput.textcontent 

}

console.log(formInput)

localStorage.setItem("formInput", JSON.stringify(formInput));

var name = JSON.parse(localStorage.getItem("formInput"));

  // TODO: Set new submission to local storage 
  
});
