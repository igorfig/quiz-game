// O que vai ter
// Um contador de acertos para ser mostrado no final

const Quiz = [
  { // 1
    question: "Quanto tempo a luz do Sol demora para chegar à Terra?",
    answer: "8 minutos",
    choices: ["1 dia", "12 horas", "12 minutos"],
  },

  { // 2
    question: "Qual a capital do Canadá?",
    answer: "Ottawa",
    choices: ["Vancouver", "Montreal", "Toronto"],
  },

  { // 3
    question: "Qual a única parte do corpo humano não recebe sangue?",
    answer: "A Córnea",
    choices: ["A parte posterior do cérebro", "A Lingua", "A parte inferior das orelhas"],
  },

  { // 4
    question: "De onde é a invenção do chuveiro elétrico?",
    answer: "Brasil",
    choices: ["França", "Itália", "Austrália"],
  },

  { // 5
    question: "Qual o grupo em que todas as palavras foram escritas corretamente?",
    answer: "Asterisco, beneficente, meteorologia, entretido",
    choices: [
      "Asterístico, beneficiente, meteorologia, entertido",
     "Asterisco, beneficente, metereologia, entretido",
      "Asterisco, beneficiente, metereologia, entretido"
    ],
  },

  { // 6
    question: "Quais são os cromossomos que determinam o sexo masculino?",
    answer: "Os Y",
    choices: ["Os V", "Os X", "Os Z"],
  },

  { // 7
    question: "Um anel tem 3 pedras preciosas. Quantas pedras preciosas têm 11 anéis?",
    answer: "33",
    choices: ["333", "110", "30"],
  },

  { // 8
    question: "Qual o planeta mais próximo do Sol?",
    answer: "Mercúrio",
    choices: ["Netuno", "Marte", "Júpiter"],
  },

  { // 9
    question: "Qual foi a série mais assistida da Netflix em 2019?",
    answer: "Stranger Things",
    choices: ["La Casa de Papel", "Lucifer", "The Witcher"],
  },

  { // 10
    question: 'Quantos zeros há no número "UM TRILHÃO"?',
    answer: "Doze(12)",
    choices: ["Seis(6)", "Nove(9)", "Treze(13)"],
  },
];

const Display = {
  show: className =>  document.querySelector(`${className}`).classList.remove("no-display"),
  hide: className => document.querySelector(`${className}`).classList.add("no-display")
}

const spinnerLoading = {
  add() {
    Display.show(".loader-animation-container")
    document.body.classList.add("overflow-hidden");
    Display.hide("header");
    document.querySelector(".forward-button-container").classList.add("hide")
    Display.hide(".question");
    Display.hide(".answers-container");
  },

  remove(timeout) {
    setTimeout(() => {
      Display.hide(".loader-animation-container")
      document.body.classList.remove("overflow-hidden");
      Display.show("header");
      Display.show(".question");
      Display.show(".answers-container");
    }, timeout);
  },

  init(timeout) {
    spinnerLoading.add();
    spinnerLoading.remove(timeout);
  },
};

function showQuestions(progress) {
  const questionContainer = document.querySelector(".question p");
  const btnAnswers = [...document.querySelectorAll(".answers-container button")];

  if (progress === 1) {
    questionContainer.textContent = Quiz[0].question;
    btnAnswers[0].textContent = Quiz[0].choices[2];
    btnAnswers[1].textContent = Quiz[0].choices[0];
    btnAnswers[2].textContent = Quiz[0].answer;
    btnAnswers[3].textContent = Quiz[0].choices[1];
  } else if (progress === 2) {
    questionContainer.textContent = Quiz[1].question;
    btnAnswers[0].textContent = Quiz[1].answer;
    btnAnswers[1].textContent = Quiz[1].choices[0];
    btnAnswers[2].textContent = Quiz[1].choices[1];
    btnAnswers[3].textContent = Quiz[1].choices[2];
  } else if (progress === 3) {
    questionContainer.textContent = Quiz[2].question;
    btnAnswers[0].textContent = Quiz[2].choices[0];
    btnAnswers[1].textContent = Quiz[2].answer;
    btnAnswers[2].textContent = Quiz[2].choices[2];
    btnAnswers[3].textContent = Quiz[2].choices[1];
  } else if (progress === 4) {
    questionContainer.textContent = Quiz[3].question;
    btnAnswers[0].textContent = Quiz[3].answer;
    btnAnswers[1].textContent = Quiz[3].choices[2];
    btnAnswers[2].textContent = Quiz[3].choices[0];
    btnAnswers[3].textContent = Quiz[3].choices[1];
  } else if (progress === 5) {
    questionContainer.textContent = Quiz[4].question;
    btnAnswers[0].textContent = Quiz[4].choices[0];
    btnAnswers[1].textContent = Quiz[4].choices[2];
    btnAnswers[2].textContent = Quiz[4].choices[1];
    btnAnswers[3].textContent = Quiz[4].answer;
  } else if (progress === 6) {
    questionContainer.textContent = Quiz[5].question;
    btnAnswers[0].textContent = Quiz[5].choices[2];
    btnAnswers[1].textContent = Quiz[5].choices[0];
    btnAnswers[2].textContent = Quiz[5].answer;
    btnAnswers[3].textContent = Quiz[5].choices[1];
  } else if (progress === 7) {
    questionContainer.textContent = Quiz[6].question;
    btnAnswers[0].textContent = Quiz[6].choices[0];
    btnAnswers[1].textContent = Quiz[6].choices[1];
    btnAnswers[2].textContent = Quiz[6].answer;
    btnAnswers[3].textContent = Quiz[6].choices[2];
  } else if (progress === 8) {
    questionContainer.textContent = Quiz[7].question;
    btnAnswers[0].textContent = Quiz[7].answer;
    btnAnswers[1].textContent = Quiz[7].choices[0];
    btnAnswers[2].textContent = Quiz[7].choices[1];
    btnAnswers[3].textContent = Quiz[7].choices[2];
  } else if (progress === 9) {
    questionContainer.textContent = Quiz[8].question;
    btnAnswers[0].textContent = Quiz[8].choices[2];
    btnAnswers[1].textContent = Quiz[8].choices[1];
    btnAnswers[2].textContent = Quiz[8].choices[0];
    btnAnswers[3].textContent = Quiz[8].answer;
  } else if (progress === 10) {
    questionContainer.textContent = Quiz[9].question;
    btnAnswers[0].textContent = Quiz[9].choices[0];
    btnAnswers[1].textContent = Quiz[9].choices[2];
    btnAnswers[2].textContent = Quiz[9].answer;
    btnAnswers[3].textContent = Quiz[9].choices[1];
  }

  return btnAnswers;
}

let success = 0;
let fails = 0;
let total;
let progressAccumulator = 1;

function validateOptions(progress) {
  const index = progressAccumulator - 1;
  const btnAnswers = showQuestions(progress);
  const currentAnswer = btnAnswers.filter(
    (button) => button.textContent === Quiz[index].answer
  );

  btnAnswers.forEach((button) => {
    button.onclick = (e) => {
      btnAnswers[0].disabled = true;
      btnAnswers[1].disabled = true;
      btnAnswers[2].disabled = true;
      btnAnswers[3].disabled = true;

      if (e.target === currentAnswer[0]) {
        success++;
        e.target.classList.add("btn-success");

      } else {
        e.target.classList.add("btn-fail");
        currentAnswer[0].classList.add("btn-success");
        fails++
      }
      total = fails + success;
      if(total < 10) {
        setTimeout(() => document.querySelector(".forward-button-container").classList.remove("hide"), 300)
      }
      
      if(progress === 10 && total === 10) {
        const finalResultMessage = document.querySelector(".final-result p");
        if(success === 10) {
          finalResultMessage.textContent = `Incrível, Você acertou ${success} de 10!`
          document.querySelector(".small-message").textContent = `Que tal desafiar os seus amigos e ver se eles vão tão bem quanto você?`
        } else if(success >= 5) {
          finalResultMessage.textContent = `Parabéns, você acertou ${success} de 10!`
        } else if (success < 5) {
          finalResultMessage.textContent = `Você acertou ${success} de 10`
        }
      
        setTimeout(() => {
          showFinalResult();
        }, 150)
      }
    };
  });
}
const progress = document.querySelector(".progress");
progress.textContent = `${progressAccumulator}/10`;

const next = () => {
  progressAccumulator < 11 ? progressAccumulator++ : progressAccumulator;
  progress.textContent = `${progressAccumulator}/10`;

  const btnAnswers = [
    ...document.querySelectorAll(".answers-container button")
  ];
  btnAnswers[0].disabled = false;
  btnAnswers[1].disabled = false;
  btnAnswers[2].disabled = false;
  btnAnswers[3].disabled = false;

  btnAnswers.forEach((button) => {
    button.classList.remove("btn-fail");
    button.classList.remove("btn-success");
  });

  validateOptions(progressAccumulator);
  spinnerLoading.init(150);

  if (progressAccumulator === 10) {
    document
      .querySelector(".forward-button-container")
      .classList.add("hide");
  }
};

function showFinalResult (){
  spinnerLoading.add();
  setTimeout(() => {
    Display.hide(".loader-animation-container");
    Display.show("header");
    document.body.classList.remove("overflow-hidden");
    Display.show(".final-result-container");
  }, 500)
  }

const App = {
  init() {
    window.onload = () => spinnerLoading.init(300);
    document
      .querySelector(".forward-button-container .next")
      .addEventListener("click", next);

    showQuestions(progressAccumulator);
    validateOptions(progressAccumulator);
  },

  reload: () => document.location.reload()
};

document.querySelector(".reload-button").onclick = () => App.reload();
App.init();
