


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
    theme: 'nuetral',
},
{
    answer: 'Check your horoscope.',
    theme: 'nuetral',
},
{   answer: 'Sure',
    theme: 'positive',
},
{
    answer: 'Without a doubt!',
    theme: 'nuetral',
},
{   
    answer: 'Chances are slim.',
    theme: 'negative',
},
{
    answer: 'What does your conscience say?',
    theme: 'nuetral',
}
]

function displayAnswer() {
    let randomIndex = Math.floor(Math.random() * answers.length);
    let selectedAnswer = answers[randomIndex];

    console.log('Answer:', selectedAnswer.answer);
    console.assert('Theme:', selectedAnswer.theme);

    if (selectedAnswer.theme === 'positive') {
        document.body.style.backgroundColor = 'purple';
    } else if (selectedAnswer.theme === 'neutral') {
        document.body.style.backgroundColor = 'lightgray';
    } else if (selectedAnswer.theme === 'negative') {
        document.body.style.backgroundColor = 'red';
    }
}
displayAnswer();