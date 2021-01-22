var readline = require("readline-sync");
var chalk = require("chalk");
var userName = readline.question(chalk.green("Please enter your name : "));

console.log(chalk.cyan("Hey "+userName+"! Let's check if your were born in a leap year or not"));

//input 
var yearInput = readline.question(chalk.cyan("\nEnter your year of birth in YYYY format : "));

// dateMonthArray = dobInput.split("/");
// date = dateMonthArray[0];
// month = dateMonthArray[1];
// year = dateMonthArray[2];
//output

if(checkValidYear(yearInput)){
  // console.log("here1");
  if(checkLeapYear(yearInput)){
    console.log(chalk.bgBlue("\nYou were born in a leap year"));
  }
  else{
    console.log(chalk.bgBlue("\nYou were born in a non-leap year"));
  }
  }
  else{
    console.log(chalk.bgRed("\nPlease enter a valid year, Try again!"));
    // console.log("here6")
  }

// processings

function checkValidYear(year){
  // console.log("here2");
  if(Number.isInteger(year)){
    // console.log("here3");
    return false;
    

  }
  if(year>2021){
    // console.log("here4");
    return false;
    
  }
  // console.log("here5");
  return true; //in all other cases
}


// To be a leap year, the year number must be divisible by 4 – except for end-of-century years, which must be divisible by 400.

function checkLeapYear(year){
  // console.log("year is ",year);
  if(year%100===0){
    if(year%400===0){
      // console.log("sec a");
      return true;
    }
    else{
      // console.log("sec b");
      return false;
    }
  }
  else if(year%4===0){
    // console.log("sec c");
    return true;
  }
  else{
    // console.log("sec d");
    return false;
  }
}


