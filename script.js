const chosenPassword = [''];
const symbols = " !#$%&()*+,-./:;<=>?@[\]^_{|}~ "

//Number user chooses for length
// let passwordOptions;
let passwordArray;
let passwordLength;
let lowerChoice;
let upperChoice;
let numberChoice;
let specialChoice;
let userLength;
let userFont;
let choiceLength;
let userDefault;
let randomizer;
let genLower;
let genUpper;
let genNum;
let genSymbol;
let finalUserPassword

let passwordOptions = {
  lengthOption: choiceLength,
  lowerOption: lowerChoice,
  upperOption: upperChoice,
  numberOption: numberChoice,
  specialOption: specialChoice,
  defaultOption: userDefault,
  
}

let passwordFreeArray = [];


//Generates a random number
function generateRandomNumber() {
  genNum = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  passwordFreeArray.push(genNum)
}

//Generates random symbol
function generateRandomSymbol()  {
  genSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  passwordFreeArray.push(genSymbol)
}

//Generates random letters
function generateLowerCase() {
  genLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  passwordFreeArray.push(genLower)
}

function generateUpperCase() {
  genUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  passwordFreeArray.push(genUpper)
}

let questionsPrompt = function () {

  let userLength = prompt('Do you want to set a length? yes/no')

  while (userLength.toLowerCase().trim() !== "yes")
  {userLength = prompt('You must enter yes to continue')}

    choiceLength = prompt('Please choose a length of at least 8 characters and no more than 128 characters')


  while (parseInt(choiceLength) < 8 || parseInt(choiceLength) > 128) 
  {choiceLength = prompt('Please choose a length of at least 8 characters and no more than 128 characters')}


  if (parseInt(choiceLength) >= 8 || parseInt(choiceLength) <= 128)
  {console.log(`user set length to ${choiceLength}`)
    alert(`user set length to ${choiceLength}`)
    passwordLength = choiceLength
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

// SPECIAL PROMPT
  let funkyQuestion = prompt('Would you like to use any special characters? yes/no')

  if (funkyQuestion.toLowerCase().trim() === 'yes') 
  { console.log(`user chose special char`);
  specialChoice = true;}

  else if (funkyQuestion.toLowerCase().trim() === 'no')
  { console.log('user chose special char set false')
  specialChoice = false;}

  else {alert('invalid input, defaulting to no') 
  console.log('user chose special char set false')
  specialChoice = false;}

  if (!lowerChoice && !upperChoice && !numberChoice && !specialChoice) {
  alert('using default password settings')
  userDefault = true;}
  }
// END OF FUNCTION


  function createPassword () {
    if (lowerChoice === true) {
      for ( let i = 0; i < 10; i++){
        generateLowerCase();
        // passwordFreeArray.push(genLower)
      }
    }


    if (upperChoice === true) {
      for ( let i = 0; i < 10; i++){
        generateUpperCase();
        // passwordFreeArray.push(genUpper)
      }
    }


    if (numberChoice === true) {
      for ( let i = 0; i < 10; i++){
        generateRandomNumber();
        // passwordFreeArray.push(genNum)
      }
    }

    
    if (specialChoice === true) {
      for ( let i = 0; i < 10; i++){
        generateRandomSymbol();
        // passwordFreeArray.push(genSymbol)
      }
    }

    let userPassword = [];
    for ( let i = 0; i < choiceLength; i++) {
      let randomizer = Math.floor(Math.random() * choiceLength)+1;
      userPassword.push(passwordFreeArray[randomizer])}

    console.log(`The password bank ${passwordFreeArray}`)
    console.log(`The done password ${userPassword}`)

    finalUserPassword = userPassword.join('')
    console.log(`Your new password is:  ${finalUserPassword}`)
    alert(`Your new password is:  ${finalUserPassword}`)
  }

function generatePassword() {
questionsPrompt();
createPassword();
}


// Assignment Code//
var generateBtn = document.querySelector("#generate");

// Write password to the #password input//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);


