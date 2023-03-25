const quizForm = document.querySelector('form');
const resultsDiv = document.getElementById('results');

quizForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const answers = ['12', '5', '18'];
  let score = answers.filter((answer, i) => {
    const userAnswer = document.querySelector(`#q${i+1}`).value;
    return userAnswer === answer;
  }).length;

  resultsDiv.innerHTML= `You scored ${score} out of 3.`;
});