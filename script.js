let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const guessInput = document.getElementById('guess');
    const guess = Number(guessInput.value);
    attempts++;

    let resultText;

    if (guess < 1 || guess > 100) {
        resultText = "Please enter a number between 1 and 100.";
    } else if (guess === randomNumber) {
        resultText = `Congratulations! You guessed it in ${attempts} attempts!`;
        document.getElementById('reset').style.display = 'block';
        document.getElementById('submit').disabled = true;
    } else if (guess < randomNumber) {
        resultText = "Too low! Try again.";
    } else {
        resultText = "Too high! Try again.";
    }

    document.getElementById('result').innerText = resultText;
    guessInput.value = '';
});

document.getElementById('reset').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('submit').disabled = false;
});
