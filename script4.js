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
    document.getElementById("theme-output").innerText = selectedAnswer.theme;

    // Optionally, you can change the background color based on the theme
    document.body.classList.remove('body-positive', 'body-neutral', 'body-negative');
    
    if (selectedAnswer.theme === 'positive') {
        document.body.classList.add('body-positive');
    } else if (selectedAnswer.theme === 'neutral') {
        document.body.classList.add('body-neutral');
    } else if (selectedAnswer.theme === 'negative') {
        document.body.classList.add('body-negative');
    }
}
