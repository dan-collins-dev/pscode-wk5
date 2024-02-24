
const buttonOne = document.getElementById("exercise-btn-one");

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



buttonOne.addEventListener("click", runExerciseOne);