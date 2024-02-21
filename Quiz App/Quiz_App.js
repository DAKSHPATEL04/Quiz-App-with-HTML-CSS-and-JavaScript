const question = [
    {
        'que': ' What is CSS?',
        'a': 'CSS is a style sheet language',
        'b': 'CSS is designed to separate the presentation and content, including layout, colors, and fonts',
        'c': 'CSS is the language used to style the HTML documents',
        'd': 'CSS is the language used to style the HTML documents',
        'correct': 'a'
    },
    {
        'que': 'Which of the following tag is used to embed css in html page?',
        'a': '<css>',
        'b': '<!DOCTYPE html>',
        'c': '<script>',
        'd': '<style>',
        'correct': 'd'
    },
    {
        'que': 'Which of the following CSS selectors are used to specify a group of elements?',
        'a': 'tag',
        'b': 'id',
        'c': 'class',
        'd': 'both class and tag',
        'correct': 'd'
    },
    {
        'que': 'Which of the following has introduced text, list, box, margin, border, color, and background properties?',
        'a': 'HTML',
        'b': 'PHP',
        'c': 'CSS',
        'd': 'Ajax',
        'correct': 'c'
    },
    {
        'que': 'Which of the following CSS framework is used to create a responsive design?',
        'a': 'django',
        'b': 'rails',
        'c': 'larawell',
        'd': 'bootstrap',
        'correct': 'd'
    }

]

let index = 0;
let total = question.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.option');
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = question[index];
    
    quesBox.innerText = `${index + 1}) ${data.que}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;


    



    
}

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
                
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

 const endQuiz = () => {
    document.getElementById('box').innerHTML =
    `

        <div style=text-align:center;"> 
        <h3> Thank You For Playing The Quiz. </h3>
        <h2> ${right} / ${total} Are Currect  Answer. </h2>
        </div>
    
    `
 }
loadQuestion();