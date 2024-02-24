const buttonOne = document.getElementById("exercise-btn-one");
const buttonTwo = document.getElementById("exercise-btn-two");
const buttonThree = document.getElementById("exercise-btn-three");

function runExerciseOne() {
    let numberOne = 0;
    let numberTwo = 0;
    let sum = 0;

    do {
        numberOne = prompt("Enter a number");
        numberTwo = prompt("Enter a another number");
        sum = parseInt(numberOne) + parseInt(numberTwo);

        if (isNaN(sum)) {
            alert("Numbers entered were not valid numbers. Please try again.");
        }

    } while (isNaN(sum));

    alert(`The sum of those two numbers is ${sum}`);
}


function runExerciseTwo() {
    let number = 0;

    do {
        number = prompt("Enter a number to see whether it is even or odd.");

        if (isNaN(number)) {
            alert("That was not a number. Please try again.");
        }

    } while (isNaN(number))

    if (number % 2 == 0) {
        alert(`${number} is even`);
    } else {
        alert(`${number} is odd`);
    }
}


function runExerciseThree() {
    let numbers = [];
    let maxInputs = 5;
    let average = 0;
    let minValue = 0;
    let maxValue = 0;
    let totalValue = 0;

    let inputsAreValid = false;

    do {
        numbers = getNumbers(numbers, maxInputs);
        inputsAreValid = isArrayValid(numbers);

        if (!inputsAreValid) {
            alert("One or more of the entered numbers was invalid. Please try again.");
            numbers = []
        }
    } while(!inputsAreValid);

    // Find max value, not using the built in function
    for (let i = 0; i < numbers.length; i++) {
        if (i === 0) {
            maxValue = numbers[i];
        } else {
            if (numbers[i] > maxValue) {
                maxValue = numbers[i];
            }
        } 
    }

    // find min
    for (let i = 0; i < numbers.length; i++) {
        if (i === 0) {
            minValue = numbers[i];
        } else {
            if (numbers[i] < minValue) {
                minValue = numbers[i];
            }
        } 
    }

    // find avg
    for (let i = 0; i < numbers.length; i++) {
        totalValue += numbers[i];
    }
    average = totalValue / numbers.length;

    alert(`The average of the entered numbers is ${average}. The minimum value is ${minValue} and the maximum value is ${maxValue}`);
}

function getNumbers(numberArray, maxNumbers) {
    do {
        let number = prompt("Enter a number");
        numberArray.push(parseInt(number));

    } while (numberArray.length < maxNumbers);

    return numberArray;
}

function isArrayValid(numberArray) {
    let invalidEntryCount = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (isNaN(numberArray[i])) {
            invalidEntryCount += 1;
        }
    }

    if (invalidEntryCount === 0) {
        return true;
    } else {
        return false;
    }
}


buttonOne.addEventListener("click", runExerciseOne);
buttonTwo.addEventListener("click", runExerciseTwo);
buttonThree.addEventListener("click", runExerciseThree);