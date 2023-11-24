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

module.exports = Question;
