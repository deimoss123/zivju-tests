import categories from "./questions.js";

/**
 * Atbilžu vēsture, katram jautājumam ir skaitļu masīvs ar lietotāja atbildēm
 * tukšs Set, ja nav atbildējis
 *
 * @type {Set<number>[]}
 * */
let answerHistory = [];

let correctlyAnsweredQuestions;

let currentCategoryKey = null;
let currentCategory = null;
let currentQuestionIndex = 0;

// cik daudz laika ir testa izpildei (sekundēs)
const TEST_DURATION = 120;

let startTime;
let endTime;
let intervalID;

function startTest(categoryKey) {
  currentQuestionIndex = 0;
  currentCategoryKey = categoryKey;
  currentCategory = categories[categoryKey];
  correctlyAnsweredQuestions = new Set();

  answerHistory = Array.from(
    { length: currentCategory.questions.length },
    () => new Set(),
  );

  const rootDiv = document.getElementById("root");
  rootDiv.innerHTML = `
    <h2>${currentCategory.fullName}</h2>
    <div id="clock"></div>
    <div id="questions-list">
      ${currentCategory.questions
        .map(
          (_, index) =>
            `<button onclick="goToQuestion(${index})">${index + 1}</button>`,
        )
        .join("")}
    </div>
    <div id="question-container"></div>
  `;

  startTime = Date.now();
  endTime = Date.now() + TEST_DURATION * 1000;

  intervalID = setInterval(() => {
    let remainingTime = endTime - Date.now();
    if (remainingTime <= 0) {
      displayResults();
      return;
    }
    displayClock(remainingTime);
  }, 100);

  displayClock(endTime - Date.now());
  updateQuestionsList();
  displayQuestion();
}

function displayClock(remainingTime) {
  const minutes = Math.floor(remainingTime / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);
  const clock = document.getElementById("clock");
  clock.textContent = `Atlikušais laiks: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function updateQuestionsList() {
  const questionsList = document.getElementById("questions-list");

  Array.from(questionsList.children).forEach((btn, index) => {
    if (index === currentQuestionIndex) {
      btn.className = "current";
    } else if (answerHistory[index].size) {
      btn.className = "answered";
    } else {
      btn.className = "";
    }
  });
}

function nextQuestion() {
  if (currentQuestionIndex >= currentCategory.questions.length - 1) {
    displayResults();
    return;
  }

  currentQuestionIndex++;
  updateQuestionsList();
  displayQuestion();
}

function goToQuestion(index) {
  // šim nekad nevajadzētu notikt, bet drošībai
  if (index < 0 || index >= currentCategory.questions.length) {
    return;
  }

  currentQuestionIndex = index;
  updateQuestionsList();
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
window.goToQuestion = goToQuestion;

function displayQuestion() {
  const questionDiv = document.getElementById("question-container");
  const questions = categories[currentCategoryKey].questions;
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswers = answerHistory[currentQuestionIndex];

  let btnText = "Nākamais jautājums";
  if (currentQuestionIndex + 1 === questions.length) {
    btnText = "Pabeigt testu";
  }

  questionDiv.innerHTML = `
    <p>Jautājums ${currentQuestionIndex + 1} no ${questions.length}</p>
    <p>${currentQuestion.question}</p>
    <ul id="answer-list"></ul>
    <button onclick="nextQuestion()">${btnText}</button>
  `;

  currentQuestion.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.className = "answer-choice";

    const input = document.createElement("input");
    input.type = currentQuestion.multipleChoice ? "checkbox" : "radio";
    input.name = "answer";
    input.value = index;
    input.id = `answer-${index}`;

    if (currentAnswers.has(index)) {
      input.checked = true;
    }

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

    if (currentQuestion.imgAnswers) {
      label.innerHTML = `<img src="${answer}">`;
    } else {
      label.textContent = answer;
    }

    li.appendChild(label);

    questionDiv.querySelector("#answer-list").appendChild(li);
  });
}

function displayResults() {
  clearInterval(intervalID);
  // document.getElementById("clock").style = "display:none;";
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
    correctlyAnsweredQuestions.add(index);
  });

  rootDiv.innerHTML = `
    <h2>${currentCategory.fullName}</h2>
    <p>Tavs rezultāts: ${correctAnswers} no ${questions.length}</p>
    <button onclick="resetPage()">Atgriezties uz sākumu</button>
    <h3>Pārskats</h3>
    <div id="results-list"></div>
  `;

  const resultsList = document.getElementById("results-list");

  questions.forEach((question, qIndex) => {
    const questionContainer = document.createElement("div");
    questionContainer.className = "question-result";

    if (correctlyAnsweredQuestions.has(qIndex)) {
      questionContainer.classList.add("correct");
    }

    const questionHeader = document.createElement("h4");
    questionHeader.textContent = `${qIndex + 1}. Jautājums`;

    questionContainer.appendChild(questionHeader);

    const ul = document.createElement("ul");

    question.answers.forEach((answer, liIndex) => {
      const li = document.createElement("li");
      // li.className = "answer-choice";

      const input = document.createElement("input");
      input.type = question.multipleChoice ? "checkbox" : "radio";
      input.name = `answer-${qIndex}`;
      input.value = liIndex;
      input.id = `answer-${qIndex}-${liIndex}`;
      input.disabled = true;

      if (answerHistory[qIndex].has(liIndex)) {
        input.checked = true;
      }

      const label = document.createElement("label");
      label.htmlFor = `answer-${qIndex}-${liIndex}`;

      if (question.imgAnswers) {
        label.innerHTML = `<img src="${answer}">`;
      } else {
        label.textContent = answer;
      }

      li.appendChild(input);
      li.appendChild(label);
      ul.appendChild(li);
    });

    questionContainer.appendChild(ul);
    resultsList.appendChild(questionContainer);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  resetPage();
});
