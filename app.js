const buttonOne = document.getElementById("exercise-btn-one");
const buttonTwo = document.getElementById("exercise-btn-two");

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


buttonOne.addEventListener("click", runExerciseOne);
buttonTwo.addEventListener("click", runExerciseTwo);