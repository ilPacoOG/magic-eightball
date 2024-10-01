//rani
document.getElementById('submit-btn').addEventListener('click', function() {
    // Capture the user input
    let question = document.getElementById('question-input').value;

    // Trigger an answer generator (for now, just a simple response)
    if (question.trim() !== "") {
        document.getElementById('response').innerText = "You asked: " + question;
    } else {
        document.getElementById('response').innerText = "Please type a question.";
    }

    // Clear the input field
    document.getElementById('question-input').value = '';
});

//Michael F.
let answers = [{
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

//changes by Kane
// can possibly be used for the theme output function

// const outputElement = document.getElementById("output");

// function applyTheme(theme) {
//     outputElement.classList.remove("light-theme", "dark-theme");
//     outputElement.classList.add (theme);
// }

// const theme = positive; //may need to replace this depending on our condition

// if (condition) {
//     applyTheme("dark-theme");
// } else {
//     applyTheme("light-theme");
// }

//end of changes by kane

