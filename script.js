// choose a length of at least 8 characters and no more than 128 characters
var string_length = prompt("Choose Length of password between 8 and 128 characters");

// Prompt if use lowercase characters
var lowercaseInput = prompt("Use lowercase characters: Yes or No?");


//Prompt if use uppercase charcters 
var uppercaseInput = prompt("Use uppercase characters: Yes or No?");


// Prompt if use numeric characters
var numericInput = prompt("Use Numeric charcters: Yes or No?");


//Prompt if use special characters 
var specialInput = prompt("Use Special Character: Yes or No?");




  function generatePassword() {
  password = ""
  passwordCharSet = "";
  lowercase = "abcdefghijklmnopqrstuvwxyz";
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numeric = "0123456789";
  special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  if (lowercaseInput === "yes") {
    passwordCharSet += lowercase;
  }
  if (uppercaseInput === "yes") {
    passwordCharSet += uppercase;
  }
  if (specialInput === "yes") {
    passwordCharSet += special;
  }
  if (numericInput ==="yes") {
    passwordCharSet += numeric;
  }

  for (let i = 0; i < string_length; i++) {
  password += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));
  }
return password;
}

alert(password);















  





