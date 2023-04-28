const answers = new Map();

const correct_answers = new Map();
correct_answers.set("#1", "голубое");
correct_answers.set("#2", "4");
correct_answers.set("#3", "6");

let correct = 0;
let incorrect = 0;

document.querySelector("#check_one").onclick = (e) => {
  if (document.querySelector("#input_one").value === "") {
    alert("Введите ответ!");
  } else {
    answers.set("#1", document.querySelector("#input_one").value.toLowerCase());
    console.log(answers.get('#1'))
    document.querySelector(".one_question").style.display = "none";
    document.querySelector(".two_question").style.display = "block";
  }
};

document.querySelector("#check_two").onclick = (e) => {
  if (document.querySelector("#input_two").value === "") {
    alert("Введите ответ!");
  } else {
    answers.set("#2", document.querySelector("#input_two").value);
    console.log(answers.get('#2'))

    document.querySelector(".two_question").style.display = "none";
    document.querySelector(".three_question").style.display = "block";
  }
};

document.querySelector("#check_three").onclick = (e) => {
  if (document.querySelector("#input_three").value === "") {
    alert("Введите ответ!");
  } else {
    answers.set("#3", document.querySelector("#input_three").value);
    console.log(answers.get('#3'))

    document.querySelector(".three_question").style.display = "none";
    document.querySelector(".result").style.display = "block";
    for (const [key, value] of answers.entries()) {
      if (value === correct_answers.get(key)) {
        correct += 1;
      } else {
        incorrect += 1;
      }
    }
  }
  document.querySelector(
    "#correct"
  ).innerText = `Правильные ответы: ${correct}`;
  document.querySelector(
    "#incorrect"
  ).innerText = `Неправильные ответы: ${incorrect}`;
  document.querySelector('#n1').innerText = `"Какого цвета небо?". Ваш ответ: ${answers.get('#1')} (правильный: ${correct_answers.get('#1')})`
  document.querySelector('#n2').innerText = `"Сколько будет 2+2?". Ваш ответ: ${answers.get('#2')} (правильный: ${correct_answers.get('#2')})`
  document.querySelector('#n3').innerText = `"Сколько будет 2+2*2?". Ваш ответ: ${answers.get('#3')} (правильный: ${correct_answers.get('#3')})`
};

// Небо = небо
