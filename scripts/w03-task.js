/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {                                                   // Defined function named add
    return number1 + number2;                                                       // Function returned sum of 2 numbers
};

function addNumbers (add1, add2) {                                                  // This function gets 2 HTML form controls

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
};

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract (number1, number2) {
    return number1 - number2;
};

function subtractNumbers (subtract1, subtract2) {

    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = (factor1, factor2) => {
    let multiplyNumber1 = document.querySelector('#factor1').value;
    let multiplyNumber2 = document.querySelector('#factor2').value;
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = () => {
    let dividend = document.querySelector('#dividend').value;
    let divisor = document.querySelector('#divisor').value;
    document.querySelector('#quotient').value = divide(dividend, divisor);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

let currentDate = new Date();                               // Declare and instantiate a variable to store current date
let currentYear;                                            // A variable to hold current year
currentYear = currentDate.getFullYear();                    // Assign getFullYear() function to currentYear variable

const yearInput = document.getElementById('year');          // Assign current year to HTML form element with ID
yearInput.value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];          //Declare and instatiate an array variable to hold numbers.

const arrayElement = document.getElementById('array')       // Get HTML element with an ID 'array'.

arrayElement.textContent = numberArray.join(', ');          // Assign value of the array variable to HTML element.

/* Output Odds Only Array */

const oddNumber = numberArray.filter(number => number % 2 !== 0);
const oddsElement = document.getElementById('odds');
oddsElement.textContent = oddNumber.join(', ');

/* Output Evens Only Array */

const evenNumber = numberArray.filter(number => number % 2 === 0);
const evensElement = document.getElementById('evens');
evensElement.textContent = evenNumber.join(', ');

/* Output Sum of Org. Array */

const sum = numberArray.reduce((numberAdded, currentValue) => numberAdded + currentValue, 0);           // Summing up all variable elements

const sumElement = document.getElementById('sumOfArray');                                               // Assigning above result to HTML element 'sumOfArray'

sumElement.textContent = sum;

/* Output Multiplied by 2 Array */

const multipliedArray = numberArray.map(element => element * 2);

const multipliedElement = document.getElementById('multiplied');

multipliedElement.textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = multipliedArray.reduce((numberAdded, currentValue) => numberAdded + currentValue)

const sumOfMultipliedElement = document.getElementById('sumOfMultiplied');

sumOfMultipliedElement.textContent = sumOfMultiplied;

