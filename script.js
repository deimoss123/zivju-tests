import categories from "./questions.js";

/**
 * Atbilžu vēsture, katram jautājumam ir skaitļu masīvs ar lietotāja atbildēm
 * tukšs Set, ja nav atbildējis
 *
 * @type {Set<number>[]}
 * */
let answerHistory = [];

let currentCategoryKey = null;
let currentCategory = null; 
let currentQuestionIndex = 0;

function startTest(categoryKey) {
  currentQuestionIndex = 0;
  currentCategoryKey = categoryKey;
  currentCategory = categories[categoryKey];
  answerHistory = Array.from({ length: currentCategory.questions.length }, () => new Set());

  displayQuestion();
}

function nextQuestion() {
  if (currentQuestionIndex >= currentCategory.questions.length - 1) {
    displayResults();
    return;
  }

  currentQuestionIndex++;
  displayQuestion();
}

function resetPage() {
  answerHistory = [];
  currentCategoryKey = null;
  currentCategory = null; 
  currentQuestionIndex = 0;

  const rootDiv = document.getElementById("root");

  rootDiv.innerHTML = `
    <p>Izvēlies tēmu, par kuru vēlies pildīt testu</p>
    <button onclick="startTest('zivis')">Tests par zivīm</button>
    <button onclick="startTest('parastaZvejosana')">Tests par parasto zvejošanu</button>
    <button onclick="startTest('zemledusZvejosana')">Tests par zemledus zvejošanu</button>
  `;
}

// šos vajag, citādāk nevar izsaukt iekš html
window.startTest = startTest;
window.nextQuestion = nextQuestion;
window.resetPage = resetPage;


function displayQuestion() {
  const rootDiv = document.getElementById("root");
  const questions = categories[currentCategoryKey].questions;
  const currentQuestion = questions[currentQuestionIndex];

  rootDiv.innerHTML = `
    <h2>${categories[currentCategoryKey].fullName}</h2>
    <p>Jautājums ${currentQuestionIndex + 1} no ${questions.length}</p>
    <p>${currentQuestion.question}</p>
    <ul id="answer-list"></ul>
    <button onclick="nextQuestion()">Nākamais jautājums</button>
  `;

  currentQuestion.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = currentQuestion.multipleChoice ? "checkbox" : "radio";
    input.name = "answer";
    input.value = index;
    input.id = `answer-${index}`;

    li.appendChild(input);

    input.addEventListener("change", () => {
      if (input.type === "radio") {
        answerHistory[currentQuestionIndex] = new Set([index]);
        return;
      }

      if (input.checked) {
        answerHistory[currentQuestionIndex].add(index);
      } else {
        answerHistory[currentQuestionIndex].delete(index);
      }
    });

    const label = document.createElement("label");
    label.htmlFor = `answer-${index}`;
    label.textContent = answer;

    li.appendChild(label);

    rootDiv.querySelector("#answer-list").appendChild(li);
  });
}

function displayResults() {
  const rootDiv = document.getElementById("root");

  let correctAnswers = 0;

  const questions = currentCategory.questions;

  // iet cauri visiem jautājumiem kategorijā
  questions.forEach((question, index) => {
    if (answerHistory[index].size !== question.correctAnswers.length) {
      return;
    }

    // iet cauri visām pareizajām atbildēm
    for (const correctAnswer of question.correctAnswers) {
      if (!answerHistory[index].has(correctAnswer)) {
        return;
      }
    }

    correctAnswers++;
  });

  rootDiv.innerHTML = `
    <h2>${categories[currentCategoryKey].fullName}</h2>
    <p>Tavs rezultāts: ${correctAnswers} no ${questions.length}</p>
    <button onclick="resetPage()">Atgriezties uz sākumu</button>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  resetPage();
});
