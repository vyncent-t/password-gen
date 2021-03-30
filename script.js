const chosenPassword = [ '' ];
const symbols = ' !#$%&()*+,-./:;<=>?@[]^_{|}~ ';

let passwordText = document.querySelector('#password');
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
let finalUserPassword;

let passwordOptions = {
	lengthOption: choiceLength,
	lowerOption: lowerChoice,
	upperOption: upperChoice,
	numberOption: numberChoice,
	specialOption: specialChoice,
	defaultOption: userDefault
};


let passwordFreeArray = [];

//Generates a random number
function generateRandomNumber() {
	genNum = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
	passwordFreeArray.push(genNum);
}

//Generates random symbol
function generateRandomSymbol() {
	genSymbol = symbols[Math.floor(Math.random() * symbols.length)];
	passwordFreeArray.push(genSymbol);
}

//Generates random letters
function generateLowerCase() {
	genLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	passwordFreeArray.push(genLower);
}

function generateUpperCase() {
	genUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
	passwordFreeArray.push(genUpper);
}

let questionsPrompt = function() {
	let userLength = confirm('Do you want to set a length? yes/no');

	if(userLength){
    choiceLength = prompt('Please choose a length of at least 8 characters and no more than 128 characters');
  } else {
    choiceLength = 8;
  }

	while (parseInt(choiceLength) < 8 || parseInt(choiceLength) > 128 || isNaN(choiceLength) || !choiceLength) {
		choiceLength = prompt('Please choose a length of at least 8 characters and no more than 128 characters');
	}

	if (parseInt(choiceLength) >= 8 || parseInt(choiceLength) <= 128) {
		console.log(`user set length to ${choiceLength}`);
		// alert(`user set length to ${choiceLength}`);
		passwordLength = parseInt(choiceLength);
	}

	// LOWERCASE
	if (passwordLength) {
		lowerChoice = confirm('would you like to use any lowercase letters? yes/no');
	} 

		if (lowerChoice) {
		console.log(`user chose lowercase`);
		lowerChoice = true;}
	else {
		console.log('user chose lowercase set false');
		lowerChoice = false;
	}

	// UPPERCASE
	let upperQuestion = confirm('Would you like to use any uppercase letters? yes/no');

	if (upperQuestion) {
		console.log(`user chose uppercase`);
		upperChoice = true;
	} else {
		console.log('user chose uppercase set false');
		upperChoice = false;
	}

	// NUMBERS
	let interQuestion = confirm('Would you like to use any numbers? yes/no');

	if (interQuestion) {
		console.log(`user chose number`);
		numberChoice = true;
	} else {
		console.log('user chose number set false');
		numberChoice = false;
	}

	// SPECIAL
	let funkyQuestion = confirm('Would you like to use any special characters? yes/no');

	if (funkyQuestion) {
		console.log(`user chose special char`);
		specialChoice = true;
	} else {
		console.log('user chose special char set false');
		specialChoice = false;
	}

	if (!lowerChoice && !upperChoice && !numberChoice && !specialChoice) {
		alert('using default password settings');
		userDefault = true;
	}
};
// END OF FUNCTION

function createPassword() {
	if (lowerChoice === true) {
		for (let i = 0; i < 10; i++) {
			generateLowerCase();
		}
	}

	if (upperChoice === true) {
		for (let i = 0; i < 10; i++) {
			generateUpperCase();
		}
	}

	if (numberChoice === true) {
		for (let i = 0; i < 10; i++) {
			generateRandomNumber();
		}
	}

	if (specialChoice === true) {
		for (let i = 0; i < 10; i++) {
			generateRandomSymbol();
		}
	}

	let userPassword = [];
	for (let i = 0; i < passwordLength; i++) {
		let randomizer = Math.floor(Math.random() * passwordFreeArray.length) + 1;
		userPassword.push(passwordFreeArray[randomizer]);
	}

	console.log(`The password bank ${passwordFreeArray}`);
	console.log(`The done password ${userPassword}`);

	finalUserPassword = userPassword.join('');
	console.log(`Your new password is:  ${finalUserPassword}`);
	passwordText.value = finalUserPassword;
}

function generatePassword() {
	questionsPrompt();
	createPassword();
}

// Assignment Code//
var generateBtn = document.querySelector('#generate');


// Add event listener to generate button//
generateBtn.addEventListener('click', generatePassword);
