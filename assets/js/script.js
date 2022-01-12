// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseArray = ["A","B","C","D","E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseArray = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialcharacterArray = ["!","@", "$", "#", "%", "%", "^", ]
var numberArray = [1,2,3,4,5,6,7,8,9,0]
var elementArray = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = prompt("What is the length of your password?")
  console.log(passwordLength)
  if (passwordLength < 8){
    alert("Please use a number equal or greater than 8.")
  } else if ( passwordLength > 128) {
  alert("Please use a number equal or greater than 128.")
  } else {
    var uppercase = confirm("Do you want uppercase in your password")
    console.log(uppercase)
    if (uppercase) {
      elementArray = elementArray.concat(uppercaseArray)
    }
    var lowercase = confirm("Do you want lowercase in your password")
    console.log(lowercase)
    if (lowercase) {
      elementArray = elementArray.concat(lowercaseArray)
    }
    var specialCharacters = confirm("Do you want special characters in your password")
    console.log(specialCharacters)
    if (specialCharacters) {
      elementArray = elementArray.concat(specialcharacterArray)
    }
    var numbers = confirm("Do you want numbers in your password")
    console.log(numbers)
    if (numbers) {
      elementArray = elementArray.concat(numberArray)
    }

    var password = "";
    for (i = 0; i < passwordLength; i++){
      var randomNumber = Math.floor(Math.random() * elementArray.length);
      console.log(randomNumber)
      password = password.concat(elementArray[randomNumber]);
    } console.log(password)
    return password;
  } 
  
    // return generatePassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
