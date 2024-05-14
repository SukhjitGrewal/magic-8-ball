var eightBallBtn = document.getElementById("magic8");
var questionInput = document.getElementById("input");
var answerSpan = document.getElementById("span");
eightBallBtn.addEventListener("click", answerQuestion);

function answerQuestion() {
  let question = questionInput.value;
  console.log(question);
  let answer = Math.floor(Math.random() * (6 - 1) + 1);
  console.log(answer);

  if (question.toLowerCase() == `does a magic 8 ball actually work`) {
    answerSpan.innerHTML = `How dare you doubt me`;
  } else if (question.toLowerCase() == `is computer science fun`) {
    answerSpan.innerHTML = `It's the best`;
  } else if (question.toLowerCase() == `is pineapple on pizza`) {
    answerSpan.innerHTML = `Always`;
  } else if (question.toLowerCase() == `is javascript awesome`) {
    answerSpan.innerHTML = `Of course!`;
  } else if (answer == 1 && question.length > 0) {
    answerSpan.innerHTML = `Without a Doubt`;
  } else if (answer == 2 && question.length > 0) {
    answerSpan.innerHTML = `As I see it, yes`;
  } else if (answer == 3 && question.length > 0) {
    answerSpan.innerHTML = `Concentrate ans ask again`;
  } else if (answer == 4 && question.length > 0) {
    answerSpan.innerHTML = `Don't count on it`;
  } else if (answer == 5 && question.length > 0) {
    answerSpan.innerHTML = `Outlook not so good`;
  } else {
    answerSpan.innerHTML = `Please ask a question`;
  }
}
