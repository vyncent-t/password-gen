// Assignment Code//
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input//
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button//
// generateBtn.addEventListener("click", writePassword);


const chosenPassword = [''];

//Generates a random number
function generateRandomNumber() {
  let genNum = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  return genNum;
}

//Generates random symbol
function generateRandomSymbol()  {
  const symbols = " !#$%&()*+,-./:;<=>?@[\]^_{|}~ "
  let genSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  return genSymbol;
}

//Generates random letters
function generateLowerCase() {
  let genLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  return genLower;
}

function generateUpperCase() {
  let genUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  return genUpper;
}

//Number user chooses for length
let passwordLength;
let lowerChoice;
let upperChoice;
let numberChoice;
let specialChoice;
let userLength;
let userFont;
let choiceLength;



let mainFunc = function () {

  let userLength = prompt('Do you want to set a length? yes/no')

  while (userLength.toLowerCase().trim() !== "yes")
  {userLength = prompt('You must enter yes to continue')}

    let choiceLength = prompt('Please choose a length of at least 8 characters and no more than 128 characters')

    while (choiceLength === typeof('choicelength') )

  while (parseInt(choiceLength) < 8 || parseInt(choiceLength) > 128) 
  {choiceLength = prompt('Please choose a length of at least 8 characters and no more than 128 characters')}


  if (parseInt(choiceLength) >= 8 || parseInt(choiceLength) <= 128)
  {console.log(`user set length to ${choiceLength}`)
    alert(`user set length to ${choiceLength}`)
    passwordLength = choiceLength
    // return passwordLength
  }


  let userFont = prompt('Would you like to use any lowercase, uppercase, numeric, and/or special characters? yes/no')
  
  while (userFont.toLowerCase().trim() !== 'yes') {{userFont = prompt('You must enter yes to continue, it is impossible to make a password that contains no letters, numbers, or special characters')}}


// LOWERCASE PRMOPT
if (userFont.toLowerCase().trim() === 'yes') 
  {lowerChoice = prompt('would you like to use any lowercase letters? yes/no')}
  else {alert('invalid input, defaulting to no') 
  console.log('user chose lowercase set false')
  lowerChoice = false;}

  if (lowerChoice.toLowerCase().trim() === 'yes') 
  { console.log(`user chose lowercase`);
    lowerChoice = true;}

  else if (lowerChoice.toLowerCase().trim() === 'no')
  { console.log('user chose lowercase set false')
    lowerChoice = false;}

    else {alert('invalid input, defaulting to no') 
    console.log('user chose lowercase set false')
    lowerChoice = false;}
      
// WILL NEED TO REPEAT THIS LINE TO MAKE FORMAT
// UPPERCASE PROMPT
    let upperQuestion = prompt('Would you like to use any uppercase letters? yes/no')

    if (upperQuestion.toLowerCase().trim() === 'yes') 
    { console.log(`user chose uppercase`);
    upperChoice = true;}

    else if (upperQuestion.toLowerCase().trim() === 'no')
    { console.log('user chose uppercase set false')
      upperChoice = false;}

    else {alert('invalid input, defaulting to no') 
    console.log('user chose uppercase set false')
    upperChoice = false;}
  
// NUMBERS PROMPTS
let interQuestion = prompt('Would you like to use any numbers? yes/no')

if (interQuestion.toLowerCase().trim() === 'yes') 
{ console.log(`user chose number`);
numberChoice = true;}

else if (interQuestion.toLowerCase().trim() === 'no')
{ console.log('user chose number set false')
numberChoice = false;}

else {alert('invalid input, defaulting to no') 
console.log('user chose number set false')
numberChoice = false;}



  }


 

mainFunc();








