//Michael F.
// Answer array
let answers = [
    { answer: 'I doubt it.', theme: 'negative' },
    { answer: 'The stars are aligned', theme: 'positive' },
    { answer: 'The bones say no.', theme: 'negative' },
    { answer: 'You betcha!', theme: 'positive' },
    { answer: 'Why not?!', theme: 'neutral' },
    { answer: 'Check your horoscope.', theme: 'neutral' },
    { answer: 'Sure', theme: 'positive' },
    { answer: 'Without a doubt!', theme: 'neutral' },
    { answer: 'Chances are slim.', theme: 'negative' },
    { answer: 'What does your conscience say?', theme: 'neutral' }
];

// Function to get a random answer
function getRandomAnswer() {
    let randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

//Kane E. added some localstorage
//function to save question-answer pair to local storage
function saveToLocalStorage(question, answer, theme) {
    //get existing question-answer history or initialize an empty array
    let history = JSON.parse(localStorage.getItem('magic8BallHistory')) || [];

    //add new question-answer pair
    history.push({ question: question, answer: answer, theme: theme });
    //save updated history back to local storage
    localStorage.setItem('magic8BallHistory', JSON.stringify(history));
}

//function to display the saved history
function displayHistory() {
    let history = JSON.parse(localStorage.getItem('magic8BallHistory')) || [];
    let historyContainer = document.getElementById('history-container'); //use the history container
    historyContainer.innerHTML = ''; //clear the container before appending

    //create and append each saved question-answer pair
    history.forEach(entry => {
        let historyItem = document.createElement('p');
        historyItem.innerText = `Question: ${entry.question} | Answer: ${entry.answer} | Theme: ${entry.theme}`;
        historyContainer.appendChild(historyItem);
    });

}
//rani
document.getElementById('submit-btn').addEventListener('click', function () {
    // Capture the user input
    let question = document.getElementById('question-input').value;

    // Trigger an answer generator (for now, just a simple response)
    if (question.trim() !== "") {
        let randomAnswer = getRandomAnswer();
        let theme = randomAnswer.theme;
        //display the response and answer
        document.getElementById('response').innerText = "You asked: " + question;
        document.getElementById('answer-output').innerText = randomAnswer.answer;
        //display the random them
        document.getElementById("theme-output").innerText = randomAnswer.theme;
        //save the question and answer to local storage
        saveToLocalStorage(question, randomAnswer.answer, theme);


        // Clear the input field
        document.getElementById('question-input').value = '';
        //Michael F. - optionally, you can change the background color based on the theme
        document.body.classList.remove('body-positive', 'body-neutral', 'body-negative');

        if (theme === 'positive') {
            document.body.classList.add('body-positive');
        } else if (theme === 'neutral') {
            document.body.classList.add('body-neutral');
        } else if (theme === 'negative') {
            document.body.classList.add('body-negative');
        }

    } else {
        document.getElementById('response').innerText = "Please type a question.";
    }
});

window.onload = function () {
    displayHistory();
};


