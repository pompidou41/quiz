const fs = require('fs');
const { EOL } = require('os');

class Question {
  constructor({ theme, text, answer, points }) {
    this.theme = theme;
    this.text = text;
    this.answer = answer;
    this.points = points ?? 100;
  }

  createFile() {
    const path = `topics/${this.theme}.txt`;
    fs.appendFileSync(
      path,
      `${this.text}${EOL}${this.answer}${EOL}${this.points}${EOL}${EOL}`
    );
  }
}

// let day = new Question({
//   theme: 'факты',
//   text: 'Правда ли в дне 24 час?',
//   answer: 'да',
// });
// let week = new Question({
//   theme: 'данетка',
//   text: 'Правда ли в неделе 24 час?',
//   answer: 'нет',
//   points: 150,
// });
