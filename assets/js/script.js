let answers = [
    { answer: 'I doubt it.', theme: 'negative', image: 'negative1.jpg' },
    { answer: 'The stars are aligned', theme: 'positive', image: 'positive1.jpg' },
    { answer: 'The bones say no.', theme: 'negative', image: 'negative2.jpg' },
    { answer: 'You betcha!', theme: 'positive', image: 'positive2.jpg' },
    { answer: 'Why not?!', theme: 'neutral', image: 'neutral1.jpg' },
    { answer: 'Check your horoscope.', theme: 'neutral', image: 'neutral2.jpg' },
    { answer: 'Im not stopping you DO IT ', theme: 'positive', image: 'positive3.jpg' },
    { answer: 'Without a doubt!', theme: 'positive', image: 'positive4.jpg' },
    { answer: 'Chances are slim.', theme: 'negative', image: 'negative3.jpg' },
    { answer: 'What does your conscience say?', theme: 'neutral', image: 'neutral3.jpg' }
];



// Function to return a random answer and display it on the page
function getAnswer() {
    let question = document.getElementById("question-input").value;
    
    if (question.trim() === "") {
        alert("Please ask a question!");
        return;
    }
    
    let randomIndex = Math.floor(Math.random() * answers.length);
    let selectedAnswer = answers[randomIndex];
    
    // Display the random answer and its theme
    document.getElementById("answer-output").innerText = selectedAnswer.answer;

    // Remove old classes and add the new one
    document.body.classList.remove('body-positive', 'body-neutral', 'body-negative');
    document.querySelector("header").classList.remove('header-positive', 'header-neutral', 'header-negative');
    
    if (selectedAnswer.theme === 'positive') {
        document.body.classList.add('body-positive');
        document.querySelector("header").classList.add('header-positive');
    } else if (selectedAnswer.theme === 'neutral') {
        document.body.classList.add('body-neutral');
        document.querySelector("header").classList.add('header-neutral');
    } else if (selectedAnswer.theme === 'negative') {
        document.body.classList.add('body-negative');
        document.querySelector("header").classList.add('header-negative');
    }

    // Update image based on the theme
    let imgElement = document.getElementById('theme-image');
    imgElement.src = `./assets/images/${selectedAnswer.image}`;

    // Save the question-answer pair to local storage
    saveToLocalStorage(question, selectedAnswer.answer);
}



// Function to save question-answer pair to local storage
function saveToLocalStorage(question, answer) {
    let history = JSON.parse(localStorage.getItem('magic8BallHistory')) || [];
    history.push({ question: question, answer: answer });
    localStorage.setItem('magic8BallHistory', JSON.stringify(history));

    displayHistory(); // Live update history
}



// Function to display history
function displayHistory() {
    let history = JSON.parse(localStorage.getItem('magic8BallHistory')) || [];
    let historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; 

    history.forEach(entry => {
        let historyItem = document.createElement('p');
        historyItem.innerText = `Question: ${entry.question} | Answer: ${entry.answer}`;
        historyContainer.appendChild(historyItem);
    });
}



document.getElementById('submit-btn').addEventListener('click', function() {
    getAnswer();
});


window.onload = function () {
    displayHistory();
};
