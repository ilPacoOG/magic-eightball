let answers = [
    { answer: 'I doubt it.', theme: 'negative' },
    { answer: 'The stars are aligned', theme: 'positive' },
    { answer: 'The bones say no.', theme: 'negative' },
    { answer: 'You betcha!', theme: 'positive' },
    { answer: 'Why not?!', theme: 'neutral' },
    { answer: 'Check your horoscope.', theme: 'neutral' },
    { answer: 'I’m not stopping you, DO IT!', theme: 'positive' },
    { answer: 'Without a doubt!', theme: 'positive' },
    { answer: 'Chances are slim.', theme: 'negative' },
    { answer: 'What does your conscience say?', theme: 'neutral' }
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
    
    // Display the random answer
    document.getElementById("answer-output").innerText = selectedAnswer.answer;

    
     
    document.body.classList.remove('body-positive', 'body-neutral', 'body-negative');
    document.querySelector("header").classList.remove('header-positive', 'header-neutral', 'header-negative');
    // document.getElementById("input-container").classList.remove('container-positive', 'container-neutral', 'container-negative');
    
    if (selectedAnswer.theme === 'positive') {
        document.body.classList.add('body-positive');
        document.querySelector("header").classList.add('header-positive');
        // document.getElementById("input-container").classList.add('container-positive');
    } else if (selectedAnswer.theme === 'neutral') {
        document.body.classList.add('body-neutral');
        document.querySelector("header").classList.add('header-neutral');
        // document.getElementById("input-container").classList.add('container-neutral');
    } else if (selectedAnswer.theme === 'negative') {
        document.body.classList.add('body-negative');
        document.querySelector("header").classList.add('header-negative');
        // document.getElementById("input-container").classList.add('container-negative');
    }
    // console.log(document.querySelector(".container"));
    
    triggerBallSpin();

    
    saveToLocalStorage(question, selectedAnswer.answer);
}

// Function to handle ball spinning animation
function triggerBallSpin() {
    const ball = document.getElementById("ball");
    ball.classList.add("spin");

    // Stop spinning after the animation
    setTimeout(() => {
        ball.classList.remove("spin");
    }, 1000); 
}

// Event listener for button click
document.getElementById('submit-btn').addEventListener('click', function() {
    getAnswer();
});


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


window.onload = function () {
    displayHistory();
};
