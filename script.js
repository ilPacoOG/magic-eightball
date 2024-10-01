


let answers = [
{
    answer: 'I doubt it.',
    theme: 'negative'
},
{
    answer: 'The starts are aligned',
    theme: 'positive',
},
{    
    answer: 'The bones say no.',
    theme: 'negative',
},
{    
    answer: 'You betcha!',
    theme: 'positive',
},
{    
    answer: 'Why not?!',
    theme: 'neutral',
},
{
    answer: 'Check your horoscope.',
    theme: 'neutral',
},
{   answer: 'Sure',
    theme: 'positive',
},
{
    answer: 'Without a doubt!',
    theme: 'neutral',
},
{   
    answer: 'Chances are slim.',
    theme: 'negative',
},
{
    answer: 'What does your conscience say?',
    theme: 'neutral',
}
]

function getAnswer() {
    let.question = document.getElementById('question-input').value; 

    let randomIndex = Math.floor(Math.random() * answers.length);
    let selectedAnswer = answers[randomIndex]; 
    
    document.getElementById("answer-output").innerText = selectedAnswer.answer;
    document.getElementById("theme-output").innerText = selectedAnswer.theme;
    
    
    if (question.trim() !== "") {
        document.getElementById('response').innerText = "You asked: " + question;
    } else {
        document.getElementById('response').innerText = "Please type a question.";
    }

    document.body.classList.remove('positive', 'neutral', 'negative');
    

    if (selectedAnswer.theme === 'positive') {
        document.body.style.backgroundColor = 'purple';
    } else if (selectedAnswer.theme === 'neutral') {
        document.body.style.backgroundColor = 'lightgray';
    } else if (selectedAnswer.theme === 'negative') {
        document.body.style.backgroundColor = 'red';
    }
};
