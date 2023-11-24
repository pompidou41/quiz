const readlinesync = require('readline-sync');
const { EOL } = require('os');
const { elbrusQuestions } = require('./model/themes/elbrus');
const { newYearQuestions } = require('./model/themes/newYear');

function start() {
  const userName = readlinesync.question(`${EOL}Привет! Как тебя зовут?${EOL}`);
  console.log(`${EOL}Привет, ${userName}!`);
  const themes = [elbrusQuestions[0].theme, newYearQuestions[0].theme];
  const index = readlinesync.keyInSelect(themes, `Выбери тему: `);
  if (themes[index] === undefined)
    return console.log(`${EOL}В следующий раз поиграем, пока!${EOL}`);
  console.log(`${EOL}Ты выбрал тему ${themes[index]}. Поехали!${EOL}`);
  let userPoints = 0;
  if (themes[index] === elbrusQuestions[0].theme) {
    for (let i = 0; i < elbrusQuestions.length; i++) {
      console.log(`У тебя ${userPoints} баллов`);
      let userAnswer = readlinesync.question(elbrusQuestions[i].text + EOL);
      if (typeof elbrusQuestions[i].answer === 'string') {
        userAnswer = userAnswer.toLowerCase();
        elbrusQuestions[i].answer = elbrusQuestions[i].answer.toLowerCase();
      }
      if (userAnswer == elbrusQuestions[i].answer) {
        console.log(
          `Верно, ${userName}! Ты молодец! +${elbrusQuestions[i].points}${EOL}`
        );
        userPoints += elbrusQuestions[i].points;
      } else {
        console.log(
          `Эх, неправильно. :( ${userName}, вообще-то ${elbrusQuestions[i].answer}. -${elbrusQuestions[i].points}${EOL}`
        );
        userPoints -= elbrusQuestions[i].points;
      }
    }
  } else if (themes[index] === newYearQuestions[0].theme) {
    for (let i = 0; i < newYearQuestions.length; i++) {
      console.log(`У тебя ${userPoints} баллов`);
      let userAnswer = readlinesync.question(newYearQuestions[i].text + EOL);
      if (typeof newYearQuestions[i].answer == 'string') {
        userAnswer = userAnswer.toLowerCase();
        newYearQuestions[i].answer = newYearQuestions[i].answer.toLowerCase();
      }
      if (userAnswer == newYearQuestions[i].answer) {
        console.log(
          `Верно, ${userName}! Ты молодец! +${newYearQuestions[i].points}${EOL}`
        );
        userPoints += newYearQuestions[i].points;
      } else {
        console.log(
          `Эх, неправильно. :( ${userName}, вообще-то ${newYearQuestions[i].answer}. -${newYearQuestions[i].points}${EOL}`
        );
        userPoints -= newYearQuestions[i].points;
      }
    }
  }
  if (readlinesync.keyInYN(`${EOL}Хочешь сыграть еще?${EOL}`)) {
    start();
  } else {
    console.log(
      `${EOL}🦔🦔🦔 Спасибо за игру, ${userName}! У тебя ${userPoints} баллов. Так держать!${EOL}`
    );
  }
}

start();
